/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/index';
// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Cherry's Micro-Note"
        defaultTitle="Cherry's Micro-Note"
      >
        <meta name="description" content="Cherry's Micro-Note" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/notes" component={FeaturePage} /> */}
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
    </AppWrapper>
  );
}
