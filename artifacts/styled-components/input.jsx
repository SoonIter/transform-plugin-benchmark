import styled, { css, createGlobalStyle, keyframes } from "styled-components";
const BaseComponent = (props) => props.as ?? null;
const sharedSurface = css`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;
const enter = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;
export const GlobalStyle = createGlobalStyle`
  html, body { margin: 0; padding: 0; }
  *, *::before, *::after { box-sizing: border-box; }
`;
export const Card000 = styled.article.attrs({ role: "article", "data-index": 0 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card001 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card002 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card003 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card004 = styled.article.attrs({ role: "article", "data-index": 4 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card005 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card006 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card007 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card008 = styled.article.attrs({ role: "article", "data-index": 8 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card009 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card010 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card011 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card012 = styled.article.attrs({ role: "article", "data-index": 12 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card013 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card014 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card015 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card016 = styled.article.attrs({ role: "article", "data-index": 16 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card017 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card018 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card019 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card020 = styled.article.attrs({ role: "article", "data-index": 20 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card021 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card022 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card023 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card024 = styled.article.attrs({ role: "article", "data-index": 24 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card025 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card026 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card027 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card028 = styled.article.attrs({ role: "article", "data-index": 28 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card029 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card030 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card031 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card032 = styled.article.attrs({ role: "article", "data-index": 32 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card033 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card034 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card035 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card036 = styled.article.attrs({ role: "article", "data-index": 36 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card037 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card038 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card039 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card040 = styled.article.attrs({ role: "article", "data-index": 40 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card041 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card042 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card043 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card044 = styled.article.attrs({ role: "article", "data-index": 44 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card045 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card046 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card047 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card048 = styled.article.attrs({ role: "article", "data-index": 48 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card049 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card050 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card051 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card052 = styled.article.attrs({ role: "article", "data-index": 52 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card053 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card054 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card055 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card056 = styled.article.attrs({ role: "article", "data-index": 56 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card057 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card058 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card059 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card060 = styled.article.attrs({ role: "article", "data-index": 60 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card061 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card062 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card063 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card064 = styled.article.attrs({ role: "article", "data-index": 64 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card065 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card066 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card067 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card068 = styled.article.attrs({ role: "article", "data-index": 68 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card069 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card070 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card071 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card072 = styled.article.attrs({ role: "article", "data-index": 72 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card073 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card074 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card075 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card076 = styled.article.attrs({ role: "article", "data-index": 76 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card077 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card078 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card079 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card080 = styled.article.attrs({ role: "article", "data-index": 80 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card081 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card082 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card083 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card084 = styled.article.attrs({ role: "article", "data-index": 84 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card085 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card086 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card087 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card088 = styled.article.attrs({ role: "article", "data-index": 88 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card089 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card090 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card091 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card092 = styled.article.attrs({ role: "article", "data-index": 92 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card093 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card094 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card095 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card096 = styled.article.attrs({ role: "article", "data-index": 96 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card097 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card098 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card099 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card100 = styled.article.attrs({ role: "article", "data-index": 100 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card101 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card102 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card103 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card104 = styled.article.attrs({ role: "article", "data-index": 104 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card105 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card106 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card107 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card108 = styled.article.attrs({ role: "article", "data-index": 108 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card109 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card110 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card111 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card112 = styled.article.attrs({ role: "article", "data-index": 112 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card113 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card114 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card115 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card116 = styled.article.attrs({ role: "article", "data-index": 116 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card117 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card118 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card119 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card120 = styled.article.attrs({ role: "article", "data-index": 120 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card121 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card122 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card123 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card124 = styled.article.attrs({ role: "article", "data-index": 124 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card125 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card126 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card127 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card128 = styled.article.attrs({ role: "article", "data-index": 128 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card129 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card130 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card131 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card132 = styled.article.attrs({ role: "article", "data-index": 132 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card133 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card134 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card135 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card136 = styled.article.attrs({ role: "article", "data-index": 136 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card137 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card138 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card139 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card140 = styled.article.attrs({ role: "article", "data-index": 140 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card141 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card142 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card143 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card144 = styled.article.attrs({ role: "article", "data-index": 144 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card145 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card146 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card147 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card148 = styled.article.attrs({ role: "article", "data-index": 148 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card149 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card150 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card151 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card152 = styled.article.attrs({ role: "article", "data-index": 152 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card153 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card154 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card155 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card156 = styled.article.attrs({ role: "article", "data-index": 156 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card157 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card158 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card159 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card160 = styled.article.attrs({ role: "article", "data-index": 160 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card161 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card162 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card163 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card164 = styled.article.attrs({ role: "article", "data-index": 164 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card165 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card166 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card167 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card168 = styled.article.attrs({ role: "article", "data-index": 168 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card169 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card170 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card171 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card172 = styled.article.attrs({ role: "article", "data-index": 172 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card173 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card174 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card175 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card176 = styled.article.attrs({ role: "article", "data-index": 176 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card177 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card178 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card179 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card180 = styled.article.attrs({ role: "article", "data-index": 180 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card181 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card182 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card183 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card184 = styled.article.attrs({ role: "article", "data-index": 184 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card185 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card186 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card187 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card188 = styled.article.attrs({ role: "article", "data-index": 188 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card189 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card190 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card191 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card192 = styled.article.attrs({ role: "article", "data-index": 192 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card193 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card194 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card195 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card196 = styled.article.attrs({ role: "article", "data-index": 196 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card197 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card198 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card199 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card200 = styled.article.attrs({ role: "article", "data-index": 200 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card201 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card202 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card203 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card204 = styled.article.attrs({ role: "article", "data-index": 204 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card205 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card206 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card207 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card208 = styled.article.attrs({ role: "article", "data-index": 208 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card209 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card210 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card211 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card212 = styled.article.attrs({ role: "article", "data-index": 212 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card213 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card214 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card215 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card216 = styled.article.attrs({ role: "article", "data-index": 216 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card217 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card218 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card219 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card220 = styled.article.attrs({ role: "article", "data-index": 220 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card221 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card222 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card223 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card224 = styled.article.attrs({ role: "article", "data-index": 224 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card225 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card226 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card227 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card228 = styled.article.attrs({ role: "article", "data-index": 228 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card229 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card230 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card231 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card232 = styled.article.attrs({ role: "article", "data-index": 232 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card233 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card234 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card235 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card236 = styled.article.attrs({ role: "article", "data-index": 236 })`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card237 = styled(BaseComponent).attrs((props) => ({ tabIndex: props.tabIndex ?? 0 }))`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card238 = styled.section`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const Card239 = styled("aside")`
  ${sharedSurface}
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${props => props.gap ?? 8}px;
  color: ${props => props.active ? "#005fcc" : "#172033"};
  background: linear-gradient(135deg, #fff, #f4f7fb);
  animation: ${enter} 180ms ease-out;
  &:hover,
  &:focus-visible {
    border-color: #005fcc;
    transform: translateY(-1px);
  }
  ${props => props.compact && css`
    padding: 2px 4px;
    > span { white-space: nowrap; }
  `}
`;

