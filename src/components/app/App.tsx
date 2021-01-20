/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Content from '../content';
import Footer from '../footer';
import Header from '../header';
import Sidebar from '../sidebar';
import StickyAlert from '../sticky-alert';
import './App.css';

interface AppProps {}

const App: React.FunctionComponent = ({}: AppProps) => {
    return (
        <div
            className="App page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom"
            data-sidebar-hidden="hidden"
        >
            <Router>
                <StickyAlert />
                <Header />
                <Sidebar />
                <Content />
                <Footer />
            </Router>
        </div>
    );
};

export default App;
