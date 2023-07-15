import React, { useEffect, useState } from 'react';
import JobContainer from './JobContainer';

//see if we can write mongo

const JobListFeed = ({ apiURL, apiOptions }) => {
  const [jobsAll, updateJobsAll] = useState([]);
  //fetch request here, similar to assessment we did

  useEffect(() => {
    fetch(apiURL, apiOptions)
      .then((res) => res.json())
      .then((data) => {
        updateJobsAll(data.data);
      });
  }, []);
  //now here jobsAll should have the whole objcet
  const jobListItems = [];
  for (let i = 0; i < jobsAll.length; i++) {
    jobListItems.push(
      <JobContainer
        jobTitle={jobsAll[i].title}
        jobUrl={jobsAll[i].url}
        dateAdded={jobsAll[i].dateAdded}
        jobCompany={jobsAll[i].company}
      />
    );
  }
  return (
    <div id='feed' style={styles.container}>
      {jobListItems}
    </div>
  );
};

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-center',
    padding: '10px',
  },
};
export default JobListFeed;