export const CardUsage000 = (props) => (
  <Card000
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={0}
  />
);

export const CardUsage004 = (props) => (
  <Card004
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={4}
  />
);

export const CardUsage008 = (props) => (
  <Card008
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={8}
  />
);

export const CardUsage012 = (props) => (
  <Card012
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={12}
  />
);

export const CardUsage016 = (props) => (
  <Card016
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={16}
  />
);

export const CardUsage020 = (props) => (
  <Card020
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={20}
  />
);

export const CardUsage024 = (props) => (
  <Card024
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={24}
  />
);

export const CardUsage028 = (props) => (
  <Card028
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={28}
  />
);

export const CardUsage032 = (props) => (
  <Card032
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={32}
  />
);

export const CardUsage036 = (props) => (
  <Card036
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={36}
  />
);

export const CardUsage040 = (props) => (
  <Card040
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={40}
  />
);

export const CardUsage044 = (props) => (
  <Card044
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={44}
  />
);

export const CardUsage048 = (props) => (
  <Card048
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={48}
  />
);

export const CardUsage052 = (props) => (
  <Card052
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={52}
  />
);

export const CardUsage056 = (props) => (
  <Card056
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={56}
  />
);

export const CardUsage060 = (props) => (
  <Card060
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={60}
  />
);

