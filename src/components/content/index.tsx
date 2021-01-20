import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GifMaker from './gif-maker';
import Introduction from './introduction';
import Unknown from './unknown';
import PeriodicTable from './periodic-table';
import Element from './periodic-table/Element';
import Curios from './curios';
import About from './about';
import License from './license';
import Login from './authentication/login';
import Register from './authentication/register';
import TermsOfService from './terms-of-service/TermsOfService';
import PrivacyPolicy from './privacy-policy';

const Content: React.FunctionComponent = () => (
    <div className="content-wrapper d-flex justify-content-center align-items-center">
        <Switch>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/curios" component={Curios} />
            <Route exact path="/curios/gif-maker" component={GifMaker} />
            <Route exact path="/curios/periodic-table" component={PeriodicTable} />
            <Route exact path="/curios/periodic-table/elements/:id" component={Element} />
            <Route exact path="/about" component={About} />
            <Route exact path="/license" component={License} />
            <Route exact path="/terms-of-service" component={TermsOfService} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="*" component={Unknown} />
        </Switch>
    </div>
);

export default Content;
