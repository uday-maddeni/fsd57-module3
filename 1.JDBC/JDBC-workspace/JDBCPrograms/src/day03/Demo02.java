package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

//Inserting a record
public class Demo02 {
	public static void main(String[] args) {
		
		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;
		
		System.out.println("Enter Employee Id, Name, Salary, Gender, EmailId, Password");
		Scanner scan = new Scanner(System.in);
		int empId = scan.nextInt();
		String empName = scan.next();
		double salary = scan.nextDouble();
		String gender = scan.next();
		String emailId = scan.next();
		String password = scan.next();
		System.out.println();
		
		String insertQuery = "insert into emp values (?, ?, ?, ?, ?, ?)";
		
		try {
			
			pst = con.prepareStatement(insertQuery);			
			pst.setInt(1, empId);
			pst.setString(2, empName);
			pst.setDouble(3, salary);
			pst.setString(4, gender);
			pst.setString(5, emailId);
			pst.setString(6, password);			
			int result = pst.executeUpdate();
			
			if (result > 0) {
				System.out.println("Record Inserted!!!");
			} else {
				System.out.println("Failed to Insert the Record.");
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		finally {
			if (con != null) {
				try {
					pst.close();
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}		
	}
}
