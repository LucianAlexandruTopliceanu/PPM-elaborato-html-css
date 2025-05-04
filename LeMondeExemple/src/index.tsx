import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import LiveSection from './components/LiveSection';
import MainSection from './components/MainSection';
import "./scss/style.scss"
import "./scss/headerStyle.scss"
import "./scss/liveSectionStyle.scss"
import "./scss/mainSectionStyle.scss"

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <LiveSection/>
            <MainSection/>
        </div>
    );
};
// ! not null assertion operator
const root =
    ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);