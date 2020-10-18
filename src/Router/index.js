import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('../container/Home'));
const Details = React.lazy(() => import('../container/DetailsPage'));
const NotFound = React.lazy(() => import('../container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dev/:id' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
