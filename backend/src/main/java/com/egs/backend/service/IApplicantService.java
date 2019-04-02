package com.egs.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.egs.backend.model.Applicant;

public interface IApplicantService {
	List<Applicant> getAllApplicants();
	ResponseEntity<Applicant> getApplicantById(Long applicantId);
	ResponseEntity<Applicant> addApplicant(Applicant applicant);
	ResponseEntity<Applicant> updateApplicant(Long applicantId, Applicant appplicant);
}
