import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Applicant } from '../applicant.model';
import { ApplicantService } from '../applicant.service';

import * as $ from 'jquery';
import 'datatables.net';
// import 'datatables.net-dt';
import 'datatables.net-bs4';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  applicants: Applicant[];
  selectedApplicant: Applicant;
  dataTable: any;

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private chRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchApplicants();
  }

  fetchApplicants() {
    this.applicantService.getApplicants().subscribe((data: Applicant[]) => {
      this.applicants = data;

      this.chRef.detectChanges();

      const table: any = $('table');
      this.dataTable = table.DataTable();

      console.log(this.applicants);
    });
  }

  onSelect(applicant) {
    // this.router.navigate([`/edit/${applicant._id}`]);  // MongoDB
    this.router.navigate([`/edit/${applicant.id}`]); // PostgreSQL
    this.selectedApplicant = applicant;
  }
}
