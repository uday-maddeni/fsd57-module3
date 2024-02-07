package com.dao;
import java.util.List;
import org.mindrot.jbcrypt.BCrypt;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.model.Employee;
import com.ts.config.TwilioConfig;

@Service
public class EmployeeDao {

	@Autowired
	EmployeeRepository employeeRepository;


    @Autowired
    private TwilioConfig twilioConfig;
	
	@Autowired
	private JavaMailSender mailSender;

	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}

	public Employee getEmployeeById(int employeeId) {
		return employeeRepository.findById(employeeId).orElse(null);
	}

	public Employee getEmployeeByName(String employeeName) {
		return employeeRepository.findByName(employeeName);
	}
	
	
	public Employee employeeLogin(String emailId, String password) {
	    Employee employee = employeeRepository.findByEmailId(emailId);
	    System.out.println(employee.getEmailId());
	    System.out.println(employee.getPassword());
	    System.out.println(employee.getEmpName());
	    System.out.println(password);
        if (employee != null && BCrypt.checkpw(password, employee.getPassword())) {
        	System.out.println("done");
             return employee;
        } else {
        	System.out.println("not done");
            return null;
        }
    }
	

	public Employee addEmployee(Employee employee) {
		String otp = generateOtp();
        employee.setOtp(otp);
        
        String encryptedPwd = hashPassword(employee.getPassword());
        employee.setPassword(encryptedPwd);
        System.out.println("encrypted password : "+encryptedPwd);
		System.out.println("------------------------------------------");
		System.out.println("Number recieved from frontend :"+employee.getPhoneNumber());
		System.out.println("------------------------------------------");

		// Save the employee
		Employee savedEmployee = employeeRepository.save(employee);
		
		System.out.println("------------------------------------------");
		System.out.println("Number recieved from database :"+savedEmployee.getPhoneNumber());
		System.out.println("------------------------------------------");

		// Send a welcome email
		sendWelcomeEmail(savedEmployee);
		
		// Send OTP via Twilio
		sendOtpViaTwilio(savedEmployee);

		return savedEmployee;
	}
	
    // Hash the password using BCrypt
    private String hashPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

	private void sendWelcomeEmail(Employee employee) {
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(employee.getEmailId());
		message.setSubject("Welcome to our website");
		message.setText("Dear " + employee.getEmpName() + ",\n\n"
				+ "Thank you for registering ");

		mailSender.send(message);
	}

	public Employee updateEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	public void deleteEmployeeById(int employeeId) {
		employeeRepository.deleteById(employeeId);
	}
	
    private void sendOtpViaTwilio(Employee employee) {
        String phoneNumber = employee.getPhoneNumber();
        twilioConfig.sendOtp(phoneNumber, employee.getOtp());
    }

    private String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

}

