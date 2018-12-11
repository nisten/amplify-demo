import React from 'react';

import App from '../../containers/App';
import TestComponent from '../../components/TestComponent/TestComponent';
import Blog from '../../components/Blog/Blog';

const IndexPage = () => (
  <App>
    <TestComponent />
    <Blog />
  </App>
);

export default IndexPage;
