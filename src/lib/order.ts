const order = [
    "all",
    "content",
    {
        groupName: "container",
        properties: [
            "container",
            "container-name",
            "container-type"
        ]
    },
    "display",
    {
        groupName: "flex",
        properties: [
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-warp"
        ]
    },
    {
        groupName: "grid",
        properties: [
            "grid",
            "grid-area",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-column",
            "grid-column-end",
            "grid-column-gap",
            "grid-column-start",
            "grid-gap",
            "grid-row",
            "grid-row-end",
            "grid-row-gap",
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows"
        ]
    },
    {
        groupName: "layout",
        properties: [
            "place-content",
            "place-items",
            "place-self",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "justify-items",
            "justify-self",
            "gap",
            "row-gap",
            "columns",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-width",
            "column-rule-style",
            "column-rule-color",
            "column-span",
            "column-width",
            "order",
            "float",
            "clear"
        ]
    },
    {
        groupName: "position",
        properties: [
            "position",
            "visibility",
            "overflow",
            "overflow-anchor",
            "overflow-block",
            "overflow-clip-margin",
            "overflow-inline",
            "overflow-wrap",
            "overflow-x",
            "overflow-y",
            "opacity",
            "inset",
            "top",
            "right",
            "bottom",
            "left"
        ]
    },
    {
        groupName: "size",
        properties: [
            "width",
            "height",
            "block-size",
            "inline-size",
            "min-width",
            "min-height",
            "min-block-size",
            "min-inline-size",
            "max-width",
            "max-height",
            "max-block-size",
            "max-inline-size",
            "aspect-ratio"
        ]
    },
    {
        groupName: "margin",
        properties: [
            "margin",
            "margin-block",
            "margin-inline",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin-trim"
        ]
    },
    {
        groupName: "padding",
        properties: [
            "padding",
            "padding-block",
            "padding-inline",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left"
        ]
    },
    {
        groupName: "border",
        properties: [
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-collapse",
            "border-spacing",
            "border-block",
            "border-block-width",
            "border-block-style",
            "border-block-color",
            "border-inline",
            "border-inline-width",
            "border-inline-style",
            "border-inline-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius"
        ]
    },
    {
        groupName: "box",
        properties: [
            "box-decoration-break",
            "box-shadow",
            "box-sizing"
        ]
    },
    {
        groupName: "outline",
        properties: [
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset"
        ]
    },
    {
        groupName: "background",
        properties: [
            "background",
            "background-attachment",
            "background-blend-mode",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-repeat",
            "background-size",
            "backdrop-filter",
            "backface-visibility",
            "clip-path"
        ]
    },
    {
        groupName: "mask",
        properties: [
            "mask",
            "mask-border",
            "mask-border-mode",
            "mask-border-outset",
            "mask-border-repeat",
            "mask-border-slice",
            "mask-border-source",
            "mask-border-width",
            "mask-clip",
            "mask-composite",
            "mask-image",
            "mask-mode",
            "mask-origin",
            "mask-position",
            "mask-repeat",
            "mask-size",
            "mask-type"
        ]
    },
    {
        groupName: "text",
        properties: [
            "font",
            "font-family",
            "font-feature-settings",
            "font-kerning",
            "font-language-override",
            "font-optical-sizing",
            "font-palette",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-synthesis",
            "font-variant",
            "font-weight",
            "initial-letter",
            "letter-spacing",
            "line-height",
            "vertical-align",
            "white-space",
            "white-space-collapse",
            "word-break",
            "word-spacing",
            "word-wrap",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-style",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-indent",
            "text-justify",
            "text-orientation",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-outline",
            "text-rendering",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "direction"
        ]
    },
    {
        groupName: "color",
        properties: [
            "color",
            "color-interpolation",
            "color-scheme"
        ]
    },
    {
        groupName: "animation",
        properties: [
            "perspective",
            "perspective-origin",
            "transform",
            "transform-box",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-property",
            "transition-duration",
            "transition-timing-function",
            "transition-delay",
            "animation",
            "animation-composition",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-range",
            "animation-range-start",
            "animation-range-end",
            "animation-timeline",
            "animation-timing-function",
            "view-timeline",
            "view-timeline-axis",
            "view-timeline-inset",
            "view-timeline-name",
            "view-transition-name",
            "will-change",
            "rotate",
            "scale",
            "translate"
        ]
    },
    {
        groupName: "counter",
        properties: [
            "counter-increment",
            "counter-reset",
            "counter-set"
        ]
    },
    {
        groupName: "image",
        properties: [
            "image-orientation",
            "image-rendering",
            "image-resolution"
        ]
    },
    {
        groupName: "list",
        properties: [
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type"
        ]
    },
    {
        groupName: "overscroll",
        properties: [
            "overscroll-behavior",
            "overscroll-behavior-block",
            "overscroll-behavior-inline",
            "overscroll-behavior-x",
            "overscroll-behavior-y"
        ]
    },
    {
        groupName: "scroll",
        properties: [
            "scroll-behavior",
            "scroll-padding",
            "scroll-padding-block",
            "scroll-padding-inline",
            "scroll-padding-top",
            "scroll-padding-right",
            "scroll-padding-bottom",
            "scroll-padding-left",
            "scroll-margin",
            "scroll-margin-block",
            "scroll-margin-inline",
            "scroll-margin-top",
            "scroll-margin-right",
            "scroll-margin-bottom",
            "scroll-margin-left",
            "scroll-snap-align",
            "scroll-snap-stop",
            "scroll-snap-type",
            "scroll-timeline",
            "scroll-timeline-axis",
            "scroll-timeline-name"
        ]
    },
    {
        groupName: "scrollbar",
        properties: [
            "scrollbar-color",
            "scrollbar-gutter",
            "scrollbar-width"
        ]
    },
    {
        groupName: "shape",
        properties: [
            "shape-image-threshold",
            "shape-margin",
            "shape-outside"
        ]
    },
    "accent-color",
    "appearance",
    "caption-side",
    "caret-color",
    "cursor",
    "empty-cells",
    "field-sizing",
    "filter",
    "forced-color-adjust",
    "hanging-punctuation",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "isolation",
    "mix-blend-mode",
    "object-fit",
    "object-position",
    "orphans",
    "paint-order",
    "pointer-events",
    "print-color-adjust",
    "quotes",
    "resize",
    "ruby-align",
    "ruby-position",
    "tab-size",
    "table-layout",
    "touch-action",
    "unicode-bidi",
    "user-select",
    "writing-mode",
    "z-index",
    "zoom"
];

export default {
    "order/order": [
        "custom-properties",
        "declarations"
    ],
    "order/properties-order": order
};