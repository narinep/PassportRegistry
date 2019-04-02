import mongoose from 'mongoose';
import { StringDecoder } from 'string_decoder';

const Schema = mongoose.Schema;

let Applicant = new Schema({
  id: {
    type: String
  },
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
  },
  photo: {
    type: String
  }
});

export default mongoose.model('Applicant', Applicant);
