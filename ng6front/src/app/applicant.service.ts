import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  // uri = 'http://localhost:3030/applicants';  // Node.js server
  uri = 'http://localhost:8080/applicants'; // Spring-boot server

  constructor(private http: HttpClient) {}

  getApplicants() {
    return this.http.get(`${this.uri}`);
  }

  getApplicantById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  addApplicant(name, surname, ssn, dob, gender, photo) {
    const applicant = {
      name: name,
      surname: surname,
      ssn: ssn,
      dob: dob,
      gender: gender,
      photo: photo
    };

    return this.http.post(`${this.uri}`, applicant);
  }

  editApplicant(id, name, surname, ssn, dob, gender, photo) {
    const applicantDetails = {
      name: name,
      surname: surname,
      ssn: ssn,
      dob: dob,
      gender: gender,
      photo: photo
    };

    return this.http.put(`${this.uri}/${id}`, applicantDetails);
  }
}
