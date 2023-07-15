import React from 'react';
// similar to what we did in our f/e assessment we'll do a fetch request here and pull down props
import { createRoot } from 'react-dom/client';
import JobListFeed from './JobListFeed';

//i need to move to my server
//this can be done by copy and pasting this and referencing my server instead of directly doing this here

const url =
  'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=software&PageSize=50';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ecd4aba87dmsh45d391220f52ca5p1cbd79jsn802f8445c36c',
    'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
  },
};

const App = () => {
  return (
    <div style={styles.container}>
      <JobListFeed apiURL={url} apiOptions={options} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
};

// Render an <App> component to the #app div in the body
const root = createRoot(document.getElementById('app'));
root.render(<App />);
export default root;
