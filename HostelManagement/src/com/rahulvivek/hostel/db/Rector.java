package com.rahulvivek.hostel.db;

import java.io.InputStream;

public class Rector {

	private int rid;
	private String name;
	private String dob;
	private String collage;
	private String address;
	private long phoneno;
	private String email;
	private String password;
	private String dateOfJoin;
	private String dateOfLeave;
	private InputStream photo;

	public Rector() {
		
	}
	
	public Rector(int rid) {
		
	}

	public Rector(int rid, String name, String dob, String collage, String address, long phoneno, String email,
			String password, String dateOfJoin, String dateOfLeave,InputStream photo) {
		this.rid = rid;
		this.name = name;
		this.dob = dob;
		this.collage = collage;
		this.address = address;
		this.phoneno = phoneno;
		this.email = email;
		this.password = password;
		this.dateOfJoin = dateOfJoin;
		this.dateOfLeave = dateOfLeave;
		this.photo=photo;
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getCollage() {
		return collage;
	}

	public void setCollage(String collage) {
		this.collage = collage;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDateOfJoin() {
		return dateOfJoin;
	}

	public void setDateOfJoin(String dateOfJoin) {
		this.dateOfJoin = dateOfJoin;
	}

	public String getDateOfLeave() {
		return dateOfLeave;
	}

	public void setDateOfLeave(String dateOfLeave) {
		this.dateOfLeave = dateOfLeave;
	}

	public InputStream getPhoto() {
		return photo;
	}

	public void setPhoto(InputStream photo) {
		this.photo = photo;
	}
}
