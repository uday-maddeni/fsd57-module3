
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="com.dto.Employee"%>
    
    <!-- To Use JSTL Core Tags -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>GetEmployeeById</title>
</head>
<body>

	<jsp:include page="HRHomePage.jsp" />

			<table border="2" align="center">

			<tr>
			<th>EmpId</th>
			<th>EmpName</th>
			<th>Salary</th>
			<th>Gender</th>
			<th>Email-Id</th>
			</tr>
			
			
		<c:forEach var="emp" items="${empList}">
		
		<tr>
			<td> ${ emp.empId } </td>
			<td> ${ emp.empName } </td>
			<td> ${ emp.salary } </td>
			<td> ${ emp.gender } </td>
			<td> ${ emp.emailId } </td>
		</tr>
		
		</c:forEach>


			</table>

</body>
</html>



