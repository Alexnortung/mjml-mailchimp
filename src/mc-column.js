import MjColumn from 'mjml-column'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
    'mc-section': ['mc-column'],
    'mj-section': ['mc-column'],
    'mj-group': ['mc-column'],
    'mc-column': [
        'mc-text',
        'mc-image',
        'mj-accordion',
        'mj-button',
        'mj-carousel',
        'mj-divider',
        'mj-image',
        'mj-social',
        'mj-spacer',
        'mj-table',
        'mj-text',
    ],
})

export default class McColumn extends MjColumn {
    static allowedAttributes = {
        ...MjColumn.allowedAttributes,
        'pardot-repeatable': 'boolean',
        'pardot-removable': 'boolean',
        'pardot-repeatable-children': 'boolean',
    }

    renderColumn() {
    const { children } = this.props

    // console.log({
    //             'pardot-repeatable': this.getAttribute('pardot-repeatable-children'),
    //         })

    return `
        <table
        ${this.htmlAttributes({
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'table',
            width: '100%',
        })}
        >
        ${this.renderChildren(children, {
            renderer: (
            component, // eslint-disable-line no-confusing-arrow
            ) =>
            component.constructor.isRawElement()
                ? component.render()
                : `
            <tr
            ${component.htmlAttributes({
                'pardot-repeatable': this.getAttribute('pardot-repeatable-children') ? "" : undefined,
            })}
            >
                <td
                ${component.htmlAttributes({
                    align: component.getAttribute('align'),
                    'vertical-align': component.getAttribute('vertical-align'),
                    class: component.getAttribute('css-class'),
                    style: {
                    background: component.getAttribute(
                        'container-background-color',
                    ),
                    'font-size': '0px',
                    padding: component.getAttribute('padding'),
                    'padding-top': component.getAttribute('padding-top'),
                    'padding-right': component.getAttribute('padding-right'),
                    'padding-bottom': component.getAttribute('padding-bottom'),
                    'padding-left': component.getAttribute('padding-left'),
                    'word-break': 'break-word',
                    },
                })}
                >
                ${component.render()}
                </td>
            </tr>
            `,
        })}
        </table>
    `
  }
}