import React from 'react';

import App from '../../containers/App';
import TestComponent from '../../components/TestComponent/TestComponent';
import Posts from '../../components/Posts/Posts';




const IndexPage = () => (
  <App>
    <TestComponent />
    <Posts />
  </App>
);

export default IndexPage;
