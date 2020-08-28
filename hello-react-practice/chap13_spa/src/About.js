import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>about</h1>
      <p>hi, about page</p>
      {showDetail && <p>set the detail value to true.</p>}
    </div>
  );
};

export default About;