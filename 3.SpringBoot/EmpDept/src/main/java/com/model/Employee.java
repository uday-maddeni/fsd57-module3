package com.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Employee {

    @Id
    @GeneratedValue
    private int empId;
    private String empName;
    private double salary;
    private String gender;
    private Date doj;
    private String country;
    private String emailId;
    private String password;

    public Employee() {
    }

    public Employee(String empName, double salary, String gender, Date doj, String country, String emailId, String password) {
        this.empName = empName;
        this.salary = salary;
        this.gender = gender;
        this.doj = doj;
        this.country = country;
        this.emailId = emailId;
        this.password = password;
    }
    
    public Employee(int empId, String empName, double salary, String gender, Date doj, String country, String emailId, String password) {
        this.empId = empId;
    	this.empName = empName;
        this.salary = salary;
        this.gender = gender;
        this.doj = doj;
        this.country = country;
        this.emailId = emailId;
        this.password = password;
    }

    public int getEmpId() {
        return empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDoj() {
        return doj;
    }

    public void setDoj(Date doj) {
        this.doj = doj;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", salary=" + salary + ", gender=" + gender
				+ ", doj=" + doj + ", country=" + country + ", emailId=" + emailId + ", password=" + password + "]";
	}
    
    
}