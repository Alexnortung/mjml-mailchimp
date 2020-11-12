import MjText from 'mjml-text'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-column': ['mp-text'],
  'mp-column': ['mp-text'],
  'mj-hero': ['mp-text'],
  'mp-text': [],
});

export default class MpText extends MjText {
  static allowedAttributes = {
    ...MjText.allowedAttributes,
    'pardot-removable': 'boolean',
    'pardot-region': 'boolean',
  }

  static defaultAttributes = {
    ...MjText.defaultAttributes,
    'pardot-removable': false,
    'pardot-region': false,
  }

  isHideable() {
    if (this.getAttribute('mp:hideable') !== false) {
      return true
    }

    return false
  }

  renderContent(compound = false) {
    let attrs = {
      'style': 'text',
      'pardot-region': this.getAttribute('pardot-region') ? '' : undefined,
    }

    if (compound === false && this.isHideable()) {
      attrs['mp:hideable'] = true
    }
    return `
      <div
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </div>
    `
  }

  renderContent() {
    return `
      <div
        ${this.htmlAttributes({
          style: 'text',
          'pardot-region': this.getAttribute('pardot-region') ? '' : undefined,
          'pardot-removable': this.getAttribute('pardot-removable') ? '' : undefined,
        })}
      >
        ${this.getContent()}
      </div>
    `
  }
}
