function shuffle() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let range = sheet.getRange("B20:B57");
  let rows = [];
  for (let i = 0; i < range.getHeight(); i++) {
    let row = [];
    for (let j = 0; j < range.getWidth(); j++) {
      row.push(Math.random());
    }
    rows.push(row);
  }
  range.setValues(rows);
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu("席替え").addItem("席替えを開始", "shuffle").addToUi();
}
