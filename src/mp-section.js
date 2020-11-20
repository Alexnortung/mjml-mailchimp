import { flow, identity, join, filter } from 'lodash/fp'
import { suffixCssClasses } from 'mjml-core'
import MjSection from 'mjml-section'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-body': ['mp-section'],
  'mj-wrapper': ['mp-section'],
  'mp-section': ['mp-column', 'mj-column', 'mj-group', 'mj-raw'],
});

const makeBackgroundString = flow(filter(identity), join(' '))
export default class MpSection extends MjSection {
  static allowedAttributes = {
    ...MjSection.allowedAttributes,
    'pardot-removable': 'boolean',
    'pardot-repeatable': 'boolean',
    'pardot-region': 'boolean',
  }

  static defaultAttributes = {
    ...MjSection.defaultAttributes,
    'pardot-removable': false,
    'pardot-repeatable': false,
    'pardot-region': false,
  }


  isHideable() {
    if (this.getAttribute('pardot-repeatable') !== false) {
      return true
    }

    return false
  }

  isPardot() {
    return this.getAttribute('pardot-repeatable') || this.getAttribute('pardot-region') || this.getAttribute('pardot-removable')
  }

  render() {
    const cssClass = this.getAttribute('css-class') ? this.getAttribute('css-class') : ''
    const beforeDiv = `
    <div ${this.htmlAttributes({
      class: cssClass.split(' ').map(s => 'pardot-section-' + s).join(' '),
      'pardot-repeatable': this.getAttribute('pardot-repeatable') ? "" : undefined,
      'pardot-region': this.getAttribute('pardot-region') ? "" : undefined,
      'pardot-removable': this.getAttribute('pardot-removable') ? "" : undefined,
    })}>
    `
    const afterDiv = `
      </div>
    `
    return `
      ${this.isPardot() ? beforeDiv : ''}
      ${MjSection.prototype.render.call(this)}
      ${this.isPardot() ? afterDiv : ''}
    `
  }

  // MODIFIED from https://github.com/mjmlio/mjml/blob/master/packages/mjml-section/src/index.js
  renderSection() {
    const hasBackground = this.hasBackground()
    const s = `
      <div ${this.htmlAttributes({
        class: this.isFullWidth() ? null : this.getAttribute('css-class'),
        style: 'div',
      })}>
        ${hasBackground
          ? `<div ${this.htmlAttributes({ style: 'innerDiv' })}>`
          : ''}
        <table
          ${this.htmlAttributes({
            align: 'center',
            background: this.isFullWidth()
              ? null
              : this.getAttribute('background-url'),
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'table',
          })}
        >
          <tbody>
            <tr>
              <td
                ${this.htmlAttributes({
                  style: 'td',
                })}
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <![endif]-->
                  ${this.renderWrappedChildren()}
                <!--[if mso | IE]>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        ${hasBackground ? '</div>' : ''}
      </div>
    `
    return s
  }
}
