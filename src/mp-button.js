import MjButton from 'mjml-button'
import { BodyComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-column': ['mp-button'],
  'mp-column': ['mp-button'],
  'mj-hero': ['mp-button'],
  'mp-button': [],
});

export default class MpButton extends MjButton {
  static endingTag = true

  static allowedAttributes = {
    ...MjButton.allowedAttributes,
    'pardot-region': 'boolean',
    'pardot-removable': 'boolean',
    'pardot-repeatable': 'boolean',
  }

  static defaultAttributes = {
    ...MjButton.defaultAttributes,
    'mp:hideable': false
  }

  isHideable() {
    if (this.getAttribute('mp:hideable') !== false) {
      return true
    }

    return false
  }

  // MODIFIED from https://github.com/mjmlio/mjml/blob/master/packages/mjml-button/src/index.js
  render() {
    const tag = this.getAttribute('href') ? 'a' : 'p'

    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          'pardot-repeatable': this.getAttribute('pardot-repeatable') ? '' : undefined,
          'pardot-removeable': this.getAttribute('pardot-removeable') ? '' : undefined,
        })}
      >
        <tr>
          <td
            ${this.htmlAttributes({
              align: 'center',
              bgcolor:
                this.getAttribute('background-color') === 'none'
                  ? undefined
                  : this.getAttribute('background-color'),
              role: 'presentation',
              style: 'td',
              valign: this.getAttribute('vertical-align'),
              'pardot-region': this.getAttribute('pardot-region') ? '' : undefined,
            })}
          >
            <${tag}
              ${this.htmlAttributes({
                href: this.getAttribute('href'),
                rel: this.getAttribute('rel'),
                name: this.getAttribute('name'),
                style: 'content',
                target: tag === 'a' ? this.getAttribute('target') : undefined,
              })}
            >
              ${this.getContent()}
            </${tag}>
          </td>
        </tr>
      </table>
    `
  }
}
