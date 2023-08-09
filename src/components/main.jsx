import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <MainContent/>
        <Footer/>
    </React.StrictMode>,
)
