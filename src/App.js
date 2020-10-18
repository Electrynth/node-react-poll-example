import React, { Suspense, lazy } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Poller = lazy(() => import('./Poller'));

function App() {
  return (
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <div style={{ display: 'flex' }}>
        <Link to="/" style={{ marginRight: 8 }}>Home</Link>
        <Link to="/poller">Poller</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/poller" component={Poller} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
