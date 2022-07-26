import React from 'react';
import { renderRoutes } from 'react-router-config';

const Home: React.FC<any> = (props) => {
  console.log(props.route.routes);

  return (
    <div>
      {'Home'}
      {renderRoutes(props.route.routes)}
    </div>
  );
};

Home.displayName = 'Home';

export default React.memo(Home);
