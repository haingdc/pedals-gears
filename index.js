// Export đường dẫn tới các file CSS
const path = require('path')

// Các đường dẫn tới các file CSS
const stylesPath = path.join(__dirname, 'dist', 'styles')
const buttonsCss = path.join(stylesPath, 'buttons.css')
const buttonsCustomCss = path.join(stylesPath, 'buttons.custom.css')
const indexCss = path.join(stylesPath, 'index.css')

// Đối tượng export cho việc import động
const cssFiles = {
  buttons: './dist/styles/buttons.css',
  buttonsCustom: './dist/styles/buttons.custom.css',
  index: './dist/styles/index.css',
}

// Cung cấp các hàm tiện ích để import CSS trong JS
function importButtons() {
  return require(buttonsCss)
}

function importButtonsCustom() {
  return require(buttonsCustomCss)
}

function importAllStyles() {
  return require(indexCss)
}

module.exports = {
  paths: cssFiles,
  buttons: cssFiles.buttons,
  buttonsCustom: cssFiles.buttonsCustom,
  importButtons,
  importButtonsCustom,
  importAllStyles,
}
