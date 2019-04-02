import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Applicant from './models/Applicant';
import { INSPECT_MAX_BYTES } from 'buffer';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/applicants');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

router.route('/applicants').get((req, res) => {
  Applicant.find((err, applicants) => {
    if (err) console.log(err);
    else res.json(applicants);
  });
});

router.route('/applicants/:id').get((req, res) => {
  Applicant.findById(req.params.id, (err, applicant) => {
    if (err) console.log(err);
    else res.json(applicant);
  });
});

// router.route('/applicants/add').post((req, res) => {
router.route('/applicants').post((req, res) => {
  let applicant = new Applicant(req.body);
  applicant
    .save()
    .then(applicant => {
      res.status(200).json({
        applicant: 'Added successfully'
      });
    })
    .catch(err => {
      res.status(500).send('Failed to create new document');
    });
});

// router.route('/applicants/update/:id').put((req, res) => {
router.route('/applicants/:id').put((req, res) => {
  Applicant.findById(req.params.id, (err, applicant) => {
    if (!applicant) {
      return next(new Error('Could not load document'));
    } else {
      applicant.name = req.body.name;
      applicant.surname = req.body.surname;
      applicant.ssn = req.body.ssn;
      applicant.dob = req.body.dob;
      applicant.gender = req.body.gender;
      applicant.photo = req.body.photo;

      applicant
        .save()
        .then(applicant => {
          res.status(200).json({
            applicant: 'Updated successfully'
          });
        })
        .catch(err => {
          res.status(500).send('Update failed');
        });
    }
  });
});

/*
router.route('/applicants/delete/:id').get((req, res) => {
  Applicant.findByIdAndRemove(
    {
      _id: req.params.id
    },
    (err, applicant) => {
      if (err) {
        res.json(err);
      } else {
        res.json('Removed successfully');
      }
    }
  );
});
*/
app.use('/', router);

app.listen(3030, () => console.log('Express server running on port 3030'));
