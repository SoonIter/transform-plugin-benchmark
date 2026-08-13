import styled, { css, createGlobalStyle, keyframes } from "styled-components";
const BaseComponent = (props)=>props.as ?? null;
const sharedSurface = /*#__PURE__*/ css([
    `border:1px solid rgba(0,0,0,0.12);border-radius:8px;`
]);
const enter = /*#__PURE__*/ keyframes([
    `from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);}`
]);
export const GlobalStyle = /*#__PURE__*/ createGlobalStyle([
    `html,body{margin:0;padding:0;}*,*::before,*::after{box-sizing:border-box;}`
]);
export const Card000 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 0
}).withConfig({
    displayName: "styled-components-fixture__Card000",
    componentId: "sc-cae717f3-0"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card001 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card001",
    componentId: "sc-cae717f3-1"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card002 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card002",
    componentId: "sc-cae717f3-2"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card003 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card003",
    componentId: "sc-cae717f3-3"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card004 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 4
}).withConfig({
    displayName: "styled-components-fixture__Card004",
    componentId: "sc-cae717f3-4"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card005 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card005",
    componentId: "sc-cae717f3-5"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card006 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card006",
    componentId: "sc-cae717f3-6"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card007 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card007",
    componentId: "sc-cae717f3-7"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card008 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 8
}).withConfig({
    displayName: "styled-components-fixture__Card008",
    componentId: "sc-cae717f3-8"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card009 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card009",
    componentId: "sc-cae717f3-9"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card010 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card010",
    componentId: "sc-cae717f3-10"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card011 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card011",
    componentId: "sc-cae717f3-11"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card012 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 12
}).withConfig({
    displayName: "styled-components-fixture__Card012",
    componentId: "sc-cae717f3-12"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card013 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card013",
    componentId: "sc-cae717f3-13"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card014 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card014",
    componentId: "sc-cae717f3-14"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card015 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card015",
    componentId: "sc-cae717f3-15"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card016 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 16
}).withConfig({
    displayName: "styled-components-fixture__Card016",
    componentId: "sc-cae717f3-16"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card017 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card017",
    componentId: "sc-cae717f3-17"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card018 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card018",
    componentId: "sc-cae717f3-18"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card019 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card019",
    componentId: "sc-cae717f3-19"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card020 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 20
}).withConfig({
    displayName: "styled-components-fixture__Card020",
    componentId: "sc-cae717f3-20"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card021 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card021",
    componentId: "sc-cae717f3-21"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card022 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card022",
    componentId: "sc-cae717f3-22"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card023 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card023",
    componentId: "sc-cae717f3-23"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card024 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 24
}).withConfig({
    displayName: "styled-components-fixture__Card024",
    componentId: "sc-cae717f3-24"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card025 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card025",
    componentId: "sc-cae717f3-25"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card026 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card026",
    componentId: "sc-cae717f3-26"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card027 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card027",
    componentId: "sc-cae717f3-27"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card028 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 28
}).withConfig({
    displayName: "styled-components-fixture__Card028",
    componentId: "sc-cae717f3-28"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card029 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card029",
    componentId: "sc-cae717f3-29"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card030 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card030",
    componentId: "sc-cae717f3-30"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card031 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card031",
    componentId: "sc-cae717f3-31"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card032 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 32
}).withConfig({
    displayName: "styled-components-fixture__Card032",
    componentId: "sc-cae717f3-32"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card033 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card033",
    componentId: "sc-cae717f3-33"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card034 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card034",
    componentId: "sc-cae717f3-34"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card035 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card035",
    componentId: "sc-cae717f3-35"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card036 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 36
}).withConfig({
    displayName: "styled-components-fixture__Card036",
    componentId: "sc-cae717f3-36"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card037 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card037",
    componentId: "sc-cae717f3-37"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card038 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card038",
    componentId: "sc-cae717f3-38"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card039 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card039",
    componentId: "sc-cae717f3-39"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card040 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 40
}).withConfig({
    displayName: "styled-components-fixture__Card040",
    componentId: "sc-cae717f3-40"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card041 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card041",
    componentId: "sc-cae717f3-41"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card042 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card042",
    componentId: "sc-cae717f3-42"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card043 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card043",
    componentId: "sc-cae717f3-43"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card044 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 44
}).withConfig({
    displayName: "styled-components-fixture__Card044",
    componentId: "sc-cae717f3-44"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card045 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card045",
    componentId: "sc-cae717f3-45"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card046 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card046",
    componentId: "sc-cae717f3-46"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card047 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card047",
    componentId: "sc-cae717f3-47"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card048 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 48
}).withConfig({
    displayName: "styled-components-fixture__Card048",
    componentId: "sc-cae717f3-48"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card049 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card049",
    componentId: "sc-cae717f3-49"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card050 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card050",
    componentId: "sc-cae717f3-50"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card051 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card051",
    componentId: "sc-cae717f3-51"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card052 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 52
}).withConfig({
    displayName: "styled-components-fixture__Card052",
    componentId: "sc-cae717f3-52"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card053 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card053",
    componentId: "sc-cae717f3-53"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card054 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card054",
    componentId: "sc-cae717f3-54"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card055 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card055",
    componentId: "sc-cae717f3-55"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card056 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 56
}).withConfig({
    displayName: "styled-components-fixture__Card056",
    componentId: "sc-cae717f3-56"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card057 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card057",
    componentId: "sc-cae717f3-57"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card058 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card058",
    componentId: "sc-cae717f3-58"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card059 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card059",
    componentId: "sc-cae717f3-59"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card060 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 60
}).withConfig({
    displayName: "styled-components-fixture__Card060",
    componentId: "sc-cae717f3-60"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card061 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card061",
    componentId: "sc-cae717f3-61"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card062 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card062",
    componentId: "sc-cae717f3-62"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card063 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card063",
    componentId: "sc-cae717f3-63"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card064 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 64
}).withConfig({
    displayName: "styled-components-fixture__Card064",
    componentId: "sc-cae717f3-64"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card065 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card065",
    componentId: "sc-cae717f3-65"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card066 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card066",
    componentId: "sc-cae717f3-66"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card067 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card067",
    componentId: "sc-cae717f3-67"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card068 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 68
}).withConfig({
    displayName: "styled-components-fixture__Card068",
    componentId: "sc-cae717f3-68"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card069 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card069",
    componentId: "sc-cae717f3-69"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card070 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card070",
    componentId: "sc-cae717f3-70"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card071 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card071",
    componentId: "sc-cae717f3-71"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card072 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 72
}).withConfig({
    displayName: "styled-components-fixture__Card072",
    componentId: "sc-cae717f3-72"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card073 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card073",
    componentId: "sc-cae717f3-73"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card074 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card074",
    componentId: "sc-cae717f3-74"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card075 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card075",
    componentId: "sc-cae717f3-75"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card076 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 76
}).withConfig({
    displayName: "styled-components-fixture__Card076",
    componentId: "sc-cae717f3-76"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card077 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card077",
    componentId: "sc-cae717f3-77"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card078 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card078",
    componentId: "sc-cae717f3-78"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card079 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card079",
    componentId: "sc-cae717f3-79"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card080 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 80
}).withConfig({
    displayName: "styled-components-fixture__Card080",
    componentId: "sc-cae717f3-80"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card081 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card081",
    componentId: "sc-cae717f3-81"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card082 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card082",
    componentId: "sc-cae717f3-82"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card083 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card083",
    componentId: "sc-cae717f3-83"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card084 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 84
}).withConfig({
    displayName: "styled-components-fixture__Card084",
    componentId: "sc-cae717f3-84"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card085 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card085",
    componentId: "sc-cae717f3-85"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card086 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card086",
    componentId: "sc-cae717f3-86"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card087 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card087",
    componentId: "sc-cae717f3-87"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card088 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 88
}).withConfig({
    displayName: "styled-components-fixture__Card088",
    componentId: "sc-cae717f3-88"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card089 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card089",
    componentId: "sc-cae717f3-89"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card090 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card090",
    componentId: "sc-cae717f3-90"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card091 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card091",
    componentId: "sc-cae717f3-91"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card092 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 92
}).withConfig({
    displayName: "styled-components-fixture__Card092",
    componentId: "sc-cae717f3-92"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card093 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card093",
    componentId: "sc-cae717f3-93"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card094 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card094",
    componentId: "sc-cae717f3-94"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card095 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card095",
    componentId: "sc-cae717f3-95"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card096 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 96
}).withConfig({
    displayName: "styled-components-fixture__Card096",
    componentId: "sc-cae717f3-96"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card097 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card097",
    componentId: "sc-cae717f3-97"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card098 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card098",
    componentId: "sc-cae717f3-98"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card099 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card099",
    componentId: "sc-cae717f3-99"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card100 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 100
}).withConfig({
    displayName: "styled-components-fixture__Card100",
    componentId: "sc-cae717f3-100"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card101 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card101",
    componentId: "sc-cae717f3-101"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card102 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card102",
    componentId: "sc-cae717f3-102"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card103 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card103",
    componentId: "sc-cae717f3-103"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card104 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 104
}).withConfig({
    displayName: "styled-components-fixture__Card104",
    componentId: "sc-cae717f3-104"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card105 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card105",
    componentId: "sc-cae717f3-105"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card106 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card106",
    componentId: "sc-cae717f3-106"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card107 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card107",
    componentId: "sc-cae717f3-107"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card108 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 108
}).withConfig({
    displayName: "styled-components-fixture__Card108",
    componentId: "sc-cae717f3-108"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card109 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card109",
    componentId: "sc-cae717f3-109"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card110 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card110",
    componentId: "sc-cae717f3-110"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card111 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card111",
    componentId: "sc-cae717f3-111"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card112 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 112
}).withConfig({
    displayName: "styled-components-fixture__Card112",
    componentId: "sc-cae717f3-112"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card113 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card113",
    componentId: "sc-cae717f3-113"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card114 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card114",
    componentId: "sc-cae717f3-114"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card115 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card115",
    componentId: "sc-cae717f3-115"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card116 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 116
}).withConfig({
    displayName: "styled-components-fixture__Card116",
    componentId: "sc-cae717f3-116"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card117 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card117",
    componentId: "sc-cae717f3-117"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card118 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card118",
    componentId: "sc-cae717f3-118"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card119 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card119",
    componentId: "sc-cae717f3-119"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card120 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 120
}).withConfig({
    displayName: "styled-components-fixture__Card120",
    componentId: "sc-cae717f3-120"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card121 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card121",
    componentId: "sc-cae717f3-121"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card122 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card122",
    componentId: "sc-cae717f3-122"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card123 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card123",
    componentId: "sc-cae717f3-123"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card124 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 124
}).withConfig({
    displayName: "styled-components-fixture__Card124",
    componentId: "sc-cae717f3-124"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card125 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card125",
    componentId: "sc-cae717f3-125"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card126 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card126",
    componentId: "sc-cae717f3-126"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card127 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card127",
    componentId: "sc-cae717f3-127"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card128 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 128
}).withConfig({
    displayName: "styled-components-fixture__Card128",
    componentId: "sc-cae717f3-128"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card129 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card129",
    componentId: "sc-cae717f3-129"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card130 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card130",
    componentId: "sc-cae717f3-130"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card131 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card131",
    componentId: "sc-cae717f3-131"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card132 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 132
}).withConfig({
    displayName: "styled-components-fixture__Card132",
    componentId: "sc-cae717f3-132"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card133 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card133",
    componentId: "sc-cae717f3-133"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card134 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card134",
    componentId: "sc-cae717f3-134"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card135 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card135",
    componentId: "sc-cae717f3-135"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card136 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 136
}).withConfig({
    displayName: "styled-components-fixture__Card136",
    componentId: "sc-cae717f3-136"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card137 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card137",
    componentId: "sc-cae717f3-137"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card138 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card138",
    componentId: "sc-cae717f3-138"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card139 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card139",
    componentId: "sc-cae717f3-139"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card140 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 140
}).withConfig({
    displayName: "styled-components-fixture__Card140",
    componentId: "sc-cae717f3-140"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card141 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card141",
    componentId: "sc-cae717f3-141"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card142 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card142",
    componentId: "sc-cae717f3-142"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card143 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card143",
    componentId: "sc-cae717f3-143"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card144 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 144
}).withConfig({
    displayName: "styled-components-fixture__Card144",
    componentId: "sc-cae717f3-144"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card145 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card145",
    componentId: "sc-cae717f3-145"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card146 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card146",
    componentId: "sc-cae717f3-146"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card147 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card147",
    componentId: "sc-cae717f3-147"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card148 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 148
}).withConfig({
    displayName: "styled-components-fixture__Card148",
    componentId: "sc-cae717f3-148"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card149 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card149",
    componentId: "sc-cae717f3-149"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card150 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card150",
    componentId: "sc-cae717f3-150"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card151 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card151",
    componentId: "sc-cae717f3-151"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card152 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 152
}).withConfig({
    displayName: "styled-components-fixture__Card152",
    componentId: "sc-cae717f3-152"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card153 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card153",
    componentId: "sc-cae717f3-153"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card154 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card154",
    componentId: "sc-cae717f3-154"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card155 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card155",
    componentId: "sc-cae717f3-155"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card156 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 156
}).withConfig({
    displayName: "styled-components-fixture__Card156",
    componentId: "sc-cae717f3-156"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card157 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card157",
    componentId: "sc-cae717f3-157"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card158 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card158",
    componentId: "sc-cae717f3-158"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card159 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card159",
    componentId: "sc-cae717f3-159"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card160 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 160
}).withConfig({
    displayName: "styled-components-fixture__Card160",
    componentId: "sc-cae717f3-160"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card161 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card161",
    componentId: "sc-cae717f3-161"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card162 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card162",
    componentId: "sc-cae717f3-162"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card163 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card163",
    componentId: "sc-cae717f3-163"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card164 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 164
}).withConfig({
    displayName: "styled-components-fixture__Card164",
    componentId: "sc-cae717f3-164"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card165 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card165",
    componentId: "sc-cae717f3-165"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card166 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card166",
    componentId: "sc-cae717f3-166"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card167 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card167",
    componentId: "sc-cae717f3-167"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card168 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 168
}).withConfig({
    displayName: "styled-components-fixture__Card168",
    componentId: "sc-cae717f3-168"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card169 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card169",
    componentId: "sc-cae717f3-169"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card170 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card170",
    componentId: "sc-cae717f3-170"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card171 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card171",
    componentId: "sc-cae717f3-171"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card172 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 172
}).withConfig({
    displayName: "styled-components-fixture__Card172",
    componentId: "sc-cae717f3-172"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card173 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card173",
    componentId: "sc-cae717f3-173"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card174 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card174",
    componentId: "sc-cae717f3-174"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card175 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card175",
    componentId: "sc-cae717f3-175"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card176 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 176
}).withConfig({
    displayName: "styled-components-fixture__Card176",
    componentId: "sc-cae717f3-176"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card177 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card177",
    componentId: "sc-cae717f3-177"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card178 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card178",
    componentId: "sc-cae717f3-178"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card179 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card179",
    componentId: "sc-cae717f3-179"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card180 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 180
}).withConfig({
    displayName: "styled-components-fixture__Card180",
    componentId: "sc-cae717f3-180"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card181 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card181",
    componentId: "sc-cae717f3-181"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card182 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card182",
    componentId: "sc-cae717f3-182"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card183 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card183",
    componentId: "sc-cae717f3-183"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card184 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 184
}).withConfig({
    displayName: "styled-components-fixture__Card184",
    componentId: "sc-cae717f3-184"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card185 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card185",
    componentId: "sc-cae717f3-185"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card186 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card186",
    componentId: "sc-cae717f3-186"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card187 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card187",
    componentId: "sc-cae717f3-187"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card188 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 188
}).withConfig({
    displayName: "styled-components-fixture__Card188",
    componentId: "sc-cae717f3-188"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card189 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card189",
    componentId: "sc-cae717f3-189"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card190 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card190",
    componentId: "sc-cae717f3-190"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card191 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card191",
    componentId: "sc-cae717f3-191"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card192 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 192
}).withConfig({
    displayName: "styled-components-fixture__Card192",
    componentId: "sc-cae717f3-192"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card193 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card193",
    componentId: "sc-cae717f3-193"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card194 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card194",
    componentId: "sc-cae717f3-194"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card195 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card195",
    componentId: "sc-cae717f3-195"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card196 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 196
}).withConfig({
    displayName: "styled-components-fixture__Card196",
    componentId: "sc-cae717f3-196"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card197 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card197",
    componentId: "sc-cae717f3-197"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card198 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card198",
    componentId: "sc-cae717f3-198"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card199 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card199",
    componentId: "sc-cae717f3-199"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card200 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 200
}).withConfig({
    displayName: "styled-components-fixture__Card200",
    componentId: "sc-cae717f3-200"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card201 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card201",
    componentId: "sc-cae717f3-201"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card202 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card202",
    componentId: "sc-cae717f3-202"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card203 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card203",
    componentId: "sc-cae717f3-203"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card204 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 204
}).withConfig({
    displayName: "styled-components-fixture__Card204",
    componentId: "sc-cae717f3-204"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card205 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card205",
    componentId: "sc-cae717f3-205"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card206 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card206",
    componentId: "sc-cae717f3-206"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card207 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card207",
    componentId: "sc-cae717f3-207"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card208 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 208
}).withConfig({
    displayName: "styled-components-fixture__Card208",
    componentId: "sc-cae717f3-208"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card209 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card209",
    componentId: "sc-cae717f3-209"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card210 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card210",
    componentId: "sc-cae717f3-210"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card211 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card211",
    componentId: "sc-cae717f3-211"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card212 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 212
}).withConfig({
    displayName: "styled-components-fixture__Card212",
    componentId: "sc-cae717f3-212"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card213 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card213",
    componentId: "sc-cae717f3-213"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card214 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card214",
    componentId: "sc-cae717f3-214"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card215 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card215",
    componentId: "sc-cae717f3-215"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card216 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 216
}).withConfig({
    displayName: "styled-components-fixture__Card216",
    componentId: "sc-cae717f3-216"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card217 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card217",
    componentId: "sc-cae717f3-217"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card218 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card218",
    componentId: "sc-cae717f3-218"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card219 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card219",
    componentId: "sc-cae717f3-219"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card220 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 220
}).withConfig({
    displayName: "styled-components-fixture__Card220",
    componentId: "sc-cae717f3-220"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card221 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card221",
    componentId: "sc-cae717f3-221"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card222 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card222",
    componentId: "sc-cae717f3-222"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card223 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card223",
    componentId: "sc-cae717f3-223"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card224 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 224
}).withConfig({
    displayName: "styled-components-fixture__Card224",
    componentId: "sc-cae717f3-224"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card225 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card225",
    componentId: "sc-cae717f3-225"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card226 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card226",
    componentId: "sc-cae717f3-226"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card227 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card227",
    componentId: "sc-cae717f3-227"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card228 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 228
}).withConfig({
    displayName: "styled-components-fixture__Card228",
    componentId: "sc-cae717f3-228"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card229 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card229",
    componentId: "sc-cae717f3-229"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card230 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card230",
    componentId: "sc-cae717f3-230"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card231 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card231",
    componentId: "sc-cae717f3-231"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card232 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 232
}).withConfig({
    displayName: "styled-components-fixture__Card232",
    componentId: "sc-cae717f3-232"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card233 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card233",
    componentId: "sc-cae717f3-233"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card234 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card234",
    componentId: "sc-cae717f3-234"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card235 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card235",
    componentId: "sc-cae717f3-235"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card236 = /*#__PURE__*/ styled.article.attrs({
    role: "article",
    "data-index": 236
}).withConfig({
    displayName: "styled-components-fixture__Card236",
    componentId: "sc-cae717f3-236"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card237 = /*#__PURE__*/ styled(BaseComponent).attrs((props)=>({
        tabIndex: props.tabIndex ?? 0
    })).withConfig({
    displayName: "styled-components-fixture__Card237",
    componentId: "sc-cae717f3-237"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card238 = /*#__PURE__*/ styled.section.withConfig({
    displayName: "styled-components-fixture__Card238",
    componentId: "sc-cae717f3-238"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const Card239 = /*#__PURE__*/ styled("aside").withConfig({
    displayName: "styled-components-fixture__Card239",
    componentId: "sc-cae717f3-239"
})([
    ``,
    ` display:grid;grid-template-columns:minmax(0,1fr) auto;gap:`,
    `px;color:`,
    `;background:linear-gradient(135deg,#fff,#f4f7fb);animation:`,
    ` 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}`,
    ``
], sharedSurface, (props)=>props.gap ?? 8, (props)=>props.active ? "#005fcc" : "#172033", enter, (props)=>props.compact && /*#__PURE__*/ css([
        `padding:2px 4px;> span{white-space:nowrap;}`
    ]));
export const CardUsage000 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard, {
        "data-card-index": 0,
        $_css: props.active ? "#005fcc" : "#172033",
        $_css2: props.selector,
        $_css3: props.opacity,
        $_css4: props.surface
    });
export const CardUsage004 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard2, {
        "data-card-index": 4,
        $_css5: props.active ? "#005fcc" : "#172033",
        $_css6: props.selector,
        $_css7: props.opacity,
        $_css8: props.surface
    });
export const CardUsage008 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard3, {
        "data-card-index": 8,
        $_css9: props.active ? "#005fcc" : "#172033",
        $_css10: props.selector,
        $_css11: props.opacity,
        $_css12: props.surface
    });
export const CardUsage012 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard4, {
        "data-card-index": 12,
        $_css13: props.active ? "#005fcc" : "#172033",
        $_css14: props.selector,
        $_css15: props.opacity,
        $_css16: props.surface
    });
export const CardUsage016 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard5, {
        "data-card-index": 16,
        $_css17: props.active ? "#005fcc" : "#172033",
        $_css18: props.selector,
        $_css19: props.opacity,
        $_css20: props.surface
    });
export const CardUsage020 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard6, {
        "data-card-index": 20,
        $_css21: props.active ? "#005fcc" : "#172033",
        $_css22: props.selector,
        $_css23: props.opacity,
        $_css24: props.surface
    });
export const CardUsage024 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard7, {
        "data-card-index": 24,
        $_css25: props.active ? "#005fcc" : "#172033",
        $_css26: props.selector,
        $_css27: props.opacity,
        $_css28: props.surface
    });
export const CardUsage028 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard8, {
        "data-card-index": 28,
        $_css29: props.active ? "#005fcc" : "#172033",
        $_css30: props.selector,
        $_css31: props.opacity,
        $_css32: props.surface
    });
