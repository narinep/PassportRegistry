import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ApplicantService } from '../../applicant.service';
import { Applicant } from '../../models/Applicant';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: String;
  applicant: any = {};
  updateForm: FormGroup;

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute,
    private snakBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: '',
      surname: '',
      ssn: ['', Validators.required],
      dob: '',
      gender: ''
    });
  }

  ngOnInit() {}
}
