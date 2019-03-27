import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  uri = 'http://localhost:3030/applicants';

  constructor(private http: HttpClient) {}

  getApplicants() {
    return this.http.get(`${this.uri}`);
  }

  getApplicantById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  addApplicant(name, surname, ssn, dob, gender) {
    const applicant = {
      name: name,
      surname: surname,
      ssn: ssn,
      dob: dob,
      gender: gender
    };
    return this.http.post(`${this.uri}/add`, applicant);
  }

  updateApplicant(id, name, surname, ssn, dob, gender) {
    const applicant = {
      name: name,
      surname: surname,
      ssn: ssn,
      dob: dob,
      gender: gender
    };
    return this.http.put(`${this.uri}/update/${id}`, applicant);
  }

  deleteApplicant(id) {
    return this.http.delete(`${this.uri}${id}`);
  }
}
