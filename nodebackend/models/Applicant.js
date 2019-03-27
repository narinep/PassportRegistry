import mongoose from 'mongoose';
import { StringDecoder } from 'string_decoder';

const Schema = mongoose.Schema;

let Applicant = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  ssn: {
    type: Number
  },
  dob: {
    type: String
  },
  gender: {
    type: String
  }
});

export default mongoose.model('Applicant', Applicant);