export const CardUsage032 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard9, {
        "data-card-index": 32,
        $_css33: props.active ? "#005fcc" : "#172033",
        $_css34: props.selector,
        $_css35: props.opacity,
        $_css36: props.surface
    });
export const CardUsage036 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard10, {
        "data-card-index": 36,
        $_css37: props.active ? "#005fcc" : "#172033",
        $_css38: props.selector,
        $_css39: props.opacity,
        $_css40: props.surface
    });
export const CardUsage040 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard11, {
        "data-card-index": 40,
        $_css41: props.active ? "#005fcc" : "#172033",
        $_css42: props.selector,
        $_css43: props.opacity,
        $_css44: props.surface
    });
export const CardUsage044 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard12, {
        "data-card-index": 44,
        $_css45: props.active ? "#005fcc" : "#172033",
        $_css46: props.selector,
        $_css47: props.opacity,
        $_css48: props.surface
    });
export const CardUsage048 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard13, {
        "data-card-index": 48,
        $_css49: props.active ? "#005fcc" : "#172033",
        $_css50: props.selector,
        $_css51: props.opacity,
        $_css52: props.surface
    });
export const CardUsage052 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard14, {
        "data-card-index": 52,
        $_css53: props.active ? "#005fcc" : "#172033",
        $_css54: props.selector,
        $_css55: props.opacity,
        $_css56: props.surface
    });
