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
    'mp:edit': 'string',
    'mp:hideable': 'string',
  }

  static defaultAttributes = {
    ...MjImage.defaultAttributes,
    'mp:hideable': false,
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
          'mp:edit': this.getAttribute('mp:edit'),
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
          'mp:hideable': this.getAttribute('mp:hideable') ? 'mp:hideable' : null,
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
