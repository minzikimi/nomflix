import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { theme } from './theme.ts'
import {QueryClient, QueryClientProvider} from "react-query"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: black;
    color: ${props => props.theme.white.darker};
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0;
    margin: 0;
  }
  a {
    color: ${props => props.theme.linkColor};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>,
)