export const CardUsage056 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard15, {
        "data-card-index": 56,
        $_css57: props.active ? "#005fcc" : "#172033",
        $_css58: props.selector,
        $_css59: props.opacity,
        $_css60: props.surface
    });
export const CardUsage060 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard16, {
        "data-card-index": 60,
        $_css61: props.active ? "#005fcc" : "#172033",
        $_css62: props.selector,
        $_css63: props.opacity,
        $_css64: props.surface
    });
export const CardUsage064 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard17, {
        "data-card-index": 64,
        $_css65: props.active ? "#005fcc" : "#172033",
        $_css66: props.selector,
        $_css67: props.opacity,
        $_css68: props.surface
    });
export const CardUsage068 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard18, {
        "data-card-index": 68,
        $_css69: props.active ? "#005fcc" : "#172033",
        $_css70: props.selector,
        $_css71: props.opacity,
        $_css72: props.surface
    });
export const CardUsage072 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard19, {
        "data-card-index": 72,
        $_css73: props.active ? "#005fcc" : "#172033",
        $_css74: props.selector,
        $_css75: props.opacity,
        $_css76: props.surface
    });
export const CardUsage076 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard20, {
        "data-card-index": 76,
        $_css77: props.active ? "#005fcc" : "#172033",
        $_css78: props.selector,
        $_css79: props.opacity,
        $_css80: props.surface
    });
