import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  addApplicant(name, surname, ssn, dob, gender) {
    this.applicantService
      .addApplicant(name, surname, ssn, dob, gender)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      alert('Invalid Form');
      return;
    }

    // TODO: Custom validation if needed

    const applicant = this.registerForm.value;
    // alert(JSON.stringify(this.applicant));
    this.addApplicant(
      applicant.name,
      applicant.surname,
      applicant.ssn,
      applicant.dob,
      applicant.gender
    );
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: '',
      surname: '',
      ssn: ['', Validators.required],
      dob: '',
      gender: ''
    });
  }
}
