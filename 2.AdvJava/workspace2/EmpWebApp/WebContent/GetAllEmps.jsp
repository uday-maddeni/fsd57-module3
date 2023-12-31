<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" import="java.util.List, com.dto.Employee"%>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>GetAllEmps</title>
</head>
<body>

	<jsp:include page="HRHomePage.jsp" />

	<% List<Employee> empList = (List<Employee>) request.getAttribute("empList"); %>

	<table border="2" align="center">

		<tr>
			<th>EmpId</th>
			<th>EmpName</th>
			<th>Salary</th>
			<th>Gender</th>
			<th>Email-Id</th>
		</tr>

		<%  for (Employee emp : empList) { %>
		<tr align="center">
			<td> <%= emp.getEmpId()   %> </td>
			<td> <%= emp.getEmpName() %> </td>
			<td> <%= emp.getSalary()  %> </td>
			<td> <%= emp.getGender()  %> </td>
			<td> <%= emp.getEmailId() %> </td>
		</tr>
		<% } %>

	</table>

</body>
</html>

