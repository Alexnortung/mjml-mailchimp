const fs = require('fs')
const mjml2html = require('mjml')
const { registerComponent } = require('mjml-core')
const { registerDependencies } = require('mjml-validator')
const { McSection, McImage, McText, McButton, McColumn } = require('./index.js')

registerComponent(McSection)
registerComponent(McImage)
registerComponent(McText)
registerComponent(McButton)
registerComponent(McColumn)
registerDependencies({
  'mc-section': ['mj-column', 'mj-group', 'mj-raw'],
  'mj-column': ['mc-image', 'mc-text', 'mc-button'],
  'mj-hero': ['mc-image'],
  'mc-button': [],
  'mc-text': [],
  'mc-column': [],
});

const file = fs.readFileSync(process.argv[2])

const mjmlContent = mjml2html(file.toString())
if (mjmlContent.errors.length > 0) {
    console.log(mjmlContent)
} else {
    console.log(mjmlContent.html)
}