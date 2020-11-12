import MjImage from 'mjml-image'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mp-column': ['mp-image'],
  'mj-column': ['mp-image'],
  'mj-hero': ['mp-image'],
  'mp-image': [],
});

export default class MpImage extends MjImage {
  static tagOmission = true

  static allowedAttributes = {
    ...MjImage.allowedAttributes,
    'pardot-region': 'boolean',
    'pardot-removable': 'boolean',
  }

  static defaultAttributes = {
    ...MjImage.defaultAttributes,
    'pardot-region': false,
    'pardot-removable': false,
  }

  // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-image/src/index.js
  renderImage() {
    const height = this.getAttribute('height')

    const img = `
      <img
        ${this.htmlAttributes({
          alt: this.getAttribute('alt'),
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src'),
          srcset: this.getAttribute('srcset'),
          style: 'img',
          title: this.getAttribute('title'),
          width: this.getContentWidth(),
          'pardot-region': this.getAttribute('pardot-region') ? '' : undefined,
        })}
      />
    `

    if (this.getAttribute('href')) {
      return `
        <a
          ${this.htmlAttributes({
            href: this.getAttribute('href'),
            target: this.getAttribute('target'),
            rel: this.getAttribute('rel'),
            name: this.getAttribute('name'),
          })}
        >
          ${img}
        </a>
      `
    }

    return img
  }

  // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-image/src/index.js
  render() {
    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          class:
            this.getAttribute('fluid-on-mobile')
              ? 'full-width-mobile'
              : null,
          'pardot-removable': this.getAttribute('pardot-removable') ? '' : undefined,
        })}
      >
        <tbody>
          <tr>
            <td ${this.htmlAttributes({
              style: 'td',
              class:
                this.getAttribute('fluid-on-mobile')
                  ? 'full-width-mobile'
                  : null,
            })}>
              ${this.renderImage()}
            </td>
          </tr>
        </tbody>
      </table>
    `
  }
}
