import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import LiveSection from './components/LiveSection';
import MainSection from './components/MainSection';
import Footer from "./components/mainSectionComponents/Footer";
import "./scss/style.scss"
import "./scss/headerStyle.scss"
import "./scss/liveSectionStyle.scss"
import "./scss/mainSectionStyle.scss"
import "./scss/footerStyle.scss"

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <LiveSection/>
            <MainSection/>
            <Footer/>
        </div>
    );
};
// ! not null assertion operator
const root =
    ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);