export const CardUsage080 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard21, {
        "data-card-index": 80,
        $_css81: props.active ? "#005fcc" : "#172033",
        $_css82: props.selector,
        $_css83: props.opacity,
        $_css84: props.surface
    });
export const CardUsage084 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard22, {
        "data-card-index": 84,
        $_css85: props.active ? "#005fcc" : "#172033",
        $_css86: props.selector,
        $_css87: props.opacity,
        $_css88: props.surface
    });
export const CardUsage088 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard23, {
        "data-card-index": 88,
        $_css89: props.active ? "#005fcc" : "#172033",
        $_css90: props.selector,
        $_css91: props.opacity,
        $_css92: props.surface
    });
export const CardUsage092 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard24, {
        "data-card-index": 92,
        $_css93: props.active ? "#005fcc" : "#172033",
        $_css94: props.selector,
        $_css95: props.opacity,
        $_css96: props.surface
    });
export const CardUsage096 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard25, {
        "data-card-index": 96,
        $_css97: props.active ? "#005fcc" : "#172033",
        $_css98: props.selector,
        $_css99: props.opacity,
        $_css100: props.surface
    });
export const CardUsage100 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard26, {
        "data-card-index": 100,
        $_css101: props.active ? "#005fcc" : "#172033",
        $_css102: props.selector,
        $_css103: props.opacity,
        $_css104: props.surface
    });
export const CardUsage104 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard27, {
        "data-card-index": 104,
        $_css105: props.active ? "#005fcc" : "#172033",
        $_css106: props.selector,
        $_css107: props.opacity,
        $_css108: props.surface
    });
export const CardUsage108 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard28, {
        "data-card-index": 108,
        $_css109: props.active ? "#005fcc" : "#172033",
        $_css110: props.selector,
        $_css111: props.opacity,
        $_css112: props.surface
    });
