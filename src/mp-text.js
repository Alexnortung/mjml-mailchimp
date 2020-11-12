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
    'mp:edit': 'string',
    'mp:hideable': 'string',
  }

  static defaultAttributes = {
    ...MjText.defaultAttributes,
    'mp:hideable': false
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
      'mp:edit': this.getAttribute('mp:edit'),
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
          'mp:edit': this.getAttribute('mp:edit'),
          'mp:hideable': this.getAttribute('mp:hideable') ? 'mp:hideable' : null,
        })}
      >
        ${this.getContent()}
      </div>
    `
  }
}
