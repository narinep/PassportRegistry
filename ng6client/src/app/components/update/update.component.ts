import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../applicant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {}
}
