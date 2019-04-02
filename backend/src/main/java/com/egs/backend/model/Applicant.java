package com.egs.backend.model;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name="applicants")
public class Applicant {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="id", updatable=false, nullable=false)
	private Long id;
	
	@Column @Size(max=50) private String name;
	@Column @Size(max=50) private String surname;
	@Column @Min(1) @Max(9999999) private long ssn;		// Max 7 digits
	@Column @Size(max=10) private String dob;
	@Column @Size(max=6) private String gender;
	@Column private String photo;
	@Column @CreationTimestamp private LocalDateTime created;
	@Column @UpdateTimestamp private LocalDateTime updated;
	
	public Applicant() {}
	
	public Applicant(@Size(max = 50) String name, @Size(max = 50) String surname, @Size(min = 1, max = 10) long ssn,
			@Size(max = 10) String dob, @Size(max = 6) String gender, String photo, LocalDateTime created, LocalDateTime updated) {
		super();
		this.name = name;
		this.surname = surname;
		this.ssn = ssn;
		this.dob = dob;
		this.gender = gender;
		this.photo = photo;
		this.created = created;
		this.updated = updated;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public long getSsn() {
		return ssn;
	}
	public void setSsn(long ssn) {
		this.ssn = ssn;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}	
	
	@Override
	public int hashCode() {
		return Objects.hash(this.id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Applicant other = (Applicant) obj;
		return Objects.equals(other.getId(), this.id);
	}

	@Override
	public String toString() {
		return "Applicant [id=" + id + ", name=" + name + ", surname=" + surname + ", ssn=" + ssn + ", dob=" + dob
				+ ", gender=" + gender + "]";
	}
	
}

