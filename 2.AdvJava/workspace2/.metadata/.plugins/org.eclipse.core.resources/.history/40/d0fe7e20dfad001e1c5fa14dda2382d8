package com.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.EmployeeDAO;
import com.dto.Employee;

@WebServlet("/GetAllEmps")
public class GetAllEmps extends HttpServlet {

       
	
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		EmployeeDAO empDao = new EmployeeDAO();		
		List<Employee> empList = empDao.getAllEmployees();
		
		RequestDispatcher rd = request.getRequestDispatcher("HRHomePage");
		rd.include(request, response);
		
		out.println("<center>");
		
		if (empList != null) {
			
			out.println("<table border=2>");
			
			out.println("<tr>");
			out.println("<th>EmpId</th>");
			out.println("<th>EmpName</th>");
			out.println("<th>Salary</th>");
			out.println("<th>Gender</th>");
			out.println("<th>Email-Id</th>");
			out.println("</tr>");
			
			for (Employee emp : empList) {
				out.println("<tr>");
				out.println("<td>" + emp.getEmpId()   + "</td>");
				out.println("<td>" + emp.getEmpName() + "</td>");
				out.println("<td>" + emp.getSalary()  + "</td>");
				out.println("<td>" + emp.getGender()  + "</td>");
				out.println("<td>" + emp.getEmailId() + "</td>");
				out.println("</tr>");
			}
			
			out.println("</table>");			
		
		} else {			
			out.println("<h1 style='color:red;'>Unable to Fetch the Employee Record(s)!!!</h1>");	
		}
		out.println("</center>");
	}
		
		
	

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}