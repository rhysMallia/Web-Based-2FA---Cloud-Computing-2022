import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutTesting from './layouts/LayoutTesting';
// Views 
import Home from './views/Home';
//import Hash from './views/Hash';

// Initialize Google Analytics process.env.REACT_APP_GA_CODE
ReactGA.initialize();

//web view


const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [location]);

  //          <AppRoute  exact path="/hashs" component={Hash} layout={LayoutDefault} />

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

        </Switch>
      )} />
  );
}

export default App;