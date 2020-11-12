const fs = require('fs')
const mjml2html = require('mjml')
const { registerComponent } = require('mjml-core')
const { registerDependencies } = require('mjml-validator')
const {
  MpSection,
  MpImage,
  MpText,
  MpButton,
  MpColumn,
  MpSocialElement,
} = require('./index.js')

registerComponent(MpSection)
registerComponent(MpImage)
registerComponent(MpText)
registerComponent(MpButton)
registerComponent(MpColumn)
registerComponent(MpSocialElement)
// registerDependencies({
//   'mp-section': ['mj-column', 'mj-group', 'mj-raw'],
//   'mj-column': ['mp-image', 'mp-text', 'mp-button'],
//   'mj-hero': ['mp-image'],
//   'mp-button': [],
//   'mp-text': [],
//   'mp-column': [],
// });

// const file = fs.readFileSync(process.argv[2])

// const mjmlContent = mjml2html(file.toString())
// if (mjmlContent.errors.length > 0) {
//     console.log(mjmlContent)
// } else {
//     console.log(mjmlContent.html)
// }

require('mjml-cli')