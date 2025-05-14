import React, {Suspense, lazy, useEffect} from 'react';

const Router = lazy(() => {
  //inernet check

  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Routes')), 1);
  });
});

const Authenication = () => {
  return (
    <Suspense>
      <Router />
    </Suspense>
  );
};

export default Authenication;
