import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicantService } from '../../applicant.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private applicantService: ApplicantService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      name: '',
      surname: '',
      ssn: ['', Validators.required],
      dob: '',
      gender: ''
    });
  }

  addApplicant(name, surname, ssn, dob, gender) {
    this.applicantService
      .addApplicant(name, surname, ssn, dob, gender)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

  ngOnInit() {}
}
