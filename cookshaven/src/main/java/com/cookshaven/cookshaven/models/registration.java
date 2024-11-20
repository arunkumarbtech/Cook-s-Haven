package com.cookshaven.cookshaven.models;


import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="registration")
public class registration {
    @Id
   @GeneratedValue(strategy =GenerationType.IDENTITY)
    private long id;

    private String cooks_name;
    private String gender;
     @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dob;
    private String fathers_name;
    private String email;
    private String phoneNumber;
    private String streetAddress;
   private String city;
   private String state;
   private String pincode;
   private String country;
   private String aadhar_number;
  private String pannumber;
  private String bankAccountName;
   private String accountNumber;
   private String ifscCode;
   private String branchName;
   private String kitchenName;
   private String abountMe;
   private String experience;
   private String workingDays;

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getPhoneNumber() {
    return phoneNumber;
}

public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
}

public String getStreetAddress() {
    return streetAddress;
}

public String getPannumber() {
    return pannumber;
}


public void setPannumber(String pannumber) {
    this.pannumber = pannumber;
}


public String getFathers_name() {
    return fathers_name;
}

public void setFathers_name(String fathers_name) {
    this.fathers_name = fathers_name;
}

public void setStreetAddress(String streetAddress) {
    this.streetAddress = streetAddress;
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



public String getBankAccountName() {
    return bankAccountName;
}

public void setBankAccountName(String bankAccountName) {
    this.bankAccountName = bankAccountName;
}

public String getAccountNumber() {
    return accountNumber;
}

public void setAccountNumber(String accountNumber) {
    this.accountNumber = accountNumber;
}

public String getIfscCode() {
    return ifscCode;
}

public void setIfscCode(String ifscCode) {
    this.ifscCode = ifscCode;
}

public String getBranchName() {
    return branchName;
}

public void setBranchName(String branchName) {
    this.branchName = branchName;
}

public String getKitchenName() {
    return kitchenName;
}

public void setKitchenName(String kitchenName) {
    this.kitchenName = kitchenName;
}

public String getAbountMe() {
    return abountMe;
}

public void setAbountMe(String abountMe) {
    this.abountMe = abountMe;
}

public String getExperience() {
    return experience;
}

public void setExperience(String experience) {
    this.experience = experience;
}

public String getWorkingDays() {
    return workingDays;
}

public void setWorkingDays(String workingDays) {
    this.workingDays = workingDays;
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

    public String getCooks_name() {
        return cooks_name;
    }

    public void setCooks_name(String cooks_name) {
        this.cooks_name = cooks_name;
    }
    
    
}