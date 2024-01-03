package com.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/RegistrationServlet")
public class RegistrationServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		
		String ename = request.getParameter("ename");
		String sal = request.getParameter("sal");
		String gender = request.getParameter("gender");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		pw.println("<html>");
		pw.println("<body bgcolor='Yellow' text='black'>");
		pw.println("<center>");
		pw.println("<h1> Registration Details </h1>");
		pw.println("<p>Ename :"+ename+"</p>");
		pw.println("<p>Sal :"+sal+"</p>");
		pw.println("<p>Gender :"+gender+"</p>");
		pw.println("<p>Email :"+email+"</p>");
		pw.println("<p>Password :"+password+"</p>");
		pw.println("</center>");
		pw.println("</body>");
		pw.println("</html>");
		
		System.out.println("ename:"+ename);
		System.out.println("sal:"+sal);
		System.out.println("gender:"+gender);
		System.out.println("email:"+email);
		System.out.println("password:"+password);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
