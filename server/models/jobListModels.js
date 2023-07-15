const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://alstonnguyen:codesmith@cluster0.vtuodja.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'jobsSoloProj',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//set schema for user
const userSchema = new Schema({
  name: String,
  current_job_title: String,
  jobs_applied_to: Number,
  email_address: String,
});

// creats a model for the 'user'
const User = mongoose.model('user', userSchema);

const jobSchema = new Schema({
  name: String,
  job_name: String,
  have_applied: Boolean,
});

// creats a model for the 'user'
const Job = mongoose.model('job', jobSchema);

module.exports = {
  User,
  Job,
};
