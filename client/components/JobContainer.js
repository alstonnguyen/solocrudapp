import React from 'react';

const JobContainer = ({ jobTitle, jobUrl, dateAdded, jobCompany }) => {
  // here we can set up what each job will display
  return (
    <div className='JobContainer' style={styles.container}>
      <p>Job Title: {jobTitle}</p>
      <p>
        Job URL: <a href={jobUrl}>{jobUrl}</a>
      </p>
      <p>Date Added: {dateAdded}</p>
      <p>Company: {jobCompany}</p>
    </div>
  );
};
const styles = {
  container: {
    border: '1px solid black',
    height: '100%',
    width: '100%',
    flex: 1,
  },
};
export default JobContainer;
