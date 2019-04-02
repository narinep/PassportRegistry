package com.egs.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.egs.backend.model.Applicant;
import com.egs.backend.repository.ApplicantRepository;

@Service
public class ApplicantService implements IApplicantService {
	
	@Autowired
	private ApplicantRepository applicantRepository;

	@Override
	public List<Applicant> getAllApplicants() {
		List<Applicant> applicants = new ArrayList<>();
		applicantRepository.findAll().forEach(applicants::add);
		return applicants;
	}

	@Override
	public ResponseEntity<Applicant> getApplicantById(Long applicantId) {
		Optional<Applicant> applicant = applicantRepository.findById(applicantId);
		if (applicant.isPresent()) {
			return ResponseEntity.ok().body(applicant.get());
		} else {
			return ResponseEntity.notFound().build(); 
		}	
	}

	@Override
	public ResponseEntity<Applicant> addApplicant(Applicant applicant) {
		Applicant createdApplicant = applicantRepository.save(applicant);
		return ResponseEntity.ok().body(createdApplicant);
	}

	@Override
	public ResponseEntity<Applicant> updateApplicant(Long applicantId, Applicant applicantDetails) {
		Optional<Applicant> applicant = applicantRepository.findById(applicantId);
		if (applicant.isPresent()) {
			Applicant updatedApplicant = applicant.get(); 
			updatedApplicant.setName(applicantDetails.getName());
			updatedApplicant.setSurname(applicantDetails.getSurname());
			updatedApplicant.setSsn(applicantDetails.getSsn());
			updatedApplicant.setDob(applicantDetails.getDob());
			updatedApplicant.setGender(applicantDetails.getGender());
			updatedApplicant.setPhoto(applicantDetails.getPhoto());
			applicantRepository.save(updatedApplicant);
			return ResponseEntity.noContent().build();			
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}

