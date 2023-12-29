package day02;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class InsertRecord {

	public static void main(String[] args) {
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		System.out.println("Enter empno, ename, sal, gender, email, password");
		Scanner sc = new Scanner(System.in);
		int empno = sc.nextInt();
		String ename = sc.next();
		double sal = sc.nextDouble();
		String gender = sc.next(), email = sc.next(), password = sc.next();
		
		String url = "jdbc:mysql://localhost:3306/fsd57";
		
	    String query = "insert into emp values ("+empno+",'"+ ename+"',"+ sal+",'"+ gender+"','"+ email+"','"+ password+"')";
	    
	    String query1 = "select * from emp";
	    
	    try {
	    	Class.forName("com.mysql.cj.jdbc.Driver");
	    	con = DriverManager.getConnection(url,"root","root");
	    	stmt = con.createStatement();
	    	int count = stmt.executeUpdate(query);
	    	if(count > 0) {
	    		System.out.println("Record inserted successfully!!");
	    		System.out.println("-----------------------------------------");
	    		rs = stmt.executeQuery(query1);
	    		while(rs.next()) {
	    			System.out.println(rs.getInt(1)+" "+rs.getString(2)+" "+rs.getDouble(3)+""+rs.getString(4)+" "+rs.getString(5)+" "+rs.getString(6));
	    		}
	    	} else {
	    		System.out.println("Record not inserted !");
	    	}
	    } catch(ClassNotFoundException | SQLException e) {
	    	e.printStackTrace();
	    } finally {
	    	sc.close();
	    }
	}

}