export const CardUsage112 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard29, {
        "data-card-index": 112,
        $_css113: props.active ? "#005fcc" : "#172033",
        $_css114: props.selector,
        $_css115: props.opacity,
        $_css116: props.surface
    });
export const CardUsage116 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard30, {
        "data-card-index": 116,
        $_css117: props.active ? "#005fcc" : "#172033",
        $_css118: props.selector,
        $_css119: props.opacity,
        $_css120: props.surface
    });
export const CardUsage120 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard31, {
        "data-card-index": 120,
        $_css121: props.active ? "#005fcc" : "#172033",
        $_css122: props.selector,
        $_css123: props.opacity,
        $_css124: props.surface
    });
export const CardUsage124 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard32, {
        "data-card-index": 124,
        $_css125: props.active ? "#005fcc" : "#172033",
        $_css126: props.selector,
        $_css127: props.opacity,
        $_css128: props.surface
    });
export const CardUsage128 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard33, {
        "data-card-index": 128,
        $_css129: props.active ? "#005fcc" : "#172033",
        $_css130: props.selector,
        $_css131: props.opacity,
        $_css132: props.surface
    });
export const CardUsage132 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard34, {
        "data-card-index": 132,
        $_css133: props.active ? "#005fcc" : "#172033",
        $_css134: props.selector,
        $_css135: props.opacity,
        $_css136: props.surface
    });
export const CardUsage136 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard35, {
        "data-card-index": 136,
        $_css137: props.active ? "#005fcc" : "#172033",
        $_css138: props.selector,
        $_css139: props.opacity,
        $_css140: props.surface
    });
export const CardUsage140 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard36, {
        "data-card-index": 140,
        $_css141: props.active ? "#005fcc" : "#172033",
        $_css142: props.selector,
        $_css143: props.opacity,
        $_css144: props.surface
    });
export const CardUsage144 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard37, {
        "data-card-index": 144,
        $_css145: props.active ? "#005fcc" : "#172033",
        $_css146: props.selector,
        $_css147: props.opacity,
        $_css148: props.surface
    });
export const CardUsage148 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard38, {
        "data-card-index": 148,
        $_css149: props.active ? "#005fcc" : "#172033",
        $_css150: props.selector,
        $_css151: props.opacity,
        $_css152: props.surface
    });
export const CardUsage152 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard39, {
        "data-card-index": 152,
        $_css153: props.active ? "#005fcc" : "#172033",
        $_css154: props.selector,
        $_css155: props.opacity,
        $_css156: props.surface
    });
export const CardUsage156 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard40, {
        "data-card-index": 156,
        $_css157: props.active ? "#005fcc" : "#172033",
        $_css158: props.selector,
        $_css159: props.opacity,
        $_css160: props.surface
    });
export const CardUsage160 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard41, {
        "data-card-index": 160,
        $_css161: props.active ? "#005fcc" : "#172033",
        $_css162: props.selector,
        $_css163: props.opacity,
        $_css164: props.surface
    });
export const CardUsage164 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard42, {
        "data-card-index": 164,
        $_css165: props.active ? "#005fcc" : "#172033",
        $_css166: props.selector,
        $_css167: props.opacity,
        $_css168: props.surface
    });
export const CardUsage168 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard43, {
        "data-card-index": 168,
        $_css169: props.active ? "#005fcc" : "#172033",
        $_css170: props.selector,
        $_css171: props.opacity,
        $_css172: props.surface
    });
export const CardUsage172 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard44, {
        "data-card-index": 172,
        $_css173: props.active ? "#005fcc" : "#172033",
        $_css174: props.selector,
        $_css175: props.opacity,
        $_css176: props.surface
    });
export const CardUsage176 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard45, {
        "data-card-index": 176,
        $_css177: props.active ? "#005fcc" : "#172033",
        $_css178: props.selector,
        $_css179: props.opacity,
        $_css180: props.surface
    });
export const CardUsage180 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard46, {
        "data-card-index": 180,
        $_css181: props.active ? "#005fcc" : "#172033",
        $_css182: props.selector,
        $_css183: props.opacity,
        $_css184: props.surface
    });
export const CardUsage184 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard47, {
        "data-card-index": 184,
        $_css185: props.active ? "#005fcc" : "#172033",
        $_css186: props.selector,
        $_css187: props.opacity,
        $_css188: props.surface
    });
export const CardUsage188 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard48, {
        "data-card-index": 188,
        $_css189: props.active ? "#005fcc" : "#172033",
        $_css190: props.selector,
        $_css191: props.opacity,
        $_css192: props.surface
    });
export const CardUsage192 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard49, {
        "data-card-index": 192,
        $_css193: props.active ? "#005fcc" : "#172033",
        $_css194: props.selector,
        $_css195: props.opacity,
        $_css196: props.surface
    });
export const CardUsage196 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard50, {
        "data-card-index": 196,
        $_css197: props.active ? "#005fcc" : "#172033",
        $_css198: props.selector,
        $_css199: props.opacity,
        $_css200: props.surface
    });
export const CardUsage200 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard51, {
        "data-card-index": 200,
        $_css201: props.active ? "#005fcc" : "#172033",
        $_css202: props.selector,
        $_css203: props.opacity,
        $_css204: props.surface
    });
export const CardUsage204 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard52, {
        "data-card-index": 204,
        $_css205: props.active ? "#005fcc" : "#172033",
        $_css206: props.selector,
        $_css207: props.opacity,
        $_css208: props.surface
    });
export const CardUsage208 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard53, {
        "data-card-index": 208,
        $_css209: props.active ? "#005fcc" : "#172033",
        $_css210: props.selector,
        $_css211: props.opacity,
        $_css212: props.surface
    });
export const CardUsage212 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard54, {
        "data-card-index": 212,
        $_css213: props.active ? "#005fcc" : "#172033",
        $_css214: props.selector,
        $_css215: props.opacity,
        $_css216: props.surface
    });
export const CardUsage216 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard55, {
        "data-card-index": 216,
        $_css217: props.active ? "#005fcc" : "#172033",
        $_css218: props.selector,
        $_css219: props.opacity,
        $_css220: props.surface
    });
export const CardUsage220 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard56, {
        "data-card-index": 220,
        $_css221: props.active ? "#005fcc" : "#172033",
        $_css222: props.selector,
        $_css223: props.opacity,
        $_css224: props.surface
    });
export const CardUsage224 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard57, {
        "data-card-index": 224,
        $_css225: props.active ? "#005fcc" : "#172033",
        $_css226: props.selector,
        $_css227: props.opacity,
        $_css228: props.surface
    });
export const CardUsage228 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard58, {
        "data-card-index": 228,
        $_css229: props.active ? "#005fcc" : "#172033",
        $_css230: props.selector,
        $_css231: props.opacity,
        $_css232: props.surface
    });
