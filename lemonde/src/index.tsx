import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import LiveSection from './components/LiveSection';
import "./style/baseStyle.scss"
import "./style/headerStyle.scss"
import "./style/liveSectionStyle.scss"

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <LiveSection />
        </div>
    );
};
// ! not null assertion operator
const root =
    ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);