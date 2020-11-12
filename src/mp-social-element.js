import { SocialElement } from 'mjml-social'
import { registerDependencies } from 'mjml-validator'


registerDependencies({
    'mj-social': ['mp-social-element'],
    'mp-social-element': [],
})

export default class MpSocialElement extends SocialElement {
    static allowedAttributes = {
        ...SocialElement.allowedAttributes,
        'pardot-repeatable': 'boolean',
        'pardot-removable': 'boolean',
        'pardot-region': 'boolean',
    }

    render() {
    const {
        src,
        srcset,
        sizes,
        href,
        'icon-size': iconSize,
        'icon-height': iconHeight,
    } = this.getSocialAttributes()

    const hasLink = !!this.getAttribute('href')

    return `
        <tr
        ${this.htmlAttributes({
            class: this.getAttribute('css-class'),
            'pardot-repeatable': this.getAttribute('pardot-repeatable') ? "" : undefined,
            'pardot-removable': this.getAttribute('pardot-removable') ? "" : undefined,
            'pardot-region': this.getAttribute('pardot-region') ? "" : undefined,
        })}
        >
        <td ${this.htmlAttributes({ style: 'td' })}>
            <table
            ${this.htmlAttributes({
                border: '0',
                cellpadding: '0',
                cellspacing: '0',
                role: 'presentation',
                style: 'table',
            })}
            >
            <tr>
                <td ${this.htmlAttributes({ style: 'icon' })}>
                ${
                    hasLink
                    ? `<a ${this.htmlAttributes({
                        href,
                        rel: this.getAttribute('rel'),
                        target: this.getAttribute('target'),
                        })}>`
                    : ''
                }
                    <img
                        ${this.htmlAttributes({
                        alt: this.getAttribute('alt'),
                        title: this.getAttribute('title'),
                        height: parseInt(iconHeight || iconSize, 10),
                        src,
                        style: 'img',
                        width: parseInt(iconSize, 10),
                        sizes,
                        srcset,
                        })}
                    />
                    ${hasLink ? `</a>` : ''}
                </td>
                </tr>
            </table>
        </td>
        ${
            this.getContent()
            ? `
            <td ${this.htmlAttributes({ style: 'tdText' })}>
            ${
                hasLink
                ? `<a
                ${this.htmlAttributes({
                    href,
                    style: 'text',
                    rel: this.getAttribute('rel'),
                    target: this.getAttribute('target'),
                })}>`
                : `<span
                    ${this.htmlAttributes({
                        style: 'text',
                    })}>`
            }
                ${this.getContent()}
            ${hasLink ? `</a>` : '</span>'}
            </td>
            `
            : ''
        }
        </tr>
    `
    }
}