/* eslint-disable */
import { saveAs } from 'file-saver'
require('script-loader!file-saver');
// import XLSX from 'xlsx'
import XLSX from 'xlsx-style'

function generateArray (table) {
  var out = [];
  var rows = table.querySelectorAll('tr');
  var ranges = [];
  for (var R = 0; R < rows.length; ++R) {
    var outRow = [];
    var row = rows[R];
    var columns = row.querySelectorAll('td');
    for (var C = 0; C < columns.length; ++C) {
      var cell = columns[C];
      var colspan = cell.getAttribute('colspan');
      var rowspan = cell.getAttribute('rowspan');
      var cellValue = cell.innerText;
      if (cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

      //Skip ranges
      ranges.forEach(function (range) {
        if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
          for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
        }
      });

      //Handle Row Span
      if (rowspan || colspan) {
        rowspan = rowspan || 1;
        colspan = colspan || 1;
        ranges.push({
          s: {
            r: R,
            c: outRow.length
          },
          e: {
            r: R + rowspan - 1,
            c: outRow.length + colspan - 1
          }
        });
      };

      //Handle Value
      outRow.push(cellValue !== "" ? cellValue : null);

      //Handle Colspan
      if (colspan)
        for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
    }
    out.push(outRow);
  }
  return [out, ranges];
};

function datenum (v, date1904) {
  if (date1904) v += 1462;
  var epoch = Date.parse(v);
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays (data, opts) {
  var ws = {};
  var range = {
    s: {
      c: 10000000,
      r: 10000000
    },
    e: {
      c: 0,
      r: 0
    }
  };
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      var cell = {
        v: data[R][C]
      };
      if (cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R
      });

      if (typeof cell.v === 'number') cell.t = 'n';
      else if (typeof cell.v === 'boolean') cell.t = 'b';
      else if (cell.v instanceof Date) {
        cell.t = 'n';
        cell.z = XLSX.SSF._table[14];
        cell.v = datenum(cell.v);
      } else cell.t = 's';

      ws[cell_ref] = cell;
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

function Workbook () {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab (s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

export function export_table_to_excel (id) {
  var theTable = document.getElementById(id);
  var oo = generateArray(theTable);
  var ranges = oo[1];

  /* original data */
  var data = oo[0];
  var ws_name = "SheetJS";

  var wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data);

  /* add ranges to worksheet */
  // ws['!cols'] = ['apple', 'banan'];
  ws['!merges'] = ranges;

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;

  var wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    bookSST: false,
    type: 'binary'
  });

  saveAs(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }), "test.xlsx")
}

export function export_json_to_excel ({
  multiHeader = [],
  firstHeadre, // 列名开头插入内容
  header,
  data,
  filename,
  exlelColor, // 格式['A1', 'B1', 'C1'] 要修改颜色的单元格
  merges = [],
  autoWidth = true,
  bookType = 'xlsx'
} = {}) {
  /* original data */
  filename = filename || 'excel-list'
  data = [...data]
  data.unshift(header);
  for (let i = multiHeader.length - 1; i > -1; i--) {
    data.unshift(multiHeader[i])
  }
  // console.log(JSON.parse(JSON.stringify(data)))
  var ws_name = "SheetJS";
  if (firstHeadre) {
    for (let i = 0; i < firstHeadre.length; i++) {
      data.unshift(firstHeadre[i])
    }
  }
  console.log(JSON.parse(JSON.stringify(data)))
  var wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data);
  if (merges.length > 0) {
    if (!ws['!merges']) ws['!merges'] = [];
    merges.forEach(item => {
      ws['!merges'].push(XLSX.utils.decode_range(item))
    })
  }
  if (autoWidth) {
    /*设置worksheet每列的最大宽度*/
    const colWidth = data.map((row, index) => row.map(val => {
      if (firstHeadre && index < firstHeadre.length) { // 开头的那几个不参与自动宽度的计算
        return {
          'wch': 10
        };
      }
      /*先判断是否为null/undefined*/
      if (val == null) {
        return {
          'wch': 10
        };
      }
      /*再判断是否为中文*/
      else if (val.toString().charCodeAt(0) > 255) {
        let width = val.toString().length * 2.1
        if (width > 30) {
          width = 30
        }
        return {
          'wch': width
        };
      } else {
        let width = val.toString().length * 1.7
        if (width > 30) {
          width = 30
        }
        return {
          'wch': width
        };
      }
    }))
    /*以第一行为初始值*/
    let result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]['wch'] < colWidth[i][j]['wch']) {
          result[j]['wch'] = colWidth[i][j]['wch'];
        }
      }
    }
    ws['!cols'] = result;
  }

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;

  var dataInfo = wb.Sheets[wb.SheetNames[0]];
  // 设置单元格框线
  const borderAll = {
    top: {
      style: "thin",
    },
    bottom: {
      style: "thin"
    },
    left: {
      style: "thin"
    },
    right: {
      style: "thin"
    }
  };

  // // 给所有单元格加上边框，内容居中，字体，字号，标题表头特殊格式部分后面替换
  for (var i in dataInfo) {
    if (
      i == "!ref" ||
      i == "!merges" ||
      i == "!cols" ||
      i == "!rows"
    ) { } else {
      dataInfo[i + ""].s = {
        border: borderAll,
        alignment: {
          horizontal: "center",
          vertical: "center",
          wrapText: 1,//自动换行
          indent: 0//自动换行
        },
        font: {
          name: "黑体",
          sz: 10,
          // color: { rgb: '66ccff' } // 修改字体颜色
        },
        // fill: { fgColor: { rgb: 'ccff66', indexed: '100' }, bgColor: { rgb: '000000', indexed: '1' } } // 修改背景颜色
      };
      if (exlelColor) {
        // let index = exlelColor.indexOf(i)
        if (exlelColor.indexOf(i) >= 0) {
          // dataInfo[i + ""].s.border = borderAll,
          dataInfo[i + ""].s.fill = { fgColor: { rgb: 'ffff00' } }
        }
      }
    }
  }

  // console.log(exlelColor)
  wb.Sheets[wb.SheetNames[0]] = dataInfo
  // console.log(wb)

  var wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: 'binary'
  });
  saveAs(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }), `${filename}.${bookType}`);
}
