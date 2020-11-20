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

  renderBefore() {
    const { containerWidth } = this.context

    // Only add div if any of the pardot attributes are true
    const beforeDiv = `
    <div ${this.htmlAttributes({
      'pardot-repeatable': this.getAttribute('pardot-repeatable') ? "" : undefined,
      'pardot-region': this.getAttribute('pardot-region') ? "" : undefined,
      'pardot-removable': this.getAttribute('pardot-removable') ? "" : undefined,
    })}
    `

    return `
      ${this.isPardot() ? beforeDiv : ''}
      <!--[if mso | IE]>
      <table
        ${this.htmlAttributes({
          align: 'center',
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          class: suffixCssClasses(this.getAttribute('css-class'), 'outlook'),
          style: { width: `${containerWidth}` },
          width: parseInt(containerWidth, 10),
        })}
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    `
  }

  renderAfter() {
    return `
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
      ${this.isPardot() ? '</div>' : ''}
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
