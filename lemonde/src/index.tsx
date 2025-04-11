import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

const App: React.FC = () => {
    return <Header/>;
};
// ! not null assertion operator
const root =
    ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);