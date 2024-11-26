package com.cookshaven.cookshaven.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "registration")
public class registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Lob
    private byte[] kitchen_profile;
    private String cooksname;
    private String gender;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dob;
    private String father_name;
    private String email;
    private String phone_number;
    private String street_address;
    private String city;
    private String state;
    private String pincode;
    private String country;
    private String aadhar_number;
    private String pannumber;
    private String bank_account_name;
    private String account_number;
    private String ifsc_code;
    private String bank_name;
    private String branch_name;
    private String kitchen_name;
    private String abount_me;
    private String experience;
    private String workingdays;

    public String getWorkingdays() {
        return workingdays;
    }

    public void setWorkingdays(String workingdays) {
        this.workingdays = workingdays;
    }

    public byte[] getKitchen_profile() {
        return kitchen_profile;
    }

    public void setKitchen_profile(byte[] kitchen_profile) {
        this.kitchen_profile = kitchen_profile;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }
    
    
    public String getFather_name() {
        return father_name;
    }

    public void setFather_name(String father_name) {
        this.father_name = father_name;
    }

    public String getPannumber() {
        return pannumber;
    }

    public void setPannumber(String pannumber) {
        this.pannumber = pannumber;
    }


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }
     

    public String getStreet_address() {
        return street_address;
    }

    public void setStreet_address(String street_address) {
        this.street_address = street_address;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAadhar_number() {
        return aadhar_number;
    }

    public void setAadhar_number(String aadhar_number) {
        this.aadhar_number = aadhar_number;
    }

    public String getBank_account_name() {
        return bank_account_name;
    }

    public void setBank_account_name(String bank_account_name) {
        this.bank_account_name = bank_account_name;
    }    public String getAccount_number() {
        return account_number;
    }

    public void setAccount_number(String account_number) {
        this.account_number = account_number;
    }
    public String getIfsc_code() {
        return ifsc_code;
    }

    public void setIfsc_code(String ifsc_code) {
        this.ifsc_code = ifsc_code;
    }

    public String getBank_name() {
        return bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }

    public String getKitchen_name() {
        return kitchen_name;
    }

    public void setKitchen_name(String kitchen_name) {
        this.kitchen_name = kitchen_name;
    }


    public String getAbount_me() {
        return abount_me;
    }

    public void setAbount_me(String abount_me) {
        this.abount_me = abount_me;
    }


    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCooksname() {
        return cooksname;
    }

    public void setCooksname(String cooksname) {
        this.cooksname = cooksname;
    }

}
