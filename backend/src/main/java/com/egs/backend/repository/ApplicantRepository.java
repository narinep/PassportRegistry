package com.egs.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.egs.backend.model.Applicant;


public interface ApplicantRepository extends CrudRepository<Applicant, Long> {

}