export const CardUsage232 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard59, {
        "data-card-index": 232,
        $_css233: props.active ? "#005fcc" : "#172033",
        $_css234: props.selector,
        $_css235: props.opacity,
        $_css236: props.surface
    });
export const CardUsage236 = (props)=>/*#__PURE__*/ React.createElement(_StyledCard60, {
        "data-card-index": 236,
        $_css237: props.active ? "#005fcc" : "#172033",
        $_css238: props.selector,
        $_css239: props.opacity,
        $_css240: props.surface
    });
var _StyledCard = /*#__PURE__*/ styled(Card000).withConfig({
    displayName: "styled-components-fixture___StyledCard",
    componentId: "sc-cae717f3-240"
})((p)=>({
        color: p.$_css,
        [p.$_css2]: {
            opacity: p.$_css3
        },
        ...p.$_css4
    }));
var _StyledCard2 = /*#__PURE__*/ styled(Card004).withConfig({
    displayName: "styled-components-fixture___StyledCard2",
    componentId: "sc-cae717f3-241"
})((p)=>({
        color: p.$_css5,
        [p.$_css6]: {
            opacity: p.$_css7
        },
        ...p.$_css8
    }));
var _StyledCard3 = /*#__PURE__*/ styled(Card008).withConfig({
    displayName: "styled-components-fixture___StyledCard3",
    componentId: "sc-cae717f3-242"
})((p)=>({
        color: p.$_css9,
        [p.$_css10]: {
            opacity: p.$_css11
        },
        ...p.$_css12
    }));
var _StyledCard4 = /*#__PURE__*/ styled(Card012).withConfig({
    displayName: "styled-components-fixture___StyledCard4",
    componentId: "sc-cae717f3-243"
})((p)=>({
        color: p.$_css13,
        [p.$_css14]: {
            opacity: p.$_css15
        },
        ...p.$_css16
    }));
var _StyledCard5 = /*#__PURE__*/ styled(Card016).withConfig({
    displayName: "styled-components-fixture___StyledCard5",
    componentId: "sc-cae717f3-244"
})((p)=>({
        color: p.$_css17,
        [p.$_css18]: {
            opacity: p.$_css19
        },
        ...p.$_css20
    }));
var _StyledCard6 = /*#__PURE__*/ styled(Card020).withConfig({
    displayName: "styled-components-fixture___StyledCard6",
    componentId: "sc-cae717f3-245"
})((p)=>({
        color: p.$_css21,
        [p.$_css22]: {
            opacity: p.$_css23
        },
        ...p.$_css24
    }));
var _StyledCard7 = /*#__PURE__*/ styled(Card024).withConfig({
    displayName: "styled-components-fixture___StyledCard7",
    componentId: "sc-cae717f3-246"
})((p)=>({
        color: p.$_css25,
        [p.$_css26]: {
            opacity: p.$_css27
        },
        ...p.$_css28
    }));
var _StyledCard8 = /*#__PURE__*/ styled(Card028).withConfig({
    displayName: "styled-components-fixture___StyledCard8",
    componentId: "sc-cae717f3-247"
})((p)=>({
        color: p.$_css29,
        [p.$_css30]: {
            opacity: p.$_css31
        },
        ...p.$_css32
    }));
var _StyledCard9 = /*#__PURE__*/ styled(Card032).withConfig({
    displayName: "styled-components-fixture___StyledCard9",
    componentId: "sc-cae717f3-248"
})((p)=>({
        color: p.$_css33,
        [p.$_css34]: {
            opacity: p.$_css35
        },
        ...p.$_css36
    }));
var _StyledCard10 = /*#__PURE__*/ styled(Card036).withConfig({
    displayName: "styled-components-fixture___StyledCard10",
    componentId: "sc-cae717f3-249"
})((p)=>({
        color: p.$_css37,
        [p.$_css38]: {
            opacity: p.$_css39
        },
        ...p.$_css40
    }));
var _StyledCard11 = /*#__PURE__*/ styled(Card040).withConfig({
    displayName: "styled-components-fixture___StyledCard11",
    componentId: "sc-cae717f3-250"
})((p)=>({
        color: p.$_css41,
        [p.$_css42]: {
            opacity: p.$_css43
        },
        ...p.$_css44
    }));
var _StyledCard12 = /*#__PURE__*/ styled(Card044).withConfig({
    displayName: "styled-components-fixture___StyledCard12",
    componentId: "sc-cae717f3-251"
})((p)=>({
        color: p.$_css45,
        [p.$_css46]: {
            opacity: p.$_css47
        },
        ...p.$_css48
    }));
var _StyledCard13 = /*#__PURE__*/ styled(Card048).withConfig({
    displayName: "styled-components-fixture___StyledCard13",
    componentId: "sc-cae717f3-252"
})((p)=>({
        color: p.$_css49,
        [p.$_css50]: {
            opacity: p.$_css51
        },
        ...p.$_css52
    }));
var _StyledCard14 = /*#__PURE__*/ styled(Card052).withConfig({
    displayName: "styled-components-fixture___StyledCard14",
    componentId: "sc-cae717f3-253"
})((p)=>({
        color: p.$_css53,
        [p.$_css54]: {
            opacity: p.$_css55
        },
        ...p.$_css56
    }));
var _StyledCard15 = /*#__PURE__*/ styled(Card056).withConfig({
    displayName: "styled-components-fixture___StyledCard15",
    componentId: "sc-cae717f3-254"
})((p)=>({
        color: p.$_css57,
        [p.$_css58]: {
            opacity: p.$_css59
        },
        ...p.$_css60
    }));
var _StyledCard16 = /*#__PURE__*/ styled(Card060).withConfig({
    displayName: "styled-components-fixture___StyledCard16",
    componentId: "sc-cae717f3-255"
})((p)=>({
        color: p.$_css61,
        [p.$_css62]: {
            opacity: p.$_css63
        },
        ...p.$_css64
    }));
var _StyledCard17 = /*#__PURE__*/ styled(Card064).withConfig({
    displayName: "styled-components-fixture___StyledCard17",
    componentId: "sc-cae717f3-256"
})((p)=>({
        color: p.$_css65,
        [p.$_css66]: {
            opacity: p.$_css67
        },
        ...p.$_css68
    }));
var _StyledCard18 = /*#__PURE__*/ styled(Card068).withConfig({
    displayName: "styled-components-fixture___StyledCard18",
    componentId: "sc-cae717f3-257"
})((p)=>({
        color: p.$_css69,
        [p.$_css70]: {
            opacity: p.$_css71
        },
        ...p.$_css72
    }));
var _StyledCard19 = /*#__PURE__*/ styled(Card072).withConfig({
    displayName: "styled-components-fixture___StyledCard19",
    componentId: "sc-cae717f3-258"
})((p)=>({
        color: p.$_css73,
        [p.$_css74]: {
            opacity: p.$_css75
        },
        ...p.$_css76
    }));
var _StyledCard20 = /*#__PURE__*/ styled(Card076).withConfig({
    displayName: "styled-components-fixture___StyledCard20",
    componentId: "sc-cae717f3-259"
})((p)=>({
        color: p.$_css77,
        [p.$_css78]: {
            opacity: p.$_css79
        },
        ...p.$_css80
    }));
var _StyledCard21 = /*#__PURE__*/ styled(Card080).withConfig({
    displayName: "styled-components-fixture___StyledCard21",
    componentId: "sc-cae717f3-260"
})((p)=>({
        color: p.$_css81,
        [p.$_css82]: {
            opacity: p.$_css83
        },
        ...p.$_css84
    }));
var _StyledCard22 = /*#__PURE__*/ styled(Card084).withConfig({
    displayName: "styled-components-fixture___StyledCard22",
    componentId: "sc-cae717f3-261"
})((p)=>({
        color: p.$_css85,
        [p.$_css86]: {
            opacity: p.$_css87
        },
        ...p.$_css88
    }));
var _StyledCard23 = /*#__PURE__*/ styled(Card088).withConfig({
    displayName: "styled-components-fixture___StyledCard23",
    componentId: "sc-cae717f3-262"
})((p)=>({
        color: p.$_css89,
        [p.$_css90]: {
            opacity: p.$_css91
        },
        ...p.$_css92
    }));
var _StyledCard24 = /*#__PURE__*/ styled(Card092).withConfig({
    displayName: "styled-components-fixture___StyledCard24",
    componentId: "sc-cae717f3-263"
})((p)=>({
        color: p.$_css93,
        [p.$_css94]: {
            opacity: p.$_css95
        },
        ...p.$_css96
    }));
var _StyledCard25 = /*#__PURE__*/ styled(Card096).withConfig({
    displayName: "styled-components-fixture___StyledCard25",
    componentId: "sc-cae717f3-264"
})((p)=>({
        color: p.$_css97,
        [p.$_css98]: {
            opacity: p.$_css99
        },
        ...p.$_css100
    }));
var _StyledCard26 = /*#__PURE__*/ styled(Card100).withConfig({
    displayName: "styled-components-fixture___StyledCard26",
    componentId: "sc-cae717f3-265"
})((p)=>({
        color: p.$_css101,
        [p.$_css102]: {
            opacity: p.$_css103
        },
        ...p.$_css104
    }));
var _StyledCard27 = /*#__PURE__*/ styled(Card104).withConfig({
    displayName: "styled-components-fixture___StyledCard27",
    componentId: "sc-cae717f3-266"
})((p)=>({
        color: p.$_css105,
        [p.$_css106]: {
            opacity: p.$_css107
        },
        ...p.$_css108
    }));
var _StyledCard28 = /*#__PURE__*/ styled(Card108).withConfig({
    displayName: "styled-components-fixture___StyledCard28",
    componentId: "sc-cae717f3-267"
})((p)=>({
        color: p.$_css109,
        [p.$_css110]: {
            opacity: p.$_css111
        },
        ...p.$_css112
    }));
var _StyledCard29 = /*#__PURE__*/ styled(Card112).withConfig({
    displayName: "styled-components-fixture___StyledCard29",
    componentId: "sc-cae717f3-268"
})((p)=>({
        color: p.$_css113,
        [p.$_css114]: {
            opacity: p.$_css115
        },
        ...p.$_css116
    }));
var _StyledCard30 = /*#__PURE__*/ styled(Card116).withConfig({
    displayName: "styled-components-fixture___StyledCard30",
    componentId: "sc-cae717f3-269"
})((p)=>({
        color: p.$_css117,
        [p.$_css118]: {
            opacity: p.$_css119
        },
        ...p.$_css120
    }));
var _StyledCard31 = /*#__PURE__*/ styled(Card120).withConfig({
    displayName: "styled-components-fixture___StyledCard31",
    componentId: "sc-cae717f3-270"
})((p)=>({
        color: p.$_css121,
        [p.$_css122]: {
            opacity: p.$_css123
        },
        ...p.$_css124
    }));
var _StyledCard32 = /*#__PURE__*/ styled(Card124).withConfig({
    displayName: "styled-components-fixture___StyledCard32",
    componentId: "sc-cae717f3-271"
})((p)=>({
        color: p.$_css125,
        [p.$_css126]: {
            opacity: p.$_css127
        },
        ...p.$_css128
    }));
var _StyledCard33 = /*#__PURE__*/ styled(Card128).withConfig({
    displayName: "styled-components-fixture___StyledCard33",
    componentId: "sc-cae717f3-272"
})((p)=>({
        color: p.$_css129,
        [p.$_css130]: {
            opacity: p.$_css131
        },
        ...p.$_css132
    }));
var _StyledCard34 = /*#__PURE__*/ styled(Card132).withConfig({
    displayName: "styled-components-fixture___StyledCard34",
    componentId: "sc-cae717f3-273"
})((p)=>({
        color: p.$_css133,
        [p.$_css134]: {
            opacity: p.$_css135
        },
        ...p.$_css136
    }));
var _StyledCard35 = /*#__PURE__*/ styled(Card136).withConfig({
    displayName: "styled-components-fixture___StyledCard35",
    componentId: "sc-cae717f3-274"
})((p)=>({
        color: p.$_css137,
        [p.$_css138]: {
            opacity: p.$_css139
        },
        ...p.$_css140
    }));
var _StyledCard36 = /*#__PURE__*/ styled(Card140).withConfig({
    displayName: "styled-components-fixture___StyledCard36",
    componentId: "sc-cae717f3-275"
})((p)=>({
        color: p.$_css141,
        [p.$_css142]: {
            opacity: p.$_css143
        },
        ...p.$_css144
    }));
var _StyledCard37 = /*#__PURE__*/ styled(Card144).withConfig({
    displayName: "styled-components-fixture___StyledCard37",
    componentId: "sc-cae717f3-276"
})((p)=>({
        color: p.$_css145,
        [p.$_css146]: {
            opacity: p.$_css147
        },
        ...p.$_css148
    }));
var _StyledCard38 = /*#__PURE__*/ styled(Card148).withConfig({
    displayName: "styled-components-fixture___StyledCard38",
    componentId: "sc-cae717f3-277"
})((p)=>({
        color: p.$_css149,
        [p.$_css150]: {
            opacity: p.$_css151
        },
        ...p.$_css152
    }));
var _StyledCard39 = /*#__PURE__*/ styled(Card152).withConfig({
    displayName: "styled-components-fixture___StyledCard39",
    componentId: "sc-cae717f3-278"
})((p)=>({
        color: p.$_css153,
        [p.$_css154]: {
            opacity: p.$_css155
        },
        ...p.$_css156
    }));
var _StyledCard40 = /*#__PURE__*/ styled(Card156).withConfig({
    displayName: "styled-components-fixture___StyledCard40",
    componentId: "sc-cae717f3-279"
})((p)=>({
        color: p.$_css157,
        [p.$_css158]: {
            opacity: p.$_css159
        },
        ...p.$_css160
    }));
