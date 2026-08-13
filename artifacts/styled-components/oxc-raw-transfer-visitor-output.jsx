import styled, { css, createGlobalStyle, keyframes } from "styled-components";
const BaseComponent = (props) => props.as ?? null;
const sharedSurface = css(["border:1px solid rgba(0,0,0,0.12);border-radius:8px;"]);
const enter = keyframes(["from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);}"]);
export const GlobalStyle = createGlobalStyle(["html,body{margin:0;padding:0;}*,*::before,*::after{box-sizing:border-box;}"]);
export const Card000 = styled.article.attrs({
	role: "article",
	"data-index": 0
}).withConfig({
	displayName: "styled-components-fixture__Card000",
	componentId: "sc-1ch1z4k-0"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card001 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card001",
	componentId: "sc-1ch1z4k-1"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card002 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card002",
	componentId: "sc-1ch1z4k-2"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card003 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card003",
	componentId: "sc-1ch1z4k-3"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card004 = styled.article.attrs({
	role: "article",
	"data-index": 4
}).withConfig({
	displayName: "styled-components-fixture__Card004",
	componentId: "sc-1ch1z4k-4"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card005 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card005",
	componentId: "sc-1ch1z4k-5"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card006 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card006",
	componentId: "sc-1ch1z4k-6"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card007 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card007",
	componentId: "sc-1ch1z4k-7"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card008 = styled.article.attrs({
	role: "article",
	"data-index": 8
}).withConfig({
	displayName: "styled-components-fixture__Card008",
	componentId: "sc-1ch1z4k-8"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card009 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card009",
	componentId: "sc-1ch1z4k-9"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card010 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card010",
	componentId: "sc-1ch1z4k-10"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card011 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card011",
	componentId: "sc-1ch1z4k-11"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card012 = styled.article.attrs({
	role: "article",
	"data-index": 12
}).withConfig({
	displayName: "styled-components-fixture__Card012",
	componentId: "sc-1ch1z4k-12"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card013 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card013",
	componentId: "sc-1ch1z4k-13"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card014 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card014",
	componentId: "sc-1ch1z4k-14"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card015 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card015",
	componentId: "sc-1ch1z4k-15"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card016 = styled.article.attrs({
	role: "article",
	"data-index": 16
}).withConfig({
	displayName: "styled-components-fixture__Card016",
	componentId: "sc-1ch1z4k-16"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card017 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card017",
	componentId: "sc-1ch1z4k-17"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card018 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card018",
	componentId: "sc-1ch1z4k-18"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card019 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card019",
	componentId: "sc-1ch1z4k-19"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card020 = styled.article.attrs({
	role: "article",
	"data-index": 20
}).withConfig({
	displayName: "styled-components-fixture__Card020",
	componentId: "sc-1ch1z4k-20"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card021 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card021",
	componentId: "sc-1ch1z4k-21"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card022 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card022",
	componentId: "sc-1ch1z4k-22"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card023 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card023",
	componentId: "sc-1ch1z4k-23"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card024 = styled.article.attrs({
	role: "article",
	"data-index": 24
}).withConfig({
	displayName: "styled-components-fixture__Card024",
	componentId: "sc-1ch1z4k-24"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card025 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card025",
	componentId: "sc-1ch1z4k-25"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card026 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card026",
	componentId: "sc-1ch1z4k-26"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card027 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card027",
	componentId: "sc-1ch1z4k-27"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card028 = styled.article.attrs({
	role: "article",
	"data-index": 28
}).withConfig({
	displayName: "styled-components-fixture__Card028",
	componentId: "sc-1ch1z4k-28"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card029 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card029",
	componentId: "sc-1ch1z4k-29"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card030 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card030",
	componentId: "sc-1ch1z4k-30"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card031 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card031",
	componentId: "sc-1ch1z4k-31"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card032 = styled.article.attrs({
	role: "article",
	"data-index": 32
}).withConfig({
	displayName: "styled-components-fixture__Card032",
	componentId: "sc-1ch1z4k-32"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card033 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card033",
	componentId: "sc-1ch1z4k-33"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card034 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card034",
	componentId: "sc-1ch1z4k-34"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card035 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card035",
	componentId: "sc-1ch1z4k-35"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card036 = styled.article.attrs({
	role: "article",
	"data-index": 36
}).withConfig({
	displayName: "styled-components-fixture__Card036",
	componentId: "sc-1ch1z4k-36"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card037 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card037",
	componentId: "sc-1ch1z4k-37"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card038 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card038",
	componentId: "sc-1ch1z4k-38"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card039 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card039",
	componentId: "sc-1ch1z4k-39"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card040 = styled.article.attrs({
	role: "article",
	"data-index": 40
}).withConfig({
	displayName: "styled-components-fixture__Card040",
	componentId: "sc-1ch1z4k-40"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card041 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card041",
	componentId: "sc-1ch1z4k-41"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card042 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card042",
	componentId: "sc-1ch1z4k-42"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card043 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card043",
	componentId: "sc-1ch1z4k-43"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card044 = styled.article.attrs({
	role: "article",
	"data-index": 44
}).withConfig({
	displayName: "styled-components-fixture__Card044",
	componentId: "sc-1ch1z4k-44"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card045 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card045",
	componentId: "sc-1ch1z4k-45"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card046 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card046",
	componentId: "sc-1ch1z4k-46"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card047 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card047",
	componentId: "sc-1ch1z4k-47"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card048 = styled.article.attrs({
	role: "article",
	"data-index": 48
}).withConfig({
	displayName: "styled-components-fixture__Card048",
	componentId: "sc-1ch1z4k-48"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card049 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card049",
	componentId: "sc-1ch1z4k-49"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card050 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card050",
	componentId: "sc-1ch1z4k-50"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card051 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card051",
	componentId: "sc-1ch1z4k-51"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card052 = styled.article.attrs({
	role: "article",
	"data-index": 52
}).withConfig({
	displayName: "styled-components-fixture__Card052",
	componentId: "sc-1ch1z4k-52"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card053 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card053",
	componentId: "sc-1ch1z4k-53"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card054 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card054",
	componentId: "sc-1ch1z4k-54"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card055 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card055",
	componentId: "sc-1ch1z4k-55"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card056 = styled.article.attrs({
	role: "article",
	"data-index": 56
}).withConfig({
	displayName: "styled-components-fixture__Card056",
	componentId: "sc-1ch1z4k-56"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card057 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card057",
	componentId: "sc-1ch1z4k-57"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card058 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card058",
	componentId: "sc-1ch1z4k-58"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card059 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card059",
	componentId: "sc-1ch1z4k-59"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card060 = styled.article.attrs({
	role: "article",
	"data-index": 60
}).withConfig({
	displayName: "styled-components-fixture__Card060",
	componentId: "sc-1ch1z4k-60"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card061 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card061",
	componentId: "sc-1ch1z4k-61"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card062 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card062",
	componentId: "sc-1ch1z4k-62"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card063 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card063",
	componentId: "sc-1ch1z4k-63"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card064 = styled.article.attrs({
	role: "article",
	"data-index": 64
}).withConfig({
	displayName: "styled-components-fixture__Card064",
	componentId: "sc-1ch1z4k-64"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card065 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card065",
	componentId: "sc-1ch1z4k-65"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card066 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card066",
	componentId: "sc-1ch1z4k-66"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card067 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card067",
	componentId: "sc-1ch1z4k-67"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card068 = styled.article.attrs({
	role: "article",
	"data-index": 68
}).withConfig({
	displayName: "styled-components-fixture__Card068",
	componentId: "sc-1ch1z4k-68"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card069 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card069",
	componentId: "sc-1ch1z4k-69"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card070 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card070",
	componentId: "sc-1ch1z4k-70"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card071 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card071",
	componentId: "sc-1ch1z4k-71"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card072 = styled.article.attrs({
	role: "article",
	"data-index": 72
}).withConfig({
	displayName: "styled-components-fixture__Card072",
	componentId: "sc-1ch1z4k-72"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card073 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card073",
	componentId: "sc-1ch1z4k-73"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card074 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card074",
	componentId: "sc-1ch1z4k-74"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card075 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card075",
	componentId: "sc-1ch1z4k-75"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card076 = styled.article.attrs({
	role: "article",
	"data-index": 76
}).withConfig({
	displayName: "styled-components-fixture__Card076",
	componentId: "sc-1ch1z4k-76"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card077 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card077",
	componentId: "sc-1ch1z4k-77"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card078 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card078",
	componentId: "sc-1ch1z4k-78"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card079 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card079",
	componentId: "sc-1ch1z4k-79"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card080 = styled.article.attrs({
	role: "article",
	"data-index": 80
}).withConfig({
	displayName: "styled-components-fixture__Card080",
	componentId: "sc-1ch1z4k-80"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card081 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card081",
	componentId: "sc-1ch1z4k-81"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card082 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card082",
	componentId: "sc-1ch1z4k-82"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card083 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card083",
	componentId: "sc-1ch1z4k-83"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card084 = styled.article.attrs({
	role: "article",
	"data-index": 84
}).withConfig({
	displayName: "styled-components-fixture__Card084",
	componentId: "sc-1ch1z4k-84"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card085 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card085",
	componentId: "sc-1ch1z4k-85"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card086 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card086",
	componentId: "sc-1ch1z4k-86"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card087 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card087",
	componentId: "sc-1ch1z4k-87"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card088 = styled.article.attrs({
	role: "article",
	"data-index": 88
}).withConfig({
	displayName: "styled-components-fixture__Card088",
	componentId: "sc-1ch1z4k-88"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card089 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card089",
	componentId: "sc-1ch1z4k-89"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card090 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card090",
	componentId: "sc-1ch1z4k-90"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card091 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card091",
	componentId: "sc-1ch1z4k-91"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card092 = styled.article.attrs({
	role: "article",
	"data-index": 92
}).withConfig({
	displayName: "styled-components-fixture__Card092",
	componentId: "sc-1ch1z4k-92"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card093 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card093",
	componentId: "sc-1ch1z4k-93"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card094 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card094",
	componentId: "sc-1ch1z4k-94"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card095 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card095",
	componentId: "sc-1ch1z4k-95"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card096 = styled.article.attrs({
	role: "article",
	"data-index": 96
}).withConfig({
	displayName: "styled-components-fixture__Card096",
	componentId: "sc-1ch1z4k-96"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card097 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card097",
	componentId: "sc-1ch1z4k-97"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card098 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card098",
	componentId: "sc-1ch1z4k-98"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card099 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card099",
	componentId: "sc-1ch1z4k-99"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card100 = styled.article.attrs({
	role: "article",
	"data-index": 100
}).withConfig({
	displayName: "styled-components-fixture__Card100",
	componentId: "sc-1ch1z4k-100"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card101 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card101",
	componentId: "sc-1ch1z4k-101"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card102 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card102",
	componentId: "sc-1ch1z4k-102"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card103 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card103",
	componentId: "sc-1ch1z4k-103"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card104 = styled.article.attrs({
	role: "article",
	"data-index": 104
}).withConfig({
	displayName: "styled-components-fixture__Card104",
	componentId: "sc-1ch1z4k-104"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card105 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card105",
	componentId: "sc-1ch1z4k-105"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card106 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card106",
	componentId: "sc-1ch1z4k-106"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card107 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card107",
	componentId: "sc-1ch1z4k-107"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card108 = styled.article.attrs({
	role: "article",
	"data-index": 108
}).withConfig({
	displayName: "styled-components-fixture__Card108",
	componentId: "sc-1ch1z4k-108"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card109 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card109",
	componentId: "sc-1ch1z4k-109"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card110 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card110",
	componentId: "sc-1ch1z4k-110"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card111 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card111",
	componentId: "sc-1ch1z4k-111"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card112 = styled.article.attrs({
	role: "article",
	"data-index": 112
}).withConfig({
	displayName: "styled-components-fixture__Card112",
	componentId: "sc-1ch1z4k-112"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card113 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card113",
	componentId: "sc-1ch1z4k-113"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card114 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card114",
	componentId: "sc-1ch1z4k-114"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card115 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card115",
	componentId: "sc-1ch1z4k-115"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card116 = styled.article.attrs({
	role: "article",
	"data-index": 116
}).withConfig({
	displayName: "styled-components-fixture__Card116",
	componentId: "sc-1ch1z4k-116"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card117 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card117",
	componentId: "sc-1ch1z4k-117"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card118 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card118",
	componentId: "sc-1ch1z4k-118"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card119 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card119",
	componentId: "sc-1ch1z4k-119"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card120 = styled.article.attrs({
	role: "article",
	"data-index": 120
}).withConfig({
	displayName: "styled-components-fixture__Card120",
	componentId: "sc-1ch1z4k-120"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card121 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card121",
	componentId: "sc-1ch1z4k-121"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card122 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card122",
	componentId: "sc-1ch1z4k-122"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card123 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card123",
	componentId: "sc-1ch1z4k-123"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card124 = styled.article.attrs({
	role: "article",
	"data-index": 124
}).withConfig({
	displayName: "styled-components-fixture__Card124",
	componentId: "sc-1ch1z4k-124"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card125 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card125",
	componentId: "sc-1ch1z4k-125"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card126 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card126",
	componentId: "sc-1ch1z4k-126"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card127 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card127",
	componentId: "sc-1ch1z4k-127"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card128 = styled.article.attrs({
	role: "article",
	"data-index": 128
}).withConfig({
	displayName: "styled-components-fixture__Card128",
	componentId: "sc-1ch1z4k-128"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card129 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card129",
	componentId: "sc-1ch1z4k-129"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card130 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card130",
	componentId: "sc-1ch1z4k-130"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card131 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card131",
	componentId: "sc-1ch1z4k-131"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card132 = styled.article.attrs({
	role: "article",
	"data-index": 132
}).withConfig({
	displayName: "styled-components-fixture__Card132",
	componentId: "sc-1ch1z4k-132"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card133 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card133",
	componentId: "sc-1ch1z4k-133"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card134 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card134",
	componentId: "sc-1ch1z4k-134"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card135 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card135",
	componentId: "sc-1ch1z4k-135"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card136 = styled.article.attrs({
	role: "article",
	"data-index": 136
}).withConfig({
	displayName: "styled-components-fixture__Card136",
	componentId: "sc-1ch1z4k-136"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card137 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card137",
	componentId: "sc-1ch1z4k-137"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card138 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card138",
	componentId: "sc-1ch1z4k-138"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card139 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card139",
	componentId: "sc-1ch1z4k-139"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card140 = styled.article.attrs({
	role: "article",
	"data-index": 140
}).withConfig({
	displayName: "styled-components-fixture__Card140",
	componentId: "sc-1ch1z4k-140"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card141 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card141",
	componentId: "sc-1ch1z4k-141"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card142 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card142",
	componentId: "sc-1ch1z4k-142"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card143 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card143",
	componentId: "sc-1ch1z4k-143"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card144 = styled.article.attrs({
	role: "article",
	"data-index": 144
}).withConfig({
	displayName: "styled-components-fixture__Card144",
	componentId: "sc-1ch1z4k-144"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card145 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card145",
	componentId: "sc-1ch1z4k-145"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card146 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card146",
	componentId: "sc-1ch1z4k-146"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card147 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card147",
	componentId: "sc-1ch1z4k-147"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card148 = styled.article.attrs({
	role: "article",
	"data-index": 148
}).withConfig({
	displayName: "styled-components-fixture__Card148",
	componentId: "sc-1ch1z4k-148"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card149 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card149",
	componentId: "sc-1ch1z4k-149"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card150 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card150",
	componentId: "sc-1ch1z4k-150"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card151 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card151",
	componentId: "sc-1ch1z4k-151"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card152 = styled.article.attrs({
	role: "article",
	"data-index": 152
}).withConfig({
	displayName: "styled-components-fixture__Card152",
	componentId: "sc-1ch1z4k-152"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card153 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card153",
	componentId: "sc-1ch1z4k-153"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card154 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card154",
	componentId: "sc-1ch1z4k-154"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card155 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card155",
	componentId: "sc-1ch1z4k-155"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card156 = styled.article.attrs({
	role: "article",
	"data-index": 156
}).withConfig({
	displayName: "styled-components-fixture__Card156",
	componentId: "sc-1ch1z4k-156"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card157 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card157",
	componentId: "sc-1ch1z4k-157"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card158 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card158",
	componentId: "sc-1ch1z4k-158"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card159 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card159",
	componentId: "sc-1ch1z4k-159"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card160 = styled.article.attrs({
	role: "article",
	"data-index": 160
}).withConfig({
	displayName: "styled-components-fixture__Card160",
	componentId: "sc-1ch1z4k-160"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card161 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card161",
	componentId: "sc-1ch1z4k-161"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card162 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card162",
	componentId: "sc-1ch1z4k-162"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card163 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card163",
	componentId: "sc-1ch1z4k-163"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card164 = styled.article.attrs({
	role: "article",
	"data-index": 164
}).withConfig({
	displayName: "styled-components-fixture__Card164",
	componentId: "sc-1ch1z4k-164"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card165 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card165",
	componentId: "sc-1ch1z4k-165"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card166 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card166",
	componentId: "sc-1ch1z4k-166"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card167 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card167",
	componentId: "sc-1ch1z4k-167"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card168 = styled.article.attrs({
	role: "article",
	"data-index": 168
}).withConfig({
	displayName: "styled-components-fixture__Card168",
	componentId: "sc-1ch1z4k-168"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card169 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card169",
	componentId: "sc-1ch1z4k-169"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card170 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card170",
	componentId: "sc-1ch1z4k-170"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card171 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card171",
	componentId: "sc-1ch1z4k-171"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card172 = styled.article.attrs({
	role: "article",
	"data-index": 172
}).withConfig({
	displayName: "styled-components-fixture__Card172",
	componentId: "sc-1ch1z4k-172"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card173 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card173",
	componentId: "sc-1ch1z4k-173"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card174 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card174",
	componentId: "sc-1ch1z4k-174"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card175 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card175",
	componentId: "sc-1ch1z4k-175"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card176 = styled.article.attrs({
	role: "article",
	"data-index": 176
}).withConfig({
	displayName: "styled-components-fixture__Card176",
	componentId: "sc-1ch1z4k-176"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card177 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card177",
	componentId: "sc-1ch1z4k-177"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card178 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card178",
	componentId: "sc-1ch1z4k-178"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card179 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card179",
	componentId: "sc-1ch1z4k-179"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card180 = styled.article.attrs({
	role: "article",
	"data-index": 180
}).withConfig({
	displayName: "styled-components-fixture__Card180",
	componentId: "sc-1ch1z4k-180"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card181 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card181",
	componentId: "sc-1ch1z4k-181"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card182 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card182",
	componentId: "sc-1ch1z4k-182"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card183 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card183",
	componentId: "sc-1ch1z4k-183"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card184 = styled.article.attrs({
	role: "article",
	"data-index": 184
}).withConfig({
	displayName: "styled-components-fixture__Card184",
	componentId: "sc-1ch1z4k-184"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card185 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card185",
	componentId: "sc-1ch1z4k-185"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card186 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card186",
	componentId: "sc-1ch1z4k-186"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card187 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card187",
	componentId: "sc-1ch1z4k-187"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card188 = styled.article.attrs({
	role: "article",
	"data-index": 188
}).withConfig({
	displayName: "styled-components-fixture__Card188",
	componentId: "sc-1ch1z4k-188"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card189 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card189",
	componentId: "sc-1ch1z4k-189"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card190 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card190",
	componentId: "sc-1ch1z4k-190"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card191 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card191",
	componentId: "sc-1ch1z4k-191"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card192 = styled.article.attrs({
	role: "article",
	"data-index": 192
}).withConfig({
	displayName: "styled-components-fixture__Card192",
	componentId: "sc-1ch1z4k-192"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card193 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card193",
	componentId: "sc-1ch1z4k-193"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card194 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card194",
	componentId: "sc-1ch1z4k-194"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card195 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card195",
	componentId: "sc-1ch1z4k-195"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card196 = styled.article.attrs({
	role: "article",
	"data-index": 196
}).withConfig({
	displayName: "styled-components-fixture__Card196",
	componentId: "sc-1ch1z4k-196"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card197 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card197",
	componentId: "sc-1ch1z4k-197"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card198 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card198",
	componentId: "sc-1ch1z4k-198"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card199 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card199",
	componentId: "sc-1ch1z4k-199"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card200 = styled.article.attrs({
	role: "article",
	"data-index": 200
}).withConfig({
	displayName: "styled-components-fixture__Card200",
	componentId: "sc-1ch1z4k-200"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card201 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card201",
	componentId: "sc-1ch1z4k-201"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card202 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card202",
	componentId: "sc-1ch1z4k-202"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card203 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card203",
	componentId: "sc-1ch1z4k-203"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card204 = styled.article.attrs({
	role: "article",
	"data-index": 204
}).withConfig({
	displayName: "styled-components-fixture__Card204",
	componentId: "sc-1ch1z4k-204"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card205 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card205",
	componentId: "sc-1ch1z4k-205"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card206 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card206",
	componentId: "sc-1ch1z4k-206"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card207 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card207",
	componentId: "sc-1ch1z4k-207"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card208 = styled.article.attrs({
	role: "article",
	"data-index": 208
}).withConfig({
	displayName: "styled-components-fixture__Card208",
	componentId: "sc-1ch1z4k-208"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card209 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card209",
	componentId: "sc-1ch1z4k-209"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card210 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card210",
	componentId: "sc-1ch1z4k-210"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card211 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card211",
	componentId: "sc-1ch1z4k-211"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card212 = styled.article.attrs({
	role: "article",
	"data-index": 212
}).withConfig({
	displayName: "styled-components-fixture__Card212",
	componentId: "sc-1ch1z4k-212"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card213 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card213",
	componentId: "sc-1ch1z4k-213"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card214 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card214",
	componentId: "sc-1ch1z4k-214"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card215 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card215",
	componentId: "sc-1ch1z4k-215"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card216 = styled.article.attrs({
	role: "article",
	"data-index": 216
}).withConfig({
	displayName: "styled-components-fixture__Card216",
	componentId: "sc-1ch1z4k-216"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card217 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card217",
	componentId: "sc-1ch1z4k-217"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card218 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card218",
	componentId: "sc-1ch1z4k-218"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card219 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card219",
	componentId: "sc-1ch1z4k-219"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card220 = styled.article.attrs({
	role: "article",
	"data-index": 220
}).withConfig({
	displayName: "styled-components-fixture__Card220",
	componentId: "sc-1ch1z4k-220"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card221 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card221",
	componentId: "sc-1ch1z4k-221"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card222 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card222",
	componentId: "sc-1ch1z4k-222"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card223 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card223",
	componentId: "sc-1ch1z4k-223"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card224 = styled.article.attrs({
	role: "article",
	"data-index": 224
}).withConfig({
	displayName: "styled-components-fixture__Card224",
	componentId: "sc-1ch1z4k-224"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card225 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card225",
	componentId: "sc-1ch1z4k-225"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card226 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card226",
	componentId: "sc-1ch1z4k-226"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card227 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card227",
	componentId: "sc-1ch1z4k-227"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card228 = styled.article.attrs({
	role: "article",
	"data-index": 228
}).withConfig({
	displayName: "styled-components-fixture__Card228",
	componentId: "sc-1ch1z4k-228"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card229 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card229",
	componentId: "sc-1ch1z4k-229"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card230 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card230",
	componentId: "sc-1ch1z4k-230"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card231 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card231",
	componentId: "sc-1ch1z4k-231"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card232 = styled.article.attrs({
	role: "article",
	"data-index": 232
}).withConfig({
	displayName: "styled-components-fixture__Card232",
	componentId: "sc-1ch1z4k-232"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card233 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card233",
	componentId: "sc-1ch1z4k-233"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card234 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card234",
	componentId: "sc-1ch1z4k-234"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card235 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card235",
	componentId: "sc-1ch1z4k-235"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card236 = styled.article.attrs({
	role: "article",
	"data-index": 236
}).withConfig({
	displayName: "styled-components-fixture__Card236",
	componentId: "sc-1ch1z4k-236"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card237 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 })).withConfig({
	displayName: "styled-components-fixture__Card237",
	componentId: "sc-1ch1z4k-237"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card238 = styled.section.withConfig({
	displayName: "styled-components-fixture__Card238",
	componentId: "sc-1ch1z4k-238"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const Card239 = styled("aside").withConfig({
	displayName: "styled-components-fixture__Card239",
	componentId: "sc-1ch1z4k-239"
})([
	"",
	" display:grid;grid-template-columns:minmax(0,1fr) auto;gap:",
	"px;color:",
	";background:linear-gradient(135deg,#fff,#f4f7fb);animation:",
	" 180ms ease-out;&:hover,&:focus-visible{border-color:#005fcc;transform:translateY(-1px);}",
	""
], sharedSurface, (props) => props.gap ?? 8, (props) => props.active ? "#005fcc" : "#172033", enter, (props) => props.compact && css(["padding:2px 4px;> span{white-space:nowrap;}"]));
export const CardUsage000 = (props) => <_StyledCard000 data-card-index={0} $_css={props.active ? "#005fcc" : "#172033"} $_css2={props.selector} $_css3={props.opacity} $_css4={props.surface} />;
export const CardUsage004 = (props) => <_StyledCard004 data-card-index={4} $_css5={props.active ? "#005fcc" : "#172033"} $_css6={props.selector} $_css7={props.opacity} $_css8={props.surface} />;
export const CardUsage008 = (props) => <_StyledCard008 data-card-index={8} $_css9={props.active ? "#005fcc" : "#172033"} $_css10={props.selector} $_css11={props.opacity} $_css12={props.surface} />;
export const CardUsage012 = (props) => <_StyledCard012 data-card-index={12} $_css13={props.active ? "#005fcc" : "#172033"} $_css14={props.selector} $_css15={props.opacity} $_css16={props.surface} />;
export const CardUsage016 = (props) => <_StyledCard016 data-card-index={16} $_css17={props.active ? "#005fcc" : "#172033"} $_css18={props.selector} $_css19={props.opacity} $_css20={props.surface} />;
export const CardUsage020 = (props) => <_StyledCard020 data-card-index={20} $_css21={props.active ? "#005fcc" : "#172033"} $_css22={props.selector} $_css23={props.opacity} $_css24={props.surface} />;
export const CardUsage024 = (props) => <_StyledCard024 data-card-index={24} $_css25={props.active ? "#005fcc" : "#172033"} $_css26={props.selector} $_css27={props.opacity} $_css28={props.surface} />;
export const CardUsage028 = (props) => <_StyledCard028 data-card-index={28} $_css29={props.active ? "#005fcc" : "#172033"} $_css30={props.selector} $_css31={props.opacity} $_css32={props.surface} />;
export const CardUsage032 = (props) => <_StyledCard032 data-card-index={32} $_css33={props.active ? "#005fcc" : "#172033"} $_css34={props.selector} $_css35={props.opacity} $_css36={props.surface} />;
export const CardUsage036 = (props) => <_StyledCard036 data-card-index={36} $_css37={props.active ? "#005fcc" : "#172033"} $_css38={props.selector} $_css39={props.opacity} $_css40={props.surface} />;
export const CardUsage040 = (props) => <_StyledCard040 data-card-index={40} $_css41={props.active ? "#005fcc" : "#172033"} $_css42={props.selector} $_css43={props.opacity} $_css44={props.surface} />;
export const CardUsage044 = (props) => <_StyledCard044 data-card-index={44} $_css45={props.active ? "#005fcc" : "#172033"} $_css46={props.selector} $_css47={props.opacity} $_css48={props.surface} />;
export const CardUsage048 = (props) => <_StyledCard048 data-card-index={48} $_css49={props.active ? "#005fcc" : "#172033"} $_css50={props.selector} $_css51={props.opacity} $_css52={props.surface} />;
export const CardUsage052 = (props) => <_StyledCard052 data-card-index={52} $_css53={props.active ? "#005fcc" : "#172033"} $_css54={props.selector} $_css55={props.opacity} $_css56={props.surface} />;
export const CardUsage056 = (props) => <_StyledCard056 data-card-index={56} $_css57={props.active ? "#005fcc" : "#172033"} $_css58={props.selector} $_css59={props.opacity} $_css60={props.surface} />;
export const CardUsage060 = (props) => <_StyledCard060 data-card-index={60} $_css61={props.active ? "#005fcc" : "#172033"} $_css62={props.selector} $_css63={props.opacity} $_css64={props.surface} />;
export const CardUsage064 = (props) => <_StyledCard064 data-card-index={64} $_css65={props.active ? "#005fcc" : "#172033"} $_css66={props.selector} $_css67={props.opacity} $_css68={props.surface} />;
export const CardUsage068 = (props) => <_StyledCard068 data-card-index={68} $_css69={props.active ? "#005fcc" : "#172033"} $_css70={props.selector} $_css71={props.opacity} $_css72={props.surface} />;
export const CardUsage072 = (props) => <_StyledCard072 data-card-index={72} $_css73={props.active ? "#005fcc" : "#172033"} $_css74={props.selector} $_css75={props.opacity} $_css76={props.surface} />;
export const CardUsage076 = (props) => <_StyledCard076 data-card-index={76} $_css77={props.active ? "#005fcc" : "#172033"} $_css78={props.selector} $_css79={props.opacity} $_css80={props.surface} />;
export const CardUsage080 = (props) => <_StyledCard080 data-card-index={80} $_css81={props.active ? "#005fcc" : "#172033"} $_css82={props.selector} $_css83={props.opacity} $_css84={props.surface} />;
export const CardUsage084 = (props) => <_StyledCard084 data-card-index={84} $_css85={props.active ? "#005fcc" : "#172033"} $_css86={props.selector} $_css87={props.opacity} $_css88={props.surface} />;
export const CardUsage088 = (props) => <_StyledCard088 data-card-index={88} $_css89={props.active ? "#005fcc" : "#172033"} $_css90={props.selector} $_css91={props.opacity} $_css92={props.surface} />;
export const CardUsage092 = (props) => <_StyledCard092 data-card-index={92} $_css93={props.active ? "#005fcc" : "#172033"} $_css94={props.selector} $_css95={props.opacity} $_css96={props.surface} />;
export const CardUsage096 = (props) => <_StyledCard096 data-card-index={96} $_css97={props.active ? "#005fcc" : "#172033"} $_css98={props.selector} $_css99={props.opacity} $_css100={props.surface} />;
export const CardUsage100 = (props) => <_StyledCard100 data-card-index={100} $_css101={props.active ? "#005fcc" : "#172033"} $_css102={props.selector} $_css103={props.opacity} $_css104={props.surface} />;
export const CardUsage104 = (props) => <_StyledCard104 data-card-index={104} $_css105={props.active ? "#005fcc" : "#172033"} $_css106={props.selector} $_css107={props.opacity} $_css108={props.surface} />;
export const CardUsage108 = (props) => <_StyledCard108 data-card-index={108} $_css109={props.active ? "#005fcc" : "#172033"} $_css110={props.selector} $_css111={props.opacity} $_css112={props.surface} />;
export const CardUsage112 = (props) => <_StyledCard112 data-card-index={112} $_css113={props.active ? "#005fcc" : "#172033"} $_css114={props.selector} $_css115={props.opacity} $_css116={props.surface} />;
export const CardUsage116 = (props) => <_StyledCard116 data-card-index={116} $_css117={props.active ? "#005fcc" : "#172033"} $_css118={props.selector} $_css119={props.opacity} $_css120={props.surface} />;
export const CardUsage120 = (props) => <_StyledCard120 data-card-index={120} $_css121={props.active ? "#005fcc" : "#172033"} $_css122={props.selector} $_css123={props.opacity} $_css124={props.surface} />;
export const CardUsage124 = (props) => <_StyledCard124 data-card-index={124} $_css125={props.active ? "#005fcc" : "#172033"} $_css126={props.selector} $_css127={props.opacity} $_css128={props.surface} />;
export const CardUsage128 = (props) => <_StyledCard128 data-card-index={128} $_css129={props.active ? "#005fcc" : "#172033"} $_css130={props.selector} $_css131={props.opacity} $_css132={props.surface} />;
export const CardUsage132 = (props) => <_StyledCard132 data-card-index={132} $_css133={props.active ? "#005fcc" : "#172033"} $_css134={props.selector} $_css135={props.opacity} $_css136={props.surface} />;
export const CardUsage136 = (props) => <_StyledCard136 data-card-index={136} $_css137={props.active ? "#005fcc" : "#172033"} $_css138={props.selector} $_css139={props.opacity} $_css140={props.surface} />;
export const CardUsage140 = (props) => <_StyledCard140 data-card-index={140} $_css141={props.active ? "#005fcc" : "#172033"} $_css142={props.selector} $_css143={props.opacity} $_css144={props.surface} />;
export const CardUsage144 = (props) => <_StyledCard144 data-card-index={144} $_css145={props.active ? "#005fcc" : "#172033"} $_css146={props.selector} $_css147={props.opacity} $_css148={props.surface} />;
export const CardUsage148 = (props) => <_StyledCard148 data-card-index={148} $_css149={props.active ? "#005fcc" : "#172033"} $_css150={props.selector} $_css151={props.opacity} $_css152={props.surface} />;
export const CardUsage152 = (props) => <_StyledCard152 data-card-index={152} $_css153={props.active ? "#005fcc" : "#172033"} $_css154={props.selector} $_css155={props.opacity} $_css156={props.surface} />;
export const CardUsage156 = (props) => <_StyledCard156 data-card-index={156} $_css157={props.active ? "#005fcc" : "#172033"} $_css158={props.selector} $_css159={props.opacity} $_css160={props.surface} />;
export const CardUsage160 = (props) => <_StyledCard160 data-card-index={160} $_css161={props.active ? "#005fcc" : "#172033"} $_css162={props.selector} $_css163={props.opacity} $_css164={props.surface} />;
export const CardUsage164 = (props) => <_StyledCard164 data-card-index={164} $_css165={props.active ? "#005fcc" : "#172033"} $_css166={props.selector} $_css167={props.opacity} $_css168={props.surface} />;
export const CardUsage168 = (props) => <_StyledCard168 data-card-index={168} $_css169={props.active ? "#005fcc" : "#172033"} $_css170={props.selector} $_css171={props.opacity} $_css172={props.surface} />;
export const CardUsage172 = (props) => <_StyledCard172 data-card-index={172} $_css173={props.active ? "#005fcc" : "#172033"} $_css174={props.selector} $_css175={props.opacity} $_css176={props.surface} />;
export const CardUsage176 = (props) => <_StyledCard176 data-card-index={176} $_css177={props.active ? "#005fcc" : "#172033"} $_css178={props.selector} $_css179={props.opacity} $_css180={props.surface} />;
export const CardUsage180 = (props) => <_StyledCard180 data-card-index={180} $_css181={props.active ? "#005fcc" : "#172033"} $_css182={props.selector} $_css183={props.opacity} $_css184={props.surface} />;
export const CardUsage184 = (props) => <_StyledCard184 data-card-index={184} $_css185={props.active ? "#005fcc" : "#172033"} $_css186={props.selector} $_css187={props.opacity} $_css188={props.surface} />;
export const CardUsage188 = (props) => <_StyledCard188 data-card-index={188} $_css189={props.active ? "#005fcc" : "#172033"} $_css190={props.selector} $_css191={props.opacity} $_css192={props.surface} />;
export const CardUsage192 = (props) => <_StyledCard192 data-card-index={192} $_css193={props.active ? "#005fcc" : "#172033"} $_css194={props.selector} $_css195={props.opacity} $_css196={props.surface} />;
export const CardUsage196 = (props) => <_StyledCard196 data-card-index={196} $_css197={props.active ? "#005fcc" : "#172033"} $_css198={props.selector} $_css199={props.opacity} $_css200={props.surface} />;
export const CardUsage200 = (props) => <_StyledCard200 data-card-index={200} $_css201={props.active ? "#005fcc" : "#172033"} $_css202={props.selector} $_css203={props.opacity} $_css204={props.surface} />;
export const CardUsage204 = (props) => <_StyledCard204 data-card-index={204} $_css205={props.active ? "#005fcc" : "#172033"} $_css206={props.selector} $_css207={props.opacity} $_css208={props.surface} />;
export const CardUsage208 = (props) => <_StyledCard208 data-card-index={208} $_css209={props.active ? "#005fcc" : "#172033"} $_css210={props.selector} $_css211={props.opacity} $_css212={props.surface} />;
export const CardUsage212 = (props) => <_StyledCard212 data-card-index={212} $_css213={props.active ? "#005fcc" : "#172033"} $_css214={props.selector} $_css215={props.opacity} $_css216={props.surface} />;
export const CardUsage216 = (props) => <_StyledCard216 data-card-index={216} $_css217={props.active ? "#005fcc" : "#172033"} $_css218={props.selector} $_css219={props.opacity} $_css220={props.surface} />;
export const CardUsage220 = (props) => <_StyledCard220 data-card-index={220} $_css221={props.active ? "#005fcc" : "#172033"} $_css222={props.selector} $_css223={props.opacity} $_css224={props.surface} />;
export const CardUsage224 = (props) => <_StyledCard224 data-card-index={224} $_css225={props.active ? "#005fcc" : "#172033"} $_css226={props.selector} $_css227={props.opacity} $_css228={props.surface} />;
export const CardUsage228 = (props) => <_StyledCard228 data-card-index={228} $_css229={props.active ? "#005fcc" : "#172033"} $_css230={props.selector} $_css231={props.opacity} $_css232={props.surface} />;
export const CardUsage232 = (props) => <_StyledCard232 data-card-index={232} $_css233={props.active ? "#005fcc" : "#172033"} $_css234={props.selector} $_css235={props.opacity} $_css236={props.surface} />;
export const CardUsage236 = (props) => <_StyledCard236 data-card-index={236} $_css237={props.active ? "#005fcc" : "#172033"} $_css238={props.selector} $_css239={props.opacity} $_css240={props.surface} />;
var _StyledCard000 = styled(Card000).withConfig({
	displayName: "styled-components-fixture___StyledCard000",
	componentId: "sc-1ch1z4k-240"
})((p) => ({
	color: p.$_css,
	[p.$_css2]: { opacity: p.$_css3 },
	...p.$_css4
}));
var _StyledCard004 = styled(Card004).withConfig({
	displayName: "styled-components-fixture___StyledCard004",
	componentId: "sc-1ch1z4k-241"
})((p) => ({
	color: p.$_css5,
	[p.$_css6]: { opacity: p.$_css7 },
	...p.$_css8
}));
var _StyledCard008 = styled(Card008).withConfig({
	displayName: "styled-components-fixture___StyledCard008",
	componentId: "sc-1ch1z4k-242"
})((p) => ({
	color: p.$_css9,
	[p.$_css10]: { opacity: p.$_css11 },
	...p.$_css12
}));
var _StyledCard012 = styled(Card012).withConfig({
	displayName: "styled-components-fixture___StyledCard012",
	componentId: "sc-1ch1z4k-243"
})((p) => ({
	color: p.$_css13,
	[p.$_css14]: { opacity: p.$_css15 },
	...p.$_css16
}));
var _StyledCard016 = styled(Card016).withConfig({
	displayName: "styled-components-fixture___StyledCard016",
	componentId: "sc-1ch1z4k-244"
})((p) => ({
	color: p.$_css17,
	[p.$_css18]: { opacity: p.$_css19 },
	...p.$_css20
}));
var _StyledCard020 = styled(Card020).withConfig({
	displayName: "styled-components-fixture___StyledCard020",
	componentId: "sc-1ch1z4k-245"
})((p) => ({
	color: p.$_css21,
	[p.$_css22]: { opacity: p.$_css23 },
	...p.$_css24
}));
var _StyledCard024 = styled(Card024).withConfig({
	displayName: "styled-components-fixture___StyledCard024",
	componentId: "sc-1ch1z4k-246"
})((p) => ({
	color: p.$_css25,
	[p.$_css26]: { opacity: p.$_css27 },
	...p.$_css28
}));
var _StyledCard028 = styled(Card028).withConfig({
	displayName: "styled-components-fixture___StyledCard028",
	componentId: "sc-1ch1z4k-247"
})((p) => ({
	color: p.$_css29,
	[p.$_css30]: { opacity: p.$_css31 },
	...p.$_css32
}));
var _StyledCard032 = styled(Card032).withConfig({
	displayName: "styled-components-fixture___StyledCard032",
	componentId: "sc-1ch1z4k-248"
})((p) => ({
	color: p.$_css33,
	[p.$_css34]: { opacity: p.$_css35 },
	...p.$_css36
}));
var _StyledCard036 = styled(Card036).withConfig({
	displayName: "styled-components-fixture___StyledCard036",
	componentId: "sc-1ch1z4k-249"
})((p) => ({
	color: p.$_css37,
	[p.$_css38]: { opacity: p.$_css39 },
	...p.$_css40
}));
var _StyledCard040 = styled(Card040).withConfig({
	displayName: "styled-components-fixture___StyledCard040",
	componentId: "sc-1ch1z4k-250"
})((p) => ({
	color: p.$_css41,
	[p.$_css42]: { opacity: p.$_css43 },
	...p.$_css44
}));
var _StyledCard044 = styled(Card044).withConfig({
	displayName: "styled-components-fixture___StyledCard044",
	componentId: "sc-1ch1z4k-251"
})((p) => ({
	color: p.$_css45,
	[p.$_css46]: { opacity: p.$_css47 },
	...p.$_css48
}));
var _StyledCard048 = styled(Card048).withConfig({
	displayName: "styled-components-fixture___StyledCard048",
	componentId: "sc-1ch1z4k-252"
})((p) => ({
	color: p.$_css49,
	[p.$_css50]: { opacity: p.$_css51 },
	...p.$_css52
}));
var _StyledCard052 = styled(Card052).withConfig({
	displayName: "styled-components-fixture___StyledCard052",
	componentId: "sc-1ch1z4k-253"
})((p) => ({
	color: p.$_css53,
	[p.$_css54]: { opacity: p.$_css55 },
	...p.$_css56
}));
var _StyledCard056 = styled(Card056).withConfig({
	displayName: "styled-components-fixture___StyledCard056",
	componentId: "sc-1ch1z4k-254"
})((p) => ({
	color: p.$_css57,
	[p.$_css58]: { opacity: p.$_css59 },
	...p.$_css60
}));
var _StyledCard060 = styled(Card060).withConfig({
	displayName: "styled-components-fixture___StyledCard060",
	componentId: "sc-1ch1z4k-255"
})((p) => ({
	color: p.$_css61,
	[p.$_css62]: { opacity: p.$_css63 },
	...p.$_css64
}));
var _StyledCard064 = styled(Card064).withConfig({
	displayName: "styled-components-fixture___StyledCard064",
	componentId: "sc-1ch1z4k-256"
})((p) => ({
	color: p.$_css65,
	[p.$_css66]: { opacity: p.$_css67 },
	...p.$_css68
}));
var _StyledCard068 = styled(Card068).withConfig({
	displayName: "styled-components-fixture___StyledCard068",
	componentId: "sc-1ch1z4k-257"
})((p) => ({
	color: p.$_css69,
	[p.$_css70]: { opacity: p.$_css71 },
	...p.$_css72
}));
var _StyledCard072 = styled(Card072).withConfig({
	displayName: "styled-components-fixture___StyledCard072",
	componentId: "sc-1ch1z4k-258"
})((p) => ({
	color: p.$_css73,
	[p.$_css74]: { opacity: p.$_css75 },
	...p.$_css76
}));
var _StyledCard076 = styled(Card076).withConfig({
	displayName: "styled-components-fixture___StyledCard076",
	componentId: "sc-1ch1z4k-259"
})((p) => ({
	color: p.$_css77,
	[p.$_css78]: { opacity: p.$_css79 },
	...p.$_css80
}));
var _StyledCard080 = styled(Card080).withConfig({
	displayName: "styled-components-fixture___StyledCard080",
	componentId: "sc-1ch1z4k-260"
})((p) => ({
	color: p.$_css81,
	[p.$_css82]: { opacity: p.$_css83 },
	...p.$_css84
}));
var _StyledCard084 = styled(Card084).withConfig({
	displayName: "styled-components-fixture___StyledCard084",
	componentId: "sc-1ch1z4k-261"
})((p) => ({
	color: p.$_css85,
	[p.$_css86]: { opacity: p.$_css87 },
	...p.$_css88
}));
var _StyledCard088 = styled(Card088).withConfig({
	displayName: "styled-components-fixture___StyledCard088",
	componentId: "sc-1ch1z4k-262"
})((p) => ({
	color: p.$_css89,
	[p.$_css90]: { opacity: p.$_css91 },
	...p.$_css92
}));
var _StyledCard092 = styled(Card092).withConfig({
	displayName: "styled-components-fixture___StyledCard092",
	componentId: "sc-1ch1z4k-263"
})((p) => ({
	color: p.$_css93,
	[p.$_css94]: { opacity: p.$_css95 },
	...p.$_css96
}));
var _StyledCard096 = styled(Card096).withConfig({
	displayName: "styled-components-fixture___StyledCard096",
	componentId: "sc-1ch1z4k-264"
})((p) => ({
	color: p.$_css97,
	[p.$_css98]: { opacity: p.$_css99 },
	...p.$_css100
}));
var _StyledCard100 = styled(Card100).withConfig({
	displayName: "styled-components-fixture___StyledCard100",
	componentId: "sc-1ch1z4k-265"
})((p) => ({
	color: p.$_css101,
	[p.$_css102]: { opacity: p.$_css103 },
	...p.$_css104
}));
var _StyledCard104 = styled(Card104).withConfig({
	displayName: "styled-components-fixture___StyledCard104",
	componentId: "sc-1ch1z4k-266"
})((p) => ({
	color: p.$_css105,
	[p.$_css106]: { opacity: p.$_css107 },
	...p.$_css108
}));
var _StyledCard108 = styled(Card108).withConfig({
	displayName: "styled-components-fixture___StyledCard108",
	componentId: "sc-1ch1z4k-267"
})((p) => ({
	color: p.$_css109,
	[p.$_css110]: { opacity: p.$_css111 },
	...p.$_css112
}));
var _StyledCard112 = styled(Card112).withConfig({
	displayName: "styled-components-fixture___StyledCard112",
	componentId: "sc-1ch1z4k-268"
})((p) => ({
	color: p.$_css113,
	[p.$_css114]: { opacity: p.$_css115 },
	...p.$_css116
}));
var _StyledCard116 = styled(Card116).withConfig({
	displayName: "styled-components-fixture___StyledCard116",
	componentId: "sc-1ch1z4k-269"
})((p) => ({
	color: p.$_css117,
	[p.$_css118]: { opacity: p.$_css119 },
	...p.$_css120
}));
var _StyledCard120 = styled(Card120).withConfig({
	displayName: "styled-components-fixture___StyledCard120",
	componentId: "sc-1ch1z4k-270"
})((p) => ({
	color: p.$_css121,
	[p.$_css122]: { opacity: p.$_css123 },
	...p.$_css124
}));
var _StyledCard124 = styled(Card124).withConfig({
	displayName: "styled-components-fixture___StyledCard124",
	componentId: "sc-1ch1z4k-271"
})((p) => ({
	color: p.$_css125,
	[p.$_css126]: { opacity: p.$_css127 },
	...p.$_css128
}));
var _StyledCard128 = styled(Card128).withConfig({
	displayName: "styled-components-fixture___StyledCard128",
	componentId: "sc-1ch1z4k-272"
})((p) => ({
	color: p.$_css129,
	[p.$_css130]: { opacity: p.$_css131 },
	...p.$_css132
}));
var _StyledCard132 = styled(Card132).withConfig({
	displayName: "styled-components-fixture___StyledCard132",
	componentId: "sc-1ch1z4k-273"
})((p) => ({
	color: p.$_css133,
	[p.$_css134]: { opacity: p.$_css135 },
	...p.$_css136
}));
var _StyledCard136 = styled(Card136).withConfig({
	displayName: "styled-components-fixture___StyledCard136",
	componentId: "sc-1ch1z4k-274"
})((p) => ({
	color: p.$_css137,
	[p.$_css138]: { opacity: p.$_css139 },
	...p.$_css140
}));
var _StyledCard140 = styled(Card140).withConfig({
	displayName: "styled-components-fixture___StyledCard140",
	componentId: "sc-1ch1z4k-275"
})((p) => ({
	color: p.$_css141,
	[p.$_css142]: { opacity: p.$_css143 },
	...p.$_css144
}));
var _StyledCard144 = styled(Card144).withConfig({
	displayName: "styled-components-fixture___StyledCard144",
	componentId: "sc-1ch1z4k-276"
})((p) => ({
	color: p.$_css145,
	[p.$_css146]: { opacity: p.$_css147 },
	...p.$_css148
}));
var _StyledCard148 = styled(Card148).withConfig({
	displayName: "styled-components-fixture___StyledCard148",
	componentId: "sc-1ch1z4k-277"
})((p) => ({
	color: p.$_css149,
	[p.$_css150]: { opacity: p.$_css151 },
	...p.$_css152
}));
var _StyledCard152 = styled(Card152).withConfig({
	displayName: "styled-components-fixture___StyledCard152",
	componentId: "sc-1ch1z4k-278"
})((p) => ({
	color: p.$_css153,
	[p.$_css154]: { opacity: p.$_css155 },
	...p.$_css156
}));
var _StyledCard156 = styled(Card156).withConfig({
	displayName: "styled-components-fixture___StyledCard156",
	componentId: "sc-1ch1z4k-279"
})((p) => ({
	color: p.$_css157,
	[p.$_css158]: { opacity: p.$_css159 },
	...p.$_css160
}));
var _StyledCard160 = styled(Card160).withConfig({
	displayName: "styled-components-fixture___StyledCard160",
	componentId: "sc-1ch1z4k-280"
})((p) => ({
	color: p.$_css161,
	[p.$_css162]: { opacity: p.$_css163 },
	...p.$_css164
}));
var _StyledCard164 = styled(Card164).withConfig({
	displayName: "styled-components-fixture___StyledCard164",
	componentId: "sc-1ch1z4k-281"
})((p) => ({
	color: p.$_css165,
	[p.$_css166]: { opacity: p.$_css167 },
	...p.$_css168
}));
var _StyledCard168 = styled(Card168).withConfig({
	displayName: "styled-components-fixture___StyledCard168",
	componentId: "sc-1ch1z4k-282"
})((p) => ({
	color: p.$_css169,
	[p.$_css170]: { opacity: p.$_css171 },
	...p.$_css172
}));
var _StyledCard172 = styled(Card172).withConfig({
	displayName: "styled-components-fixture___StyledCard172",
	componentId: "sc-1ch1z4k-283"
})((p) => ({
	color: p.$_css173,
	[p.$_css174]: { opacity: p.$_css175 },
	...p.$_css176
}));
var _StyledCard176 = styled(Card176).withConfig({
	displayName: "styled-components-fixture___StyledCard176",
	componentId: "sc-1ch1z4k-284"
})((p) => ({
	color: p.$_css177,
	[p.$_css178]: { opacity: p.$_css179 },
	...p.$_css180
}));
var _StyledCard180 = styled(Card180).withConfig({
	displayName: "styled-components-fixture___StyledCard180",
	componentId: "sc-1ch1z4k-285"
})((p) => ({
	color: p.$_css181,
	[p.$_css182]: { opacity: p.$_css183 },
	...p.$_css184
}));
var _StyledCard184 = styled(Card184).withConfig({
	displayName: "styled-components-fixture___StyledCard184",
	componentId: "sc-1ch1z4k-286"
})((p) => ({
	color: p.$_css185,
	[p.$_css186]: { opacity: p.$_css187 },
	...p.$_css188
}));
var _StyledCard188 = styled(Card188).withConfig({
	displayName: "styled-components-fixture___StyledCard188",
	componentId: "sc-1ch1z4k-287"
})((p) => ({
	color: p.$_css189,
	[p.$_css190]: { opacity: p.$_css191 },
	...p.$_css192
}));
var _StyledCard192 = styled(Card192).withConfig({
	displayName: "styled-components-fixture___StyledCard192",
	componentId: "sc-1ch1z4k-288"
})((p) => ({
	color: p.$_css193,
	[p.$_css194]: { opacity: p.$_css195 },
	...p.$_css196
}));
var _StyledCard196 = styled(Card196).withConfig({
	displayName: "styled-components-fixture___StyledCard196",
	componentId: "sc-1ch1z4k-289"
})((p) => ({
	color: p.$_css197,
	[p.$_css198]: { opacity: p.$_css199 },
	...p.$_css200
}));
var _StyledCard200 = styled(Card200).withConfig({
	displayName: "styled-components-fixture___StyledCard200",
	componentId: "sc-1ch1z4k-290"
})((p) => ({
	color: p.$_css201,
	[p.$_css202]: { opacity: p.$_css203 },
	...p.$_css204
}));
var _StyledCard204 = styled(Card204).withConfig({
	displayName: "styled-components-fixture___StyledCard204",
	componentId: "sc-1ch1z4k-291"
})((p) => ({
	color: p.$_css205,
	[p.$_css206]: { opacity: p.$_css207 },
	...p.$_css208
}));
var _StyledCard208 = styled(Card208).withConfig({
	displayName: "styled-components-fixture___StyledCard208",
	componentId: "sc-1ch1z4k-292"
})((p) => ({
	color: p.$_css209,
	[p.$_css210]: { opacity: p.$_css211 },
	...p.$_css212
}));
var _StyledCard212 = styled(Card212).withConfig({
	displayName: "styled-components-fixture___StyledCard212",
	componentId: "sc-1ch1z4k-293"
})((p) => ({
	color: p.$_css213,
	[p.$_css214]: { opacity: p.$_css215 },
	...p.$_css216
}));
var _StyledCard216 = styled(Card216).withConfig({
	displayName: "styled-components-fixture___StyledCard216",
	componentId: "sc-1ch1z4k-294"
})((p) => ({
	color: p.$_css217,
	[p.$_css218]: { opacity: p.$_css219 },
	...p.$_css220
}));
var _StyledCard220 = styled(Card220).withConfig({
	displayName: "styled-components-fixture___StyledCard220",
	componentId: "sc-1ch1z4k-295"
})((p) => ({
	color: p.$_css221,
	[p.$_css222]: { opacity: p.$_css223 },
	...p.$_css224
}));
var _StyledCard224 = styled(Card224).withConfig({
	displayName: "styled-components-fixture___StyledCard224",
	componentId: "sc-1ch1z4k-296"
})((p) => ({
	color: p.$_css225,
	[p.$_css226]: { opacity: p.$_css227 },
	...p.$_css228
}));
var _StyledCard228 = styled(Card228).withConfig({
	displayName: "styled-components-fixture___StyledCard228",
	componentId: "sc-1ch1z4k-297"
})((p) => ({
	color: p.$_css229,
	[p.$_css230]: { opacity: p.$_css231 },
	...p.$_css232
}));
var _StyledCard232 = styled(Card232).withConfig({
	displayName: "styled-components-fixture___StyledCard232",
	componentId: "sc-1ch1z4k-298"
})((p) => ({
	color: p.$_css233,
	[p.$_css234]: { opacity: p.$_css235 },
	...p.$_css236
}));
var _StyledCard236 = styled(Card236).withConfig({
	displayName: "styled-components-fixture___StyledCard236",
	componentId: "sc-1ch1z4k-299"
})((p) => ({
	color: p.$_css237,
	[p.$_css238]: { opacity: p.$_css239 },
	...p.$_css240
}));
