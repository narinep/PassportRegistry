package com.egs.backend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.egs.backend.model.Applicant;
import com.egs.backend.service.ApplicantService;

@CrossOrigin(origins = { "http://localhost:4200" }, maxAge = 3000)
@RestController
public class ApplicantController {
	
	@Autowired
	ApplicantService applicantService;

	@GetMapping("/applicants")
	public List<Applicant> getAllApplicants() {
		return applicantService.getAllApplicants();
	}	
	
	@GetMapping("/applicants/{id}")
	public ResponseEntity<Applicant> getApplicantById(@PathVariable Long id) {
		return applicantService.getApplicantById(id);
	}
	
	@PostMapping("/applicants")
	public ResponseEntity<Applicant> addApplicant(@Valid @RequestBody Applicant applicant) {
		return applicantService.addApplicant(applicant);
	}
	
	@PutMapping("/applicants/{id}")
	public ResponseEntity<Applicant> updateApplicant(@PathVariable Long id,
											@Valid @RequestBody Applicant applicant) {
		return applicantService.updateApplicant(id, applicant);
	}	

}

