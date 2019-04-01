import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicantService } from '../applicant.service';
import { ConfirmDlgService } from '../confirm-dlg/confirm-dlg.service';

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
    private fb: FormBuilder,
    private confirmDlgService: ConfirmDlgService
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

    this.confirmDlgService
      .confirm('Please Confirm', 'Do you really want to save ?')
      .then(confirmed => {
        if (confirmed) {
          const applicant = this.registerForm.value;

          this.addApplicant(
            applicant.name,
            applicant.surname,
            applicant.ssn,
            applicant.dob,
            applicant.gender
          );
        }
      })
      .catch(() => {});
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
