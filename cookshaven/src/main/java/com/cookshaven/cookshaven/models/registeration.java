package com.cookshaven.cookshaven.models;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="registration")



public class registeration {
    @Id
   @ GeneratedValue(strategy =GenerationType.IDENTITY)
    private long id;

    private String cooksName;
    private String gender;
    private Date dob;
    private String FathersName;
    private String email;
    private String phoneNumber;
    private String streetAddress;
   private String city;
   private String state;
   private String pincode;
   private String country;
   private String aadharNumber;
   private String panNUmber;
   private String bankAccountName;
   private String accountNumber;
   private String ifscCode;
   private String branchName;
   private String kitchenName;
   private String abountMe;
   private String experience;
   private String workingDays;
   public String getFathersName() {
    return FathersName;
}

public void setFathersName(String fathersName) {
    FathersName = fathersName;
}

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

public String getAadharNumber() {
    return aadharNumber;
}

public void setAadharNumber(String aadharNumber) {
    this.aadharNumber = aadharNumber;
}

public String getPanNUmber() {
    return panNUmber;
}

public void setPanNUmber(String panNUmber) {
    this.panNUmber = panNUmber;
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


    public String getCooksName() {
        return cooksName;
    }

    public void setCooksName(String cooksNname) {
        this.cooksName = cooksNname;
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
    
    
}