var _StyledCard41 = /*#__PURE__*/ styled(Card160).withConfig({
    displayName: "styled-components-fixture___StyledCard41",
    componentId: "sc-cae717f3-280"
})((p)=>({
        color: p.$_css161,
        [p.$_css162]: {
            opacity: p.$_css163
        },
        ...p.$_css164
    }));
var _StyledCard42 = /*#__PURE__*/ styled(Card164).withConfig({
    displayName: "styled-components-fixture___StyledCard42",
    componentId: "sc-cae717f3-281"
})((p)=>({
        color: p.$_css165,
        [p.$_css166]: {
            opacity: p.$_css167
        },
        ...p.$_css168
    }));
var _StyledCard43 = /*#__PURE__*/ styled(Card168).withConfig({
    displayName: "styled-components-fixture___StyledCard43",
    componentId: "sc-cae717f3-282"
})((p)=>({
        color: p.$_css169,
        [p.$_css170]: {
            opacity: p.$_css171
        },
        ...p.$_css172
    }));
var _StyledCard44 = /*#__PURE__*/ styled(Card172).withConfig({
    displayName: "styled-components-fixture___StyledCard44",
    componentId: "sc-cae717f3-283"
})((p)=>({
        color: p.$_css173,
        [p.$_css174]: {
            opacity: p.$_css175
        },
        ...p.$_css176
    }));
var _StyledCard45 = /*#__PURE__*/ styled(Card176).withConfig({
    displayName: "styled-components-fixture___StyledCard45",
    componentId: "sc-cae717f3-284"
})((p)=>({
        color: p.$_css177,
        [p.$_css178]: {
            opacity: p.$_css179
        },
        ...p.$_css180
    }));
var _StyledCard46 = /*#__PURE__*/ styled(Card180).withConfig({
    displayName: "styled-components-fixture___StyledCard46",
    componentId: "sc-cae717f3-285"
})((p)=>({
        color: p.$_css181,
        [p.$_css182]: {
            opacity: p.$_css183
        },
        ...p.$_css184
    }));
var _StyledCard47 = /*#__PURE__*/ styled(Card184).withConfig({
    displayName: "styled-components-fixture___StyledCard47",
    componentId: "sc-cae717f3-286"
})((p)=>({
        color: p.$_css185,
        [p.$_css186]: {
            opacity: p.$_css187
        },
        ...p.$_css188
    }));
var _StyledCard48 = /*#__PURE__*/ styled(Card188).withConfig({
    displayName: "styled-components-fixture___StyledCard48",
    componentId: "sc-cae717f3-287"
})((p)=>({
        color: p.$_css189,
        [p.$_css190]: {
            opacity: p.$_css191
        },
        ...p.$_css192
    }));
var _StyledCard49 = /*#__PURE__*/ styled(Card192).withConfig({
    displayName: "styled-components-fixture___StyledCard49",
    componentId: "sc-cae717f3-288"
})((p)=>({
        color: p.$_css193,
        [p.$_css194]: {
            opacity: p.$_css195
        },
        ...p.$_css196
    }));
var _StyledCard50 = /*#__PURE__*/ styled(Card196).withConfig({
    displayName: "styled-components-fixture___StyledCard50",
    componentId: "sc-cae717f3-289"
})((p)=>({
        color: p.$_css197,
        [p.$_css198]: {
            opacity: p.$_css199
        },
        ...p.$_css200
    }));
var _StyledCard51 = /*#__PURE__*/ styled(Card200).withConfig({
    displayName: "styled-components-fixture___StyledCard51",
    componentId: "sc-cae717f3-290"
})((p)=>({
        color: p.$_css201,
        [p.$_css202]: {
            opacity: p.$_css203
        },
        ...p.$_css204
    }));
var _StyledCard52 = /*#__PURE__*/ styled(Card204).withConfig({
    displayName: "styled-components-fixture___StyledCard52",
    componentId: "sc-cae717f3-291"
})((p)=>({
        color: p.$_css205,
        [p.$_css206]: {
            opacity: p.$_css207
        },
        ...p.$_css208
    }));
var _StyledCard53 = /*#__PURE__*/ styled(Card208).withConfig({
    displayName: "styled-components-fixture___StyledCard53",
    componentId: "sc-cae717f3-292"
})((p)=>({
        color: p.$_css209,
        [p.$_css210]: {
            opacity: p.$_css211
        },
        ...p.$_css212
    }));
var _StyledCard54 = /*#__PURE__*/ styled(Card212).withConfig({
    displayName: "styled-components-fixture___StyledCard54",
    componentId: "sc-cae717f3-293"
})((p)=>({
        color: p.$_css213,
        [p.$_css214]: {
            opacity: p.$_css215
        },
        ...p.$_css216
    }));
var _StyledCard55 = /*#__PURE__*/ styled(Card216).withConfig({
    displayName: "styled-components-fixture___StyledCard55",
    componentId: "sc-cae717f3-294"
})((p)=>({
        color: p.$_css217,
        [p.$_css218]: {
            opacity: p.$_css219
        },
        ...p.$_css220
    }));
var _StyledCard56 = /*#__PURE__*/ styled(Card220).withConfig({
    displayName: "styled-components-fixture___StyledCard56",
    componentId: "sc-cae717f3-295"
})((p)=>({
        color: p.$_css221,
        [p.$_css222]: {
            opacity: p.$_css223
        },
        ...p.$_css224
    }));
var _StyledCard57 = /*#__PURE__*/ styled(Card224).withConfig({
    displayName: "styled-components-fixture___StyledCard57",
    componentId: "sc-cae717f3-296"
})((p)=>({
        color: p.$_css225,
        [p.$_css226]: {
            opacity: p.$_css227
        },
        ...p.$_css228
    }));
var _StyledCard58 = /*#__PURE__*/ styled(Card228).withConfig({
    displayName: "styled-components-fixture___StyledCard58",
    componentId: "sc-cae717f3-297"
})((p)=>({
        color: p.$_css229,
        [p.$_css230]: {
            opacity: p.$_css231
        },
        ...p.$_css232
    }));
var _StyledCard59 = /*#__PURE__*/ styled(Card232).withConfig({
    displayName: "styled-components-fixture___StyledCard59",
    componentId: "sc-cae717f3-298"
})((p)=>({
        color: p.$_css233,
        [p.$_css234]: {
            opacity: p.$_css235
        },
        ...p.$_css236
    }));
var _StyledCard60 = /*#__PURE__*/ styled(Card236).withConfig({
    displayName: "styled-components-fixture___StyledCard60",
    componentId: "sc-cae717f3-299"
})((p)=>({
        color: p.$_css237,
        [p.$_css238]: {
            opacity: p.$_css239
        },
        ...p.$_css240
    }));
