import styled, { css, createGlobalStyle, keyframes } from "styled-components";
const BaseComponent = props => props.as ?? null;
const sharedSurface = /*#__PURE__*/css(["border:1px solid rgba(0,0,0,0.12);border-radius:8px;"]);
const enter = /*#__PURE__*/keyframes(["from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);}"]);
export const GlobalStyle = /*#__PURE__*/createGlobalStyle(["html,body{margin:0;padding:0;}*,*::before,*::after{box-sizing:border-box;}"]);
export const Card000 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 0
}).withConfig({
  displayName: "styled-components-fixture__Card000",
  componentId: "sc-1ch1z4k-0"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard = /*#__PURE__*/styled(Card000).withConfig({
  displayName: "styled-components-fixture___StyledCard",
  componentId: "sc-1ch1z4k-240"
})(p => ({
  color: p.$_css,
  [p.$_css2]: {
    opacity: p.$_css3
  },
  ...p.$_css4
}));
export const Card001 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card001",
  componentId: "sc-1ch1z4k-1"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card002 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card002",
  componentId: "sc-1ch1z4k-2"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card003 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card003",
  componentId: "sc-1ch1z4k-3"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card004 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 4
}).withConfig({
  displayName: "styled-components-fixture__Card004",
  componentId: "sc-1ch1z4k-4"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard2 = /*#__PURE__*/styled(Card004).withConfig({
  displayName: "styled-components-fixture___StyledCard2",
  componentId: "sc-1ch1z4k-241"
})(p => ({
  color: p.$_css5,
  [p.$_css6]: {
    opacity: p.$_css7
  },
  ...p.$_css8
}));
export const Card005 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card005",
  componentId: "sc-1ch1z4k-5"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card006 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card006",
  componentId: "sc-1ch1z4k-6"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card007 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card007",
  componentId: "sc-1ch1z4k-7"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card008 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 8
}).withConfig({
  displayName: "styled-components-fixture__Card008",
  componentId: "sc-1ch1z4k-8"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard3 = /*#__PURE__*/styled(Card008).withConfig({
  displayName: "styled-components-fixture___StyledCard3",
  componentId: "sc-1ch1z4k-242"
})(p => ({
  color: p.$_css9,
  [p.$_css0]: {
    opacity: p.$_css1
  },
  ...p.$_css10
}));
export const Card009 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card009",
  componentId: "sc-1ch1z4k-9"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card010 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card010",
  componentId: "sc-1ch1z4k-10"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card011 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card011",
  componentId: "sc-1ch1z4k-11"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card012 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 12
}).withConfig({
  displayName: "styled-components-fixture__Card012",
  componentId: "sc-1ch1z4k-12"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard4 = /*#__PURE__*/styled(Card012).withConfig({
  displayName: "styled-components-fixture___StyledCard4",
  componentId: "sc-1ch1z4k-243"
})(p => ({
  color: p.$_css11,
  [p.$_css12]: {
    opacity: p.$_css13
  },
  ...p.$_css14
}));
export const Card013 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card013",
  componentId: "sc-1ch1z4k-13"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card014 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card014",
  componentId: "sc-1ch1z4k-14"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card015 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card015",
  componentId: "sc-1ch1z4k-15"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card016 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 16
}).withConfig({
  displayName: "styled-components-fixture__Card016",
  componentId: "sc-1ch1z4k-16"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard5 = /*#__PURE__*/styled(Card016).withConfig({
  displayName: "styled-components-fixture___StyledCard5",
  componentId: "sc-1ch1z4k-244"
})(p => ({
  color: p.$_css15,
  [p.$_css16]: {
    opacity: p.$_css17
  },
  ...p.$_css18
}));
export const Card017 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card017",
  componentId: "sc-1ch1z4k-17"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card018 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card018",
  componentId: "sc-1ch1z4k-18"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card019 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card019",
  componentId: "sc-1ch1z4k-19"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card020 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 20
}).withConfig({
  displayName: "styled-components-fixture__Card020",
  componentId: "sc-1ch1z4k-20"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard6 = /*#__PURE__*/styled(Card020).withConfig({
  displayName: "styled-components-fixture___StyledCard6",
  componentId: "sc-1ch1z4k-245"
})(p => ({
  color: p.$_css19,
  [p.$_css20]: {
    opacity: p.$_css21
  },
  ...p.$_css22
}));
export const Card021 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card021",
  componentId: "sc-1ch1z4k-21"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card022 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card022",
  componentId: "sc-1ch1z4k-22"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card023 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card023",
  componentId: "sc-1ch1z4k-23"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card024 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 24
}).withConfig({
  displayName: "styled-components-fixture__Card024",
  componentId: "sc-1ch1z4k-24"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard7 = /*#__PURE__*/styled(Card024).withConfig({
  displayName: "styled-components-fixture___StyledCard7",
  componentId: "sc-1ch1z4k-246"
})(p => ({
  color: p.$_css23,
  [p.$_css24]: {
    opacity: p.$_css25
  },
  ...p.$_css26
}));
export const Card025 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card025",
  componentId: "sc-1ch1z4k-25"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card026 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card026",
  componentId: "sc-1ch1z4k-26"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card027 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card027",
  componentId: "sc-1ch1z4k-27"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card028 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 28
}).withConfig({
  displayName: "styled-components-fixture__Card028",
  componentId: "sc-1ch1z4k-28"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard8 = /*#__PURE__*/styled(Card028).withConfig({
  displayName: "styled-components-fixture___StyledCard8",
  componentId: "sc-1ch1z4k-247"
})(p => ({
  color: p.$_css27,
  [p.$_css28]: {
    opacity: p.$_css29
  },
  ...p.$_css30
}));
export const Card029 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card029",
  componentId: "sc-1ch1z4k-29"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card030 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card030",
  componentId: "sc-1ch1z4k-30"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card031 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card031",
  componentId: "sc-1ch1z4k-31"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card032 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 32
}).withConfig({
  displayName: "styled-components-fixture__Card032",
  componentId: "sc-1ch1z4k-32"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard9 = /*#__PURE__*/styled(Card032).withConfig({
  displayName: "styled-components-fixture___StyledCard9",
  componentId: "sc-1ch1z4k-248"
})(p => ({
  color: p.$_css31,
  [p.$_css32]: {
    opacity: p.$_css33
  },
  ...p.$_css34
}));
export const Card033 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card033",
  componentId: "sc-1ch1z4k-33"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card034 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card034",
  componentId: "sc-1ch1z4k-34"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card035 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card035",
  componentId: "sc-1ch1z4k-35"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card036 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 36
}).withConfig({
  displayName: "styled-components-fixture__Card036",
  componentId: "sc-1ch1z4k-36"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard0 = /*#__PURE__*/styled(Card036).withConfig({
  displayName: "styled-components-fixture___StyledCard0",
  componentId: "sc-1ch1z4k-249"
})(p => ({
  color: p.$_css35,
  [p.$_css36]: {
    opacity: p.$_css37
  },
  ...p.$_css38
}));
export const Card037 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card037",
  componentId: "sc-1ch1z4k-37"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card038 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card038",
  componentId: "sc-1ch1z4k-38"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card039 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card039",
  componentId: "sc-1ch1z4k-39"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card040 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 40
}).withConfig({
  displayName: "styled-components-fixture__Card040",
  componentId: "sc-1ch1z4k-40"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard1 = /*#__PURE__*/styled(Card040).withConfig({
  displayName: "styled-components-fixture___StyledCard1",
  componentId: "sc-1ch1z4k-250"
})(p => ({
  color: p.$_css39,
  [p.$_css40]: {
    opacity: p.$_css41
  },
  ...p.$_css42
}));
export const Card041 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card041",
  componentId: "sc-1ch1z4k-41"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card042 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card042",
  componentId: "sc-1ch1z4k-42"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card043 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card043",
  componentId: "sc-1ch1z4k-43"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card044 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 44
}).withConfig({
  displayName: "styled-components-fixture__Card044",
  componentId: "sc-1ch1z4k-44"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard10 = /*#__PURE__*/styled(Card044).withConfig({
  displayName: "styled-components-fixture___StyledCard10",
  componentId: "sc-1ch1z4k-251"
})(p => ({
  color: p.$_css43,
  [p.$_css44]: {
    opacity: p.$_css45
  },
  ...p.$_css46
}));
export const Card045 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card045",
  componentId: "sc-1ch1z4k-45"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card046 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card046",
  componentId: "sc-1ch1z4k-46"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card047 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card047",
  componentId: "sc-1ch1z4k-47"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card048 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 48
}).withConfig({
  displayName: "styled-components-fixture__Card048",
  componentId: "sc-1ch1z4k-48"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard11 = /*#__PURE__*/styled(Card048).withConfig({
  displayName: "styled-components-fixture___StyledCard11",
  componentId: "sc-1ch1z4k-252"
})(p => ({
  color: p.$_css47,
  [p.$_css48]: {
    opacity: p.$_css49
  },
  ...p.$_css50
}));
export const Card049 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card049",
  componentId: "sc-1ch1z4k-49"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card050 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card050",
  componentId: "sc-1ch1z4k-50"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card051 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card051",
  componentId: "sc-1ch1z4k-51"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card052 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 52
}).withConfig({
  displayName: "styled-components-fixture__Card052",
  componentId: "sc-1ch1z4k-52"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard12 = /*#__PURE__*/styled(Card052).withConfig({
  displayName: "styled-components-fixture___StyledCard12",
  componentId: "sc-1ch1z4k-253"
})(p => ({
  color: p.$_css51,
  [p.$_css52]: {
    opacity: p.$_css53
  },
  ...p.$_css54
}));
export const Card053 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card053",
  componentId: "sc-1ch1z4k-53"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card054 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card054",
  componentId: "sc-1ch1z4k-54"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card055 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card055",
  componentId: "sc-1ch1z4k-55"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card056 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 56
}).withConfig({
  displayName: "styled-components-fixture__Card056",
  componentId: "sc-1ch1z4k-56"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard13 = /*#__PURE__*/styled(Card056).withConfig({
  displayName: "styled-components-fixture___StyledCard13",
  componentId: "sc-1ch1z4k-254"
})(p => ({
  color: p.$_css55,
  [p.$_css56]: {
    opacity: p.$_css57
  },
  ...p.$_css58
}));
export const Card057 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card057",
  componentId: "sc-1ch1z4k-57"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card058 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card058",
  componentId: "sc-1ch1z4k-58"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card059 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card059",
  componentId: "sc-1ch1z4k-59"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card060 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 60
}).withConfig({
  displayName: "styled-components-fixture__Card060",
  componentId: "sc-1ch1z4k-60"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard14 = /*#__PURE__*/styled(Card060).withConfig({
  displayName: "styled-components-fixture___StyledCard14",
  componentId: "sc-1ch1z4k-255"
})(p => ({
  color: p.$_css59,
  [p.$_css60]: {
    opacity: p.$_css61
  },
  ...p.$_css62
}));
export const Card061 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card061",
  componentId: "sc-1ch1z4k-61"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card062 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card062",
  componentId: "sc-1ch1z4k-62"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card063 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card063",
  componentId: "sc-1ch1z4k-63"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card064 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 64
}).withConfig({
  displayName: "styled-components-fixture__Card064",
  componentId: "sc-1ch1z4k-64"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard15 = /*#__PURE__*/styled(Card064).withConfig({
  displayName: "styled-components-fixture___StyledCard15",
  componentId: "sc-1ch1z4k-256"
})(p => ({
  color: p.$_css63,
  [p.$_css64]: {
    opacity: p.$_css65
  },
  ...p.$_css66
}));
export const Card065 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card065",
  componentId: "sc-1ch1z4k-65"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card066 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card066",
  componentId: "sc-1ch1z4k-66"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card067 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card067",
  componentId: "sc-1ch1z4k-67"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card068 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 68
}).withConfig({
  displayName: "styled-components-fixture__Card068",
  componentId: "sc-1ch1z4k-68"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard16 = /*#__PURE__*/styled(Card068).withConfig({
  displayName: "styled-components-fixture___StyledCard16",
  componentId: "sc-1ch1z4k-257"
})(p => ({
  color: p.$_css67,
  [p.$_css68]: {
    opacity: p.$_css69
  },
  ...p.$_css70
}));
export const Card069 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card069",
  componentId: "sc-1ch1z4k-69"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card070 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card070",
  componentId: "sc-1ch1z4k-70"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card071 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card071",
  componentId: "sc-1ch1z4k-71"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card072 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 72
}).withConfig({
  displayName: "styled-components-fixture__Card072",
  componentId: "sc-1ch1z4k-72"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard17 = /*#__PURE__*/styled(Card072).withConfig({
  displayName: "styled-components-fixture___StyledCard17",
  componentId: "sc-1ch1z4k-258"
})(p => ({
  color: p.$_css71,
  [p.$_css72]: {
    opacity: p.$_css73
  },
  ...p.$_css74
}));
export const Card073 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card073",
  componentId: "sc-1ch1z4k-73"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card074 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card074",
  componentId: "sc-1ch1z4k-74"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card075 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card075",
  componentId: "sc-1ch1z4k-75"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card076 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 76
}).withConfig({
  displayName: "styled-components-fixture__Card076",
  componentId: "sc-1ch1z4k-76"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard18 = /*#__PURE__*/styled(Card076).withConfig({
  displayName: "styled-components-fixture___StyledCard18",
  componentId: "sc-1ch1z4k-259"
})(p => ({
  color: p.$_css75,
  [p.$_css76]: {
    opacity: p.$_css77
  },
  ...p.$_css78
}));
export const Card077 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card077",
  componentId: "sc-1ch1z4k-77"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card078 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card078",
  componentId: "sc-1ch1z4k-78"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card079 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card079",
  componentId: "sc-1ch1z4k-79"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card080 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 80
}).withConfig({
  displayName: "styled-components-fixture__Card080",
  componentId: "sc-1ch1z4k-80"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard19 = /*#__PURE__*/styled(Card080).withConfig({
  displayName: "styled-components-fixture___StyledCard19",
  componentId: "sc-1ch1z4k-260"
})(p => ({
  color: p.$_css79,
  [p.$_css80]: {
    opacity: p.$_css81
  },
  ...p.$_css82
}));
export const Card081 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card081",
  componentId: "sc-1ch1z4k-81"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card082 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card082",
  componentId: "sc-1ch1z4k-82"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card083 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card083",
  componentId: "sc-1ch1z4k-83"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card084 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 84
}).withConfig({
  displayName: "styled-components-fixture__Card084",
  componentId: "sc-1ch1z4k-84"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard20 = /*#__PURE__*/styled(Card084).withConfig({
  displayName: "styled-components-fixture___StyledCard20",
  componentId: "sc-1ch1z4k-261"
})(p => ({
  color: p.$_css83,
  [p.$_css84]: {
    opacity: p.$_css85
  },
  ...p.$_css86
}));
export const Card085 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card085",
  componentId: "sc-1ch1z4k-85"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card086 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card086",
  componentId: "sc-1ch1z4k-86"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card087 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card087",
  componentId: "sc-1ch1z4k-87"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card088 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 88
}).withConfig({
  displayName: "styled-components-fixture__Card088",
  componentId: "sc-1ch1z4k-88"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard21 = /*#__PURE__*/styled(Card088).withConfig({
  displayName: "styled-components-fixture___StyledCard21",
  componentId: "sc-1ch1z4k-262"
})(p => ({
  color: p.$_css87,
  [p.$_css88]: {
    opacity: p.$_css89
  },
  ...p.$_css90
}));
export const Card089 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card089",
  componentId: "sc-1ch1z4k-89"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card090 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card090",
  componentId: "sc-1ch1z4k-90"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card091 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card091",
  componentId: "sc-1ch1z4k-91"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card092 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 92
}).withConfig({
  displayName: "styled-components-fixture__Card092",
  componentId: "sc-1ch1z4k-92"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard22 = /*#__PURE__*/styled(Card092).withConfig({
  displayName: "styled-components-fixture___StyledCard22",
  componentId: "sc-1ch1z4k-263"
})(p => ({
  color: p.$_css91,
  [p.$_css92]: {
    opacity: p.$_css93
  },
  ...p.$_css94
}));
export const Card093 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card093",
  componentId: "sc-1ch1z4k-93"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card094 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card094",
  componentId: "sc-1ch1z4k-94"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card095 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card095",
  componentId: "sc-1ch1z4k-95"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card096 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 96
}).withConfig({
  displayName: "styled-components-fixture__Card096",
  componentId: "sc-1ch1z4k-96"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard23 = /*#__PURE__*/styled(Card096).withConfig({
  displayName: "styled-components-fixture___StyledCard23",
  componentId: "sc-1ch1z4k-264"
})(p => ({
  color: p.$_css95,
  [p.$_css96]: {
    opacity: p.$_css97
  },
  ...p.$_css98
}));
export const Card097 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card097",
  componentId: "sc-1ch1z4k-97"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card098 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card098",
  componentId: "sc-1ch1z4k-98"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card099 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card099",
  componentId: "sc-1ch1z4k-99"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card100 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 100
}).withConfig({
  displayName: "styled-components-fixture__Card100",
  componentId: "sc-1ch1z4k-100"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard24 = /*#__PURE__*/styled(Card100).withConfig({
  displayName: "styled-components-fixture___StyledCard24",
  componentId: "sc-1ch1z4k-265"
})(p => ({
  color: p.$_css99,
  [p.$_css100]: {
    opacity: p.$_css101
  },
  ...p.$_css102
}));
export const Card101 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card101",
  componentId: "sc-1ch1z4k-101"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card102 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card102",
  componentId: "sc-1ch1z4k-102"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card103 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card103",
  componentId: "sc-1ch1z4k-103"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card104 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 104
}).withConfig({
  displayName: "styled-components-fixture__Card104",
  componentId: "sc-1ch1z4k-104"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard25 = /*#__PURE__*/styled(Card104).withConfig({
  displayName: "styled-components-fixture___StyledCard25",
  componentId: "sc-1ch1z4k-266"
})(p => ({
  color: p.$_css103,
  [p.$_css104]: {
    opacity: p.$_css105
  },
  ...p.$_css106
}));
export const Card105 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card105",
  componentId: "sc-1ch1z4k-105"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card106 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card106",
  componentId: "sc-1ch1z4k-106"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card107 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card107",
  componentId: "sc-1ch1z4k-107"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card108 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 108
}).withConfig({
  displayName: "styled-components-fixture__Card108",
  componentId: "sc-1ch1z4k-108"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard26 = /*#__PURE__*/styled(Card108).withConfig({
  displayName: "styled-components-fixture___StyledCard26",
  componentId: "sc-1ch1z4k-267"
})(p => ({
  color: p.$_css107,
  [p.$_css108]: {
    opacity: p.$_css109
  },
  ...p.$_css110
}));
export const Card109 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card109",
  componentId: "sc-1ch1z4k-109"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card110 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card110",
  componentId: "sc-1ch1z4k-110"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card111 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card111",
  componentId: "sc-1ch1z4k-111"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card112 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 112
}).withConfig({
  displayName: "styled-components-fixture__Card112",
  componentId: "sc-1ch1z4k-112"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard27 = /*#__PURE__*/styled(Card112).withConfig({
  displayName: "styled-components-fixture___StyledCard27",
  componentId: "sc-1ch1z4k-268"
})(p => ({
  color: p.$_css111,
  [p.$_css112]: {
    opacity: p.$_css113
  },
  ...p.$_css114
}));
export const Card113 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card113",
  componentId: "sc-1ch1z4k-113"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card114 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card114",
  componentId: "sc-1ch1z4k-114"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card115 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card115",
  componentId: "sc-1ch1z4k-115"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card116 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 116
}).withConfig({
  displayName: "styled-components-fixture__Card116",
  componentId: "sc-1ch1z4k-116"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard28 = /*#__PURE__*/styled(Card116).withConfig({
  displayName: "styled-components-fixture___StyledCard28",
  componentId: "sc-1ch1z4k-269"
})(p => ({
  color: p.$_css115,
  [p.$_css116]: {
    opacity: p.$_css117
  },
  ...p.$_css118
}));
export const Card117 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card117",
  componentId: "sc-1ch1z4k-117"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card118 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card118",
  componentId: "sc-1ch1z4k-118"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card119 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card119",
  componentId: "sc-1ch1z4k-119"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card120 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 120
}).withConfig({
  displayName: "styled-components-fixture__Card120",
  componentId: "sc-1ch1z4k-120"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard29 = /*#__PURE__*/styled(Card120).withConfig({
  displayName: "styled-components-fixture___StyledCard29",
  componentId: "sc-1ch1z4k-270"
})(p => ({
  color: p.$_css119,
  [p.$_css120]: {
    opacity: p.$_css121
  },
  ...p.$_css122
}));
export const Card121 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card121",
  componentId: "sc-1ch1z4k-121"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card122 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card122",
  componentId: "sc-1ch1z4k-122"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card123 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card123",
  componentId: "sc-1ch1z4k-123"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card124 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 124
}).withConfig({
  displayName: "styled-components-fixture__Card124",
  componentId: "sc-1ch1z4k-124"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard30 = /*#__PURE__*/styled(Card124).withConfig({
  displayName: "styled-components-fixture___StyledCard30",
  componentId: "sc-1ch1z4k-271"
})(p => ({
  color: p.$_css123,
  [p.$_css124]: {
    opacity: p.$_css125
  },
  ...p.$_css126
}));
export const Card125 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card125",
  componentId: "sc-1ch1z4k-125"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card126 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card126",
  componentId: "sc-1ch1z4k-126"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card127 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card127",
  componentId: "sc-1ch1z4k-127"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card128 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 128
}).withConfig({
  displayName: "styled-components-fixture__Card128",
  componentId: "sc-1ch1z4k-128"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard31 = /*#__PURE__*/styled(Card128).withConfig({
  displayName: "styled-components-fixture___StyledCard31",
  componentId: "sc-1ch1z4k-272"
})(p => ({
  color: p.$_css127,
  [p.$_css128]: {
    opacity: p.$_css129
  },
  ...p.$_css130
}));
export const Card129 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card129",
  componentId: "sc-1ch1z4k-129"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card130 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card130",
  componentId: "sc-1ch1z4k-130"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card131 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card131",
  componentId: "sc-1ch1z4k-131"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card132 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 132
}).withConfig({
  displayName: "styled-components-fixture__Card132",
  componentId: "sc-1ch1z4k-132"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard32 = /*#__PURE__*/styled(Card132).withConfig({
  displayName: "styled-components-fixture___StyledCard32",
  componentId: "sc-1ch1z4k-273"
})(p => ({
  color: p.$_css131,
  [p.$_css132]: {
    opacity: p.$_css133
  },
  ...p.$_css134
}));
export const Card133 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card133",
  componentId: "sc-1ch1z4k-133"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card134 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card134",
  componentId: "sc-1ch1z4k-134"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card135 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card135",
  componentId: "sc-1ch1z4k-135"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card136 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 136
}).withConfig({
  displayName: "styled-components-fixture__Card136",
  componentId: "sc-1ch1z4k-136"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard33 = /*#__PURE__*/styled(Card136).withConfig({
  displayName: "styled-components-fixture___StyledCard33",
  componentId: "sc-1ch1z4k-274"
})(p => ({
  color: p.$_css135,
  [p.$_css136]: {
    opacity: p.$_css137
  },
  ...p.$_css138
}));
export const Card137 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card137",
  componentId: "sc-1ch1z4k-137"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card138 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card138",
  componentId: "sc-1ch1z4k-138"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card139 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card139",
  componentId: "sc-1ch1z4k-139"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card140 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 140
}).withConfig({
  displayName: "styled-components-fixture__Card140",
  componentId: "sc-1ch1z4k-140"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard34 = /*#__PURE__*/styled(Card140).withConfig({
  displayName: "styled-components-fixture___StyledCard34",
  componentId: "sc-1ch1z4k-275"
})(p => ({
  color: p.$_css139,
  [p.$_css140]: {
    opacity: p.$_css141
  },
  ...p.$_css142
}));
export const Card141 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card141",
  componentId: "sc-1ch1z4k-141"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card142 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card142",
  componentId: "sc-1ch1z4k-142"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card143 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card143",
  componentId: "sc-1ch1z4k-143"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card144 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 144
}).withConfig({
  displayName: "styled-components-fixture__Card144",
  componentId: "sc-1ch1z4k-144"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard35 = /*#__PURE__*/styled(Card144).withConfig({
  displayName: "styled-components-fixture___StyledCard35",
  componentId: "sc-1ch1z4k-276"
})(p => ({
  color: p.$_css143,
  [p.$_css144]: {
    opacity: p.$_css145
  },
  ...p.$_css146
}));
export const Card145 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card145",
  componentId: "sc-1ch1z4k-145"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card146 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card146",
  componentId: "sc-1ch1z4k-146"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card147 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card147",
  componentId: "sc-1ch1z4k-147"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card148 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 148
}).withConfig({
  displayName: "styled-components-fixture__Card148",
  componentId: "sc-1ch1z4k-148"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard36 = /*#__PURE__*/styled(Card148).withConfig({
  displayName: "styled-components-fixture___StyledCard36",
  componentId: "sc-1ch1z4k-277"
})(p => ({
  color: p.$_css147,
  [p.$_css148]: {
    opacity: p.$_css149
  },
  ...p.$_css150
}));
export const Card149 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card149",
  componentId: "sc-1ch1z4k-149"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card150 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card150",
  componentId: "sc-1ch1z4k-150"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card151 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card151",
  componentId: "sc-1ch1z4k-151"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card152 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 152
}).withConfig({
  displayName: "styled-components-fixture__Card152",
  componentId: "sc-1ch1z4k-152"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard37 = /*#__PURE__*/styled(Card152).withConfig({
  displayName: "styled-components-fixture___StyledCard37",
  componentId: "sc-1ch1z4k-278"
})(p => ({
  color: p.$_css151,
  [p.$_css152]: {
    opacity: p.$_css153
  },
  ...p.$_css154
}));
export const Card153 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card153",
  componentId: "sc-1ch1z4k-153"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card154 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card154",
  componentId: "sc-1ch1z4k-154"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card155 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card155",
  componentId: "sc-1ch1z4k-155"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card156 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 156
}).withConfig({
  displayName: "styled-components-fixture__Card156",
  componentId: "sc-1ch1z4k-156"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard38 = /*#__PURE__*/styled(Card156).withConfig({
  displayName: "styled-components-fixture___StyledCard38",
  componentId: "sc-1ch1z4k-279"
})(p => ({
  color: p.$_css155,
  [p.$_css156]: {
    opacity: p.$_css157
  },
  ...p.$_css158
}));
export const Card157 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card157",
  componentId: "sc-1ch1z4k-157"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card158 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card158",
  componentId: "sc-1ch1z4k-158"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card159 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card159",
  componentId: "sc-1ch1z4k-159"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card160 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 160
}).withConfig({
  displayName: "styled-components-fixture__Card160",
  componentId: "sc-1ch1z4k-160"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard39 = /*#__PURE__*/styled(Card160).withConfig({
  displayName: "styled-components-fixture___StyledCard39",
  componentId: "sc-1ch1z4k-280"
})(p => ({
  color: p.$_css159,
  [p.$_css160]: {
    opacity: p.$_css161
  },
  ...p.$_css162
}));
export const Card161 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card161",
  componentId: "sc-1ch1z4k-161"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card162 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card162",
  componentId: "sc-1ch1z4k-162"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card163 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card163",
  componentId: "sc-1ch1z4k-163"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card164 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 164
}).withConfig({
  displayName: "styled-components-fixture__Card164",
  componentId: "sc-1ch1z4k-164"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard40 = /*#__PURE__*/styled(Card164).withConfig({
  displayName: "styled-components-fixture___StyledCard40",
  componentId: "sc-1ch1z4k-281"
})(p => ({
  color: p.$_css163,
  [p.$_css164]: {
    opacity: p.$_css165
  },
  ...p.$_css166
}));
export const Card165 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card165",
  componentId: "sc-1ch1z4k-165"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card166 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card166",
  componentId: "sc-1ch1z4k-166"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card167 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card167",
  componentId: "sc-1ch1z4k-167"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card168 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 168
}).withConfig({
  displayName: "styled-components-fixture__Card168",
  componentId: "sc-1ch1z4k-168"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard41 = /*#__PURE__*/styled(Card168).withConfig({
  displayName: "styled-components-fixture___StyledCard41",
  componentId: "sc-1ch1z4k-282"
})(p => ({
  color: p.$_css167,
  [p.$_css168]: {
    opacity: p.$_css169
  },
  ...p.$_css170
}));
export const Card169 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card169",
  componentId: "sc-1ch1z4k-169"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card170 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card170",
  componentId: "sc-1ch1z4k-170"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card171 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card171",
  componentId: "sc-1ch1z4k-171"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card172 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 172
}).withConfig({
  displayName: "styled-components-fixture__Card172",
  componentId: "sc-1ch1z4k-172"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard42 = /*#__PURE__*/styled(Card172).withConfig({
  displayName: "styled-components-fixture___StyledCard42",
  componentId: "sc-1ch1z4k-283"
})(p => ({
  color: p.$_css171,
  [p.$_css172]: {
    opacity: p.$_css173
  },
  ...p.$_css174
}));
export const Card173 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card173",
  componentId: "sc-1ch1z4k-173"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card174 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card174",
  componentId: "sc-1ch1z4k-174"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card175 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card175",
  componentId: "sc-1ch1z4k-175"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card176 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 176
}).withConfig({
  displayName: "styled-components-fixture__Card176",
  componentId: "sc-1ch1z4k-176"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard43 = /*#__PURE__*/styled(Card176).withConfig({
  displayName: "styled-components-fixture___StyledCard43",
  componentId: "sc-1ch1z4k-284"
})(p => ({
  color: p.$_css175,
  [p.$_css176]: {
    opacity: p.$_css177
  },
  ...p.$_css178
}));
export const Card177 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card177",
  componentId: "sc-1ch1z4k-177"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card178 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card178",
  componentId: "sc-1ch1z4k-178"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card179 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card179",
  componentId: "sc-1ch1z4k-179"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card180 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 180
}).withConfig({
  displayName: "styled-components-fixture__Card180",
  componentId: "sc-1ch1z4k-180"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard44 = /*#__PURE__*/styled(Card180).withConfig({
  displayName: "styled-components-fixture___StyledCard44",
  componentId: "sc-1ch1z4k-285"
})(p => ({
  color: p.$_css179,
  [p.$_css180]: {
    opacity: p.$_css181
  },
  ...p.$_css182
}));
export const Card181 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card181",
  componentId: "sc-1ch1z4k-181"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card182 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card182",
  componentId: "sc-1ch1z4k-182"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card183 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card183",
  componentId: "sc-1ch1z4k-183"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card184 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 184
}).withConfig({
  displayName: "styled-components-fixture__Card184",
  componentId: "sc-1ch1z4k-184"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard45 = /*#__PURE__*/styled(Card184).withConfig({
  displayName: "styled-components-fixture___StyledCard45",
  componentId: "sc-1ch1z4k-286"
})(p => ({
  color: p.$_css183,
  [p.$_css184]: {
    opacity: p.$_css185
  },
  ...p.$_css186
}));
export const Card185 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card185",
  componentId: "sc-1ch1z4k-185"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card186 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card186",
  componentId: "sc-1ch1z4k-186"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card187 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card187",
  componentId: "sc-1ch1z4k-187"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card188 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 188
}).withConfig({
  displayName: "styled-components-fixture__Card188",
  componentId: "sc-1ch1z4k-188"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard46 = /*#__PURE__*/styled(Card188).withConfig({
  displayName: "styled-components-fixture___StyledCard46",
  componentId: "sc-1ch1z4k-287"
})(p => ({
  color: p.$_css187,
  [p.$_css188]: {
    opacity: p.$_css189
  },
  ...p.$_css190
}));
export const Card189 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card189",
  componentId: "sc-1ch1z4k-189"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card190 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card190",
  componentId: "sc-1ch1z4k-190"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card191 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card191",
  componentId: "sc-1ch1z4k-191"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card192 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 192
}).withConfig({
  displayName: "styled-components-fixture__Card192",
  componentId: "sc-1ch1z4k-192"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard47 = /*#__PURE__*/styled(Card192).withConfig({
  displayName: "styled-components-fixture___StyledCard47",
  componentId: "sc-1ch1z4k-288"
})(p => ({
  color: p.$_css191,
  [p.$_css192]: {
    opacity: p.$_css193
  },
  ...p.$_css194
}));
export const Card193 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card193",
  componentId: "sc-1ch1z4k-193"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card194 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card194",
  componentId: "sc-1ch1z4k-194"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card195 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card195",
  componentId: "sc-1ch1z4k-195"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card196 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 196
}).withConfig({
  displayName: "styled-components-fixture__Card196",
  componentId: "sc-1ch1z4k-196"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard48 = /*#__PURE__*/styled(Card196).withConfig({
  displayName: "styled-components-fixture___StyledCard48",
  componentId: "sc-1ch1z4k-289"
})(p => ({
  color: p.$_css195,
  [p.$_css196]: {
    opacity: p.$_css197
  },
  ...p.$_css198
}));
export const Card197 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card197",
  componentId: "sc-1ch1z4k-197"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card198 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card198",
  componentId: "sc-1ch1z4k-198"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card199 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card199",
  componentId: "sc-1ch1z4k-199"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card200 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 200
}).withConfig({
  displayName: "styled-components-fixture__Card200",
  componentId: "sc-1ch1z4k-200"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard49 = /*#__PURE__*/styled(Card200).withConfig({
  displayName: "styled-components-fixture___StyledCard49",
  componentId: "sc-1ch1z4k-290"
})(p => ({
  color: p.$_css199,
  [p.$_css200]: {
    opacity: p.$_css201
  },
  ...p.$_css202
}));
export const Card201 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card201",
  componentId: "sc-1ch1z4k-201"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card202 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card202",
  componentId: "sc-1ch1z4k-202"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card203 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card203",
  componentId: "sc-1ch1z4k-203"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card204 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 204
}).withConfig({
  displayName: "styled-components-fixture__Card204",
  componentId: "sc-1ch1z4k-204"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard50 = /*#__PURE__*/styled(Card204).withConfig({
  displayName: "styled-components-fixture___StyledCard50",
  componentId: "sc-1ch1z4k-291"
})(p => ({
  color: p.$_css203,
  [p.$_css204]: {
    opacity: p.$_css205
  },
  ...p.$_css206
}));
export const Card205 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card205",
  componentId: "sc-1ch1z4k-205"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card206 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card206",
  componentId: "sc-1ch1z4k-206"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card207 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card207",
  componentId: "sc-1ch1z4k-207"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card208 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 208
}).withConfig({
  displayName: "styled-components-fixture__Card208",
  componentId: "sc-1ch1z4k-208"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard51 = /*#__PURE__*/styled(Card208).withConfig({
  displayName: "styled-components-fixture___StyledCard51",
  componentId: "sc-1ch1z4k-292"
})(p => ({
  color: p.$_css207,
  [p.$_css208]: {
    opacity: p.$_css209
  },
  ...p.$_css210
}));
export const Card209 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card209",
  componentId: "sc-1ch1z4k-209"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card210 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card210",
  componentId: "sc-1ch1z4k-210"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card211 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card211",
  componentId: "sc-1ch1z4k-211"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card212 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 212
}).withConfig({
  displayName: "styled-components-fixture__Card212",
  componentId: "sc-1ch1z4k-212"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard52 = /*#__PURE__*/styled(Card212).withConfig({
  displayName: "styled-components-fixture___StyledCard52",
  componentId: "sc-1ch1z4k-293"
})(p => ({
  color: p.$_css211,
  [p.$_css212]: {
    opacity: p.$_css213
  },
  ...p.$_css214
}));
export const Card213 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card213",
  componentId: "sc-1ch1z4k-213"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card214 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card214",
  componentId: "sc-1ch1z4k-214"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card215 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card215",
  componentId: "sc-1ch1z4k-215"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card216 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 216
}).withConfig({
  displayName: "styled-components-fixture__Card216",
  componentId: "sc-1ch1z4k-216"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard53 = /*#__PURE__*/styled(Card216).withConfig({
  displayName: "styled-components-fixture___StyledCard53",
  componentId: "sc-1ch1z4k-294"
})(p => ({
  color: p.$_css215,
  [p.$_css216]: {
    opacity: p.$_css217
  },
  ...p.$_css218
}));
export const Card217 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card217",
  componentId: "sc-1ch1z4k-217"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card218 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card218",
  componentId: "sc-1ch1z4k-218"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card219 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card219",
  componentId: "sc-1ch1z4k-219"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card220 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 220
}).withConfig({
  displayName: "styled-components-fixture__Card220",
  componentId: "sc-1ch1z4k-220"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard54 = /*#__PURE__*/styled(Card220).withConfig({
  displayName: "styled-components-fixture___StyledCard54",
  componentId: "sc-1ch1z4k-295"
})(p => ({
  color: p.$_css219,
  [p.$_css220]: {
    opacity: p.$_css221
  },
  ...p.$_css222
}));
export const Card221 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card221",
  componentId: "sc-1ch1z4k-221"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card222 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card222",
  componentId: "sc-1ch1z4k-222"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card223 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card223",
  componentId: "sc-1ch1z4k-223"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card224 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 224
}).withConfig({
  displayName: "styled-components-fixture__Card224",
  componentId: "sc-1ch1z4k-224"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard55 = /*#__PURE__*/styled(Card224).withConfig({
  displayName: "styled-components-fixture___StyledCard55",
  componentId: "sc-1ch1z4k-296"
})(p => ({
  color: p.$_css223,
  [p.$_css224]: {
    opacity: p.$_css225
  },
  ...p.$_css226
}));
export const Card225 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card225",
  componentId: "sc-1ch1z4k-225"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card226 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card226",
  componentId: "sc-1ch1z4k-226"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card227 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card227",
  componentId: "sc-1ch1z4k-227"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card228 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 228
}).withConfig({
  displayName: "styled-components-fixture__Card228",
  componentId: "sc-1ch1z4k-228"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard56 = /*#__PURE__*/styled(Card228).withConfig({
  displayName: "styled-components-fixture___StyledCard56",
  componentId: "sc-1ch1z4k-297"
})(p => ({
  color: p.$_css227,
  [p.$_css228]: {
    opacity: p.$_css229
  },
  ...p.$_css230
}));
export const Card229 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card229",
  componentId: "sc-1ch1z4k-229"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card230 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card230",
  componentId: "sc-1ch1z4k-230"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card231 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card231",
  componentId: "sc-1ch1z4k-231"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card232 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 232
}).withConfig({
  displayName: "styled-components-fixture__Card232",
  componentId: "sc-1ch1z4k-232"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard57 = /*#__PURE__*/styled(Card232).withConfig({
  displayName: "styled-components-fixture___StyledCard57",
  componentId: "sc-1ch1z4k-298"
})(p => ({
  color: p.$_css231,
  [p.$_css232]: {
    opacity: p.$_css233
  },
  ...p.$_css234
}));
export const Card233 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card233",
  componentId: "sc-1ch1z4k-233"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card234 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card234",
  componentId: "sc-1ch1z4k-234"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card235 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card235",
  componentId: "sc-1ch1z4k-235"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card236 = /*#__PURE__*/styled.article.attrs({
  role: "article",
  "data-index": 236
}).withConfig({
  displayName: "styled-components-fixture__Card236",
  componentId: "sc-1ch1z4k-236"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
var _StyledCard58 = /*#__PURE__*/styled(Card236).withConfig({
  displayName: "styled-components-fixture___StyledCard58",
  componentId: "sc-1ch1z4k-299"
})(p => ({
  color: p.$_css235,
  [p.$_css236]: {
    opacity: p.$_css237
  },
  ...p.$_css238
}));
export const Card237 = /*#__PURE__*/styled(BaseComponent).attrs(props => ({
  tabIndex: props.tabIndex ?? 0
})).withConfig({
  displayName: "styled-components-fixture__Card237",
  componentId: "sc-1ch1z4k-237"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card238 = /*#__PURE__*/styled.section.withConfig({
  displayName: "styled-components-fixture__Card238",
  componentId: "sc-1ch1z4k-238"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card239 = /*#__PURE__*/styled("aside").withConfig({
  displayName: "styled-components-fixture__Card239",
  componentId: "sc-1ch1z4k-239"
})(["", " display:grid;grid-template-columns:minmax(0,1fr) auto;gap:", "px;color:", ";background:linear-gradient(135deg,#fff,#f4f7fb);animation:", " 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}", ""], sharedSurface, props => props.gap ?? 8, props => props.active ? "#005fcc" : "#172033", enter, props => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const CardUsage000 = props => <_StyledCard data-card-index={0} $_css={props.active ? "#005fcc" : "#172033"} $_css2={props.selector} $_css3={props.opacity} $_css4={props.surface} />;
export const CardUsage004 = props => <_StyledCard2 data-card-index={4} $_css5={props.active ? "#005fcc" : "#172033"} $_css6={props.selector} $_css7={props.opacity} $_css8={props.surface} />;
export const CardUsage008 = props => <_StyledCard3 data-card-index={8} $_css9={props.active ? "#005fcc" : "#172033"} $_css0={props.selector} $_css1={props.opacity} $_css10={props.surface} />;
export const CardUsage012 = props => <_StyledCard4 data-card-index={12} $_css11={props.active ? "#005fcc" : "#172033"} $_css12={props.selector} $_css13={props.opacity} $_css14={props.surface} />;
export const CardUsage016 = props => <_StyledCard5 data-card-index={16} $_css15={props.active ? "#005fcc" : "#172033"} $_css16={props.selector} $_css17={props.opacity} $_css18={props.surface} />;
export const CardUsage020 = props => <_StyledCard6 data-card-index={20} $_css19={props.active ? "#005fcc" : "#172033"} $_css20={props.selector} $_css21={props.opacity} $_css22={props.surface} />;
export const CardUsage024 = props => <_StyledCard7 data-card-index={24} $_css23={props.active ? "#005fcc" : "#172033"} $_css24={props.selector} $_css25={props.opacity} $_css26={props.surface} />;
export const CardUsage028 = props => <_StyledCard8 data-card-index={28} $_css27={props.active ? "#005fcc" : "#172033"} $_css28={props.selector} $_css29={props.opacity} $_css30={props.surface} />;
export const CardUsage032 = props => <_StyledCard9 data-card-index={32} $_css31={props.active ? "#005fcc" : "#172033"} $_css32={props.selector} $_css33={props.opacity} $_css34={props.surface} />;
export const CardUsage036 = props => <_StyledCard0 data-card-index={36} $_css35={props.active ? "#005fcc" : "#172033"} $_css36={props.selector} $_css37={props.opacity} $_css38={props.surface} />;
export const CardUsage040 = props => <_StyledCard1 data-card-index={40} $_css39={props.active ? "#005fcc" : "#172033"} $_css40={props.selector} $_css41={props.opacity} $_css42={props.surface} />;
export const CardUsage044 = props => <_StyledCard10 data-card-index={44} $_css43={props.active ? "#005fcc" : "#172033"} $_css44={props.selector} $_css45={props.opacity} $_css46={props.surface} />;
export const CardUsage048 = props => <_StyledCard11 data-card-index={48} $_css47={props.active ? "#005fcc" : "#172033"} $_css48={props.selector} $_css49={props.opacity} $_css50={props.surface} />;
export const CardUsage052 = props => <_StyledCard12 data-card-index={52} $_css51={props.active ? "#005fcc" : "#172033"} $_css52={props.selector} $_css53={props.opacity} $_css54={props.surface} />;
export const CardUsage056 = props => <_StyledCard13 data-card-index={56} $_css55={props.active ? "#005fcc" : "#172033"} $_css56={props.selector} $_css57={props.opacity} $_css58={props.surface} />;
export const CardUsage060 = props => <_StyledCard14 data-card-index={60} $_css59={props.active ? "#005fcc" : "#172033"} $_css60={props.selector} $_css61={props.opacity} $_css62={props.surface} />;
export const CardUsage064 = props => <_StyledCard15 data-card-index={64} $_css63={props.active ? "#005fcc" : "#172033"} $_css64={props.selector} $_css65={props.opacity} $_css66={props.surface} />;
export const CardUsage068 = props => <_StyledCard16 data-card-index={68} $_css67={props.active ? "#005fcc" : "#172033"} $_css68={props.selector} $_css69={props.opacity} $_css70={props.surface} />;
export const CardUsage072 = props => <_StyledCard17 data-card-index={72} $_css71={props.active ? "#005fcc" : "#172033"} $_css72={props.selector} $_css73={props.opacity} $_css74={props.surface} />;
export const CardUsage076 = props => <_StyledCard18 data-card-index={76} $_css75={props.active ? "#005fcc" : "#172033"} $_css76={props.selector} $_css77={props.opacity} $_css78={props.surface} />;
export const CardUsage080 = props => <_StyledCard19 data-card-index={80} $_css79={props.active ? "#005fcc" : "#172033"} $_css80={props.selector} $_css81={props.opacity} $_css82={props.surface} />;
export const CardUsage084 = props => <_StyledCard20 data-card-index={84} $_css83={props.active ? "#005fcc" : "#172033"} $_css84={props.selector} $_css85={props.opacity} $_css86={props.surface} />;
export const CardUsage088 = props => <_StyledCard21 data-card-index={88} $_css87={props.active ? "#005fcc" : "#172033"} $_css88={props.selector} $_css89={props.opacity} $_css90={props.surface} />;
export const CardUsage092 = props => <_StyledCard22 data-card-index={92} $_css91={props.active ? "#005fcc" : "#172033"} $_css92={props.selector} $_css93={props.opacity} $_css94={props.surface} />;
export const CardUsage096 = props => <_StyledCard23 data-card-index={96} $_css95={props.active ? "#005fcc" : "#172033"} $_css96={props.selector} $_css97={props.opacity} $_css98={props.surface} />;
export const CardUsage100 = props => <_StyledCard24 data-card-index={100} $_css99={props.active ? "#005fcc" : "#172033"} $_css100={props.selector} $_css101={props.opacity} $_css102={props.surface} />;
export const CardUsage104 = props => <_StyledCard25 data-card-index={104} $_css103={props.active ? "#005fcc" : "#172033"} $_css104={props.selector} $_css105={props.opacity} $_css106={props.surface} />;
export const CardUsage108 = props => <_StyledCard26 data-card-index={108} $_css107={props.active ? "#005fcc" : "#172033"} $_css108={props.selector} $_css109={props.opacity} $_css110={props.surface} />;
export const CardUsage112 = props => <_StyledCard27 data-card-index={112} $_css111={props.active ? "#005fcc" : "#172033"} $_css112={props.selector} $_css113={props.opacity} $_css114={props.surface} />;
export const CardUsage116 = props => <_StyledCard28 data-card-index={116} $_css115={props.active ? "#005fcc" : "#172033"} $_css116={props.selector} $_css117={props.opacity} $_css118={props.surface} />;
export const CardUsage120 = props => <_StyledCard29 data-card-index={120} $_css119={props.active ? "#005fcc" : "#172033"} $_css120={props.selector} $_css121={props.opacity} $_css122={props.surface} />;
export const CardUsage124 = props => <_StyledCard30 data-card-index={124} $_css123={props.active ? "#005fcc" : "#172033"} $_css124={props.selector} $_css125={props.opacity} $_css126={props.surface} />;
export const CardUsage128 = props => <_StyledCard31 data-card-index={128} $_css127={props.active ? "#005fcc" : "#172033"} $_css128={props.selector} $_css129={props.opacity} $_css130={props.surface} />;
export const CardUsage132 = props => <_StyledCard32 data-card-index={132} $_css131={props.active ? "#005fcc" : "#172033"} $_css132={props.selector} $_css133={props.opacity} $_css134={props.surface} />;
export const CardUsage136 = props => <_StyledCard33 data-card-index={136} $_css135={props.active ? "#005fcc" : "#172033"} $_css136={props.selector} $_css137={props.opacity} $_css138={props.surface} />;
export const CardUsage140 = props => <_StyledCard34 data-card-index={140} $_css139={props.active ? "#005fcc" : "#172033"} $_css140={props.selector} $_css141={props.opacity} $_css142={props.surface} />;
export const CardUsage144 = props => <_StyledCard35 data-card-index={144} $_css143={props.active ? "#005fcc" : "#172033"} $_css144={props.selector} $_css145={props.opacity} $_css146={props.surface} />;
export const CardUsage148 = props => <_StyledCard36 data-card-index={148} $_css147={props.active ? "#005fcc" : "#172033"} $_css148={props.selector} $_css149={props.opacity} $_css150={props.surface} />;
export const CardUsage152 = props => <_StyledCard37 data-card-index={152} $_css151={props.active ? "#005fcc" : "#172033"} $_css152={props.selector} $_css153={props.opacity} $_css154={props.surface} />;
export const CardUsage156 = props => <_StyledCard38 data-card-index={156} $_css155={props.active ? "#005fcc" : "#172033"} $_css156={props.selector} $_css157={props.opacity} $_css158={props.surface} />;
export const CardUsage160 = props => <_StyledCard39 data-card-index={160} $_css159={props.active ? "#005fcc" : "#172033"} $_css160={props.selector} $_css161={props.opacity} $_css162={props.surface} />;
export const CardUsage164 = props => <_StyledCard40 data-card-index={164} $_css163={props.active ? "#005fcc" : "#172033"} $_css164={props.selector} $_css165={props.opacity} $_css166={props.surface} />;
export const CardUsage168 = props => <_StyledCard41 data-card-index={168} $_css167={props.active ? "#005fcc" : "#172033"} $_css168={props.selector} $_css169={props.opacity} $_css170={props.surface} />;
export const CardUsage172 = props => <_StyledCard42 data-card-index={172} $_css171={props.active ? "#005fcc" : "#172033"} $_css172={props.selector} $_css173={props.opacity} $_css174={props.surface} />;
export const CardUsage176 = props => <_StyledCard43 data-card-index={176} $_css175={props.active ? "#005fcc" : "#172033"} $_css176={props.selector} $_css177={props.opacity} $_css178={props.surface} />;
export const CardUsage180 = props => <_StyledCard44 data-card-index={180} $_css179={props.active ? "#005fcc" : "#172033"} $_css180={props.selector} $_css181={props.opacity} $_css182={props.surface} />;
export const CardUsage184 = props => <_StyledCard45 data-card-index={184} $_css183={props.active ? "#005fcc" : "#172033"} $_css184={props.selector} $_css185={props.opacity} $_css186={props.surface} />;
export const CardUsage188 = props => <_StyledCard46 data-card-index={188} $_css187={props.active ? "#005fcc" : "#172033"} $_css188={props.selector} $_css189={props.opacity} $_css190={props.surface} />;
export const CardUsage192 = props => <_StyledCard47 data-card-index={192} $_css191={props.active ? "#005fcc" : "#172033"} $_css192={props.selector} $_css193={props.opacity} $_css194={props.surface} />;
export const CardUsage196 = props => <_StyledCard48 data-card-index={196} $_css195={props.active ? "#005fcc" : "#172033"} $_css196={props.selector} $_css197={props.opacity} $_css198={props.surface} />;
export const CardUsage200 = props => <_StyledCard49 data-card-index={200} $_css199={props.active ? "#005fcc" : "#172033"} $_css200={props.selector} $_css201={props.opacity} $_css202={props.surface} />;
export const CardUsage204 = props => <_StyledCard50 data-card-index={204} $_css203={props.active ? "#005fcc" : "#172033"} $_css204={props.selector} $_css205={props.opacity} $_css206={props.surface} />;
export const CardUsage208 = props => <_StyledCard51 data-card-index={208} $_css207={props.active ? "#005fcc" : "#172033"} $_css208={props.selector} $_css209={props.opacity} $_css210={props.surface} />;
export const CardUsage212 = props => <_StyledCard52 data-card-index={212} $_css211={props.active ? "#005fcc" : "#172033"} $_css212={props.selector} $_css213={props.opacity} $_css214={props.surface} />;
export const CardUsage216 = props => <_StyledCard53 data-card-index={216} $_css215={props.active ? "#005fcc" : "#172033"} $_css216={props.selector} $_css217={props.opacity} $_css218={props.surface} />;
export const CardUsage220 = props => <_StyledCard54 data-card-index={220} $_css219={props.active ? "#005fcc" : "#172033"} $_css220={props.selector} $_css221={props.opacity} $_css222={props.surface} />;
export const CardUsage224 = props => <_StyledCard55 data-card-index={224} $_css223={props.active ? "#005fcc" : "#172033"} $_css224={props.selector} $_css225={props.opacity} $_css226={props.surface} />;
export const CardUsage228 = props => <_StyledCard56 data-card-index={228} $_css227={props.active ? "#005fcc" : "#172033"} $_css228={props.selector} $_css229={props.opacity} $_css230={props.surface} />;
export const CardUsage232 = props => <_StyledCard57 data-card-index={232} $_css231={props.active ? "#005fcc" : "#172033"} $_css232={props.selector} $_css233={props.opacity} $_css234={props.surface} />;
export const CardUsage236 = props => <_StyledCard58 data-card-index={236} $_css235={props.active ? "#005fcc" : "#172033"} $_css236={props.selector} $_css237={props.opacity} $_css238={props.surface} />;