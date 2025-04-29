import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './0429/App.jsx'
// import './index.css'
// import './style.css'
import { BrowserRouter } from 'react-router-dom'  /* 終端機先停止後輸入npm i react-router-dom 接者<BrowserRouter>打完會自己出現 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
