import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CaseStudy from './CaseStudy.jsx'
import './index.css'

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {path === '/case-study' ? <CaseStudy /> : <App />}
    </React.StrictMode>,
)
