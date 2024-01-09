package com.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dto.Employee;


@WebServlet("/Profile")
public class Profile extends HttpServlet {
	private static final long serialVersionUID = 1L;
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		HttpSession session = request.getSession(false);
		Employee emp = (Employee) session.getAttribute("emp");
		
		//RequestDispatcher rd = request.getRequestDispatcher("EmpHomePage");
		//rd.include(request, response);
		
		//OR
		
		request.getRequestDispatcher("EmpHomePage.jsp").include(request, response);
		
		out.println("<table border='2' align='center'>");

		out.println("<tr>");
		out.println("<th>EmpId</th>");
		out.println("<th>EmpName</th>");
		out.println("<th>Salary</th>");
		out.println("<th>Gender</th>");
		out.println("<th>Email-Id</th>");
		out.println("<th>Password</th>");
		out.println("</tr>");

		out.println("<tr>");
		out.println("<td>" + emp.getEmpId()   + "</td>");
		out.println("<td>" + emp.getEmpName() + "</td>");
		out.println("<td>" + emp.getSalary()  + "</td>");
		out.println("<td>" + emp.getGender()  + "</td>");
		out.println("<td>" + emp.getEmailId() + "</td>");
		out.println("<td>" + emp.getPassword()+ "</td>");
		out.println("</tr>");

		out.println("</table>");
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
				doGet(request, response);
	}

}