# MJML Pardot

![mjml pardot logo](img/mjml-pardot-logo.png)

Pardot compatible MJML components.
This is a fork of [mjml-mailchimp](https://github.com/homerjam/mjml-mailchimp) which has very similar funtionality, but for mailchimp.

## Getting started

Install the package for a specific project or globally to use it like the [mjml-cli](https://github.com/mjmlio/mjml/tree/master/packages/mjml-cli).

### Globally (recommended)

Globally with mjml-cli interface:

```bash
npm i -g mjml-pardot
```

### Project

For project:

```bash
npm i mjml-pardot
```

When installing for a specific project you can either add the components to your own pipeline in a `build.js` file, or make an npm script

npm script example

```js
// package.json
{
    "scripts": {
        "build": "mjml-pardot path/to/file.mjml -o path/to/putput.html"
    }
}
```

### Example of mjml

```xml
<mjml>
    <mj-body background-color="#f1f1f1">
        <mp-section pardot-removable="true">
            <mp-column pardot-repeatable-children="true">
                <mj-text>
                    Fixed text
                </mj-text>
                <mp-text pardot-region="true">
                    Editable text
                </mp-text>
            </mp-column>
        </mp-section>
    </mj-body>
</mjml>
```

## Usage

### Setup

#### CLI

Using the cli is as easy as the mjml-cli and uses the same interface. You should check out it's [docs](https://github.com/mjmlio/mjml/tree/master/packages/mjml-cli).

the base command is `mjml-pardot` instead of `mjml`

examples

```bash
mjml-pardot
mjml-pardot --help
mjml-pardot path/to/file.mjml
mjml-pardot path/to/file.mjml -o
```

#### Project

For `package.json` use see Getting started.

-----------

If you decide to use a pipeline instead, you would have to register the components and their dependencies.

Example:

```js
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
} = require('mjml-pardot')

registerComponent(MpSection)
registerComponent(MpImage)
registerComponent(MpText)
registerComponent(MpButton)
registerComponent(MpColumn)
registerComponent(MpSocialElement)

// register your own components
// example of a custom carousel
const MyCustomCarousel = require('./my-custom-carousel.js')
registerComponent(MyCustomCarousel)
// Tell mjml that MyCustomCarousel can be used inside MpColumn
// only if you decide to use MpColumn
registerDependencies({
    'mp-column': ['my-custom-carousel'],
})

// do your other pipeline stuff (like reading file etc.)

console.log(mjml2html(someFileContent))
```

This is just an example and will get you started if you need to make these components work with your own components.

## Components

All components are replacements of the original mjml components. They all have the same prefix `mp-` instead of `mj-`.

Also make sure to chack out the [pardot docs](https://help.salesforce.com/articleView?id=pardot_content_regions.htm&type=5).

### mp-button

Extends [mj-button](https://github.com/mjmlio/mjml/tree/master/packages/mjml-button) see its docs for more info.

| Attribute         | Unit    | Description                                                 | Default value |
|-------------------|---------|-------------------------------------------------------------|---------------|
| pardot-region     | boolean | if true, adds pardot-region to inner text tag               | false         |
| pardot-removable  | boolean | if true, adds pardot-removable to outer table tag on button | false         |
| pardot-repeatable | boolean | if true, adds pardot-repeatable to out table tag on button  | false         |

-------

### mp-column

Extends [mj-column](https://github.com/mjmlio/mjml/tree/master/packages/mjml-column) see its docs for more info.

NOTE: repeatable and removable columns are not recommended since mjml sets the width of each column at compilation. If they are removed or repeated, the layout of the section might get messy very quickly.

| Attribute                  | Unit    | Description                                                                                                                                                                          | Default value |
|----------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| pardot-repeatable-children | boolean | if true, adds pardot-repeatable to all &lt;tr&gt; children of the column. This also allows the user to rearrange the column, which can be very useful.                                     | false         |
| pardot-removable           | boolean | if true, adds pardot-removable to out div tag on button (NOT recommended). Since mjml sets the width of columns on compile time it will keep its width when removed or repeated.tton | false         |
| pardot-repeatable          | boolean | if true, adds pardot-repeatable to out div tag on button (NOT recommended). Since mjml sets the width of columns on compile time it will keep its width when removed or repeated.    | false         |

-------

### mp-image

Extends [mj-image](https://github.com/mjmlio/mjml/tree/master/packages/mjml-image) see its docs for more info.

| Attribute        | Unit    | Description                                           | Default value |
|------------------|---------|-------------------------------------------------------|---------------|
| pardot-region    | boolean | If true, adds pardot-region to &lt;img&gt; tag        | false         |
| pardot-removable | boolean | if true, adds pardot-removable to outer &lt;table&gt; | false         |
| pardot-responsive-image | percentage | if true, adds percentage wiidth to img tag | undefined      |

-------

### mp-section

Extends [mj-section](https://github.com/mjmlio/mjml/tree/master/packages/mjml-section) see its docs for more info.

| attribute | unit | description | default value |
|---|---|---|---|
|pardot-removable|boolean|if true, adds a pardot-removable tag to the outer div| false|
|pardot-repeatable|boolean|if true, adds a pardot-repeatable tag to the outer div| false|
|pardot-region|boolean|if true, adds a pardot-region tag to the outer div| false|

-------

### mp-social-element

Extends [mj-social-element](https://github.com/mjmlio/mjml/tree/master/packages/mjml-social) see its docs for more info.

This component is made to be able to modify text and icon on `mj-social-element` and making them repeatable.

NOTE: repeatable might only work correctly in for `mj-social` tags with attribute `mode="vertical"`.

| Attribute         | Unit    | Description                                              | Default value |
|-------------------|---------|----------------------------------------------------------|---------------|
| pardot-region     | boolean | If true, adds pardot-region to image and text.     | false         |
| pardot-removable  | boolean | If true, adds pardot-removable to outer &lt;tr&gt; tag.  | false         |
| pardot-repeatable | boolean | If true, adds pardot-repeatable to outer &lt;tr&gt; tag. | false         |

-------

### mp-text

Extends [mj-social-element](https://github.com/mjmlio/mjml/tree/master/packages/mjml-social) see its docs for more info.

| Attribute        | Unit    | Description                                                | Default value |
|------------------|---------|------------------------------------------------------------|---------------|
| pardot-region    | boolean | If true, adds pardot-region to content &lt;div&gt; tag.    | false         |
| pardot-removable | boolean | If true, adds pardot-removable to content &lt;div&gt; tag. | false         |

## Contributing

see [contributing.md](./contributing.md)

## Development

Make sure to install all dependencies

```bash
npm i
```

### Building

Build all components.

```bash
npm run build
```

Built components should stay ignored and only be published via npm.