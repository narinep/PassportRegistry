import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Applicant } from '../applicant.model';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  applicant: any = {};
  updateForm: FormGroup;

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  createForm() {
    this.updateForm = this.fb.group({
      name: '',
      surname: '',
      ssn: ['', Validators.required],
      dob: '',
      gender: ''
    });
  }

  updateApplicant(name, surname, ssn, dob, gender) {
    this.applicantService
      .editApplicant(this.id, name, surname, ssn, dob, gender)
      .subscribe(() => {
        alert(
          'Applicant updated successfully: ' + JSON.stringify(this.applicant)
        );
        this.router.navigate(['/list']);
      });
  }

  onSubmit() {
    if (!this.updateForm.valid) {
      alert('Invalid Form');
      return;
    }

    // TODO: Custom validation if needed

    this.updateApplicant(
      this.updateForm.value.name,
      this.updateForm.value.surname,
      this.updateForm.value.ssn,
      this.updateForm.value.dob,
      this.updateForm.value.gender
    );
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

  ngOnInit() {
    this.createForm();

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.applicantService.getApplicantById(this.id).subscribe(data => {
        this.applicant = data;
        this.updateForm.get('name').setValue(this.applicant.name);
        this.updateForm.get('surname').setValue(this.applicant.surname);
        this.updateForm.get('ssn').setValue(this.applicant.ssn);
        this.updateForm.get('dob').setValue(this.applicant.dob);
        this.updateForm.get('gender').setValue(this.applicant.gender);
      });
    });
  }
}