export const CardUsage064 = (props) => (
  <Card064
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={64}
  />
);

export const CardUsage068 = (props) => (
  <Card068
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={68}
  />
);

export const CardUsage072 = (props) => (
  <Card072
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={72}
  />
);

export const CardUsage076 = (props) => (
  <Card076
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={76}
  />
);

export const CardUsage080 = (props) => (
  <Card080
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={80}
  />
);

export const CardUsage084 = (props) => (
  <Card084
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={84}
  />
);

export const CardUsage088 = (props) => (
  <Card088
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={88}
  />
);

export const CardUsage092 = (props) => (
  <Card092
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={92}
  />
);

export const CardUsage096 = (props) => (
  <Card096
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={96}
  />
);

export const CardUsage100 = (props) => (
  <Card100
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={100}
  />
);

export const CardUsage104 = (props) => (
  <Card104
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={104}
  />
);

export const CardUsage108 = (props) => (
  <Card108
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={108}
  />
);

export const CardUsage112 = (props) => (
  <Card112
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={112}
  />
);

export const CardUsage116 = (props) => (
  <Card116
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={116}
  />
);

export const CardUsage120 = (props) => (
  <Card120
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={120}
  />
);

export const CardUsage124 = (props) => (
  <Card124
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={124}
  />
);

export const CardUsage128 = (props) => (
  <Card128
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={128}
  />
);

export const CardUsage132 = (props) => (
  <Card132
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={132}
  />
);

export const CardUsage136 = (props) => (
  <Card136
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={136}
  />
);

export const CardUsage140 = (props) => (
  <Card140
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={140}
  />
);

export const CardUsage144 = (props) => (
  <Card144
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={144}
  />
);

export const CardUsage148 = (props) => (
  <Card148
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={148}
  />
);

export const CardUsage152 = (props) => (
  <Card152
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={152}
  />
);

export const CardUsage156 = (props) => (
  <Card156
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={156}
  />
);

export const CardUsage160 = (props) => (
  <Card160
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={160}
  />
);

export const CardUsage164 = (props) => (
  <Card164
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={164}
  />
);

export const CardUsage168 = (props) => (
  <Card168
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={168}
  />
);

export const CardUsage172 = (props) => (
  <Card172
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={172}
  />
);

export const CardUsage176 = (props) => (
  <Card176
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={176}
  />
);

export const CardUsage180 = (props) => (
  <Card180
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={180}
  />
);

export const CardUsage184 = (props) => (
  <Card184
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={184}
  />
);

export const CardUsage188 = (props) => (
  <Card188
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={188}
  />
);

export const CardUsage192 = (props) => (
  <Card192
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={192}
  />
);

export const CardUsage196 = (props) => (
  <Card196
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={196}
  />
);

export const CardUsage200 = (props) => (
  <Card200
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={200}
  />
);

export const CardUsage204 = (props) => (
  <Card204
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={204}
  />
);

export const CardUsage208 = (props) => (
  <Card208
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={208}
  />
);

export const CardUsage212 = (props) => (
  <Card212
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={212}
  />
);

export const CardUsage216 = (props) => (
  <Card216
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={216}
  />
);

export const CardUsage220 = (props) => (
  <Card220
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={220}
  />
);

export const CardUsage224 = (props) => (
  <Card224
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={224}
  />
);

export const CardUsage228 = (props) => (
  <Card228
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={228}
  />
);

export const CardUsage232 = (props) => (
  <Card232
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={232}
  />
);

export const CardUsage236 = (props) => (
  <Card236
    css={{
      color: props.active ? "#005fcc" : "#172033",
      [props.selector]: { opacity: props.opacity },
      ...props.surface,
    }}
    data-card-index={236}
  />
);
