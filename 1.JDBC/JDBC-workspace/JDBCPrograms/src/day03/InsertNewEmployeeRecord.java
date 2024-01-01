
package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class InsertNewEmployeeRecord {
	
	public static void insertRecordPrepareStatement() {
		PreparedStatement pstmt = null;
		Connection con = null;
		con = DbConnection.getConnection();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employee empno, ename, sal, gender, email, password");
		int empno = sc.nextInt();
		sc.nextLine();
		String ename = sc.nextLine();
		double sal = sc.nextDouble();
		String gender = sc.next(), email = sc.next(), password = sc.next();
		
		String query = "insert into emp values(?,?,?,?,?,?)";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1, empno);
			pstmt.setString(2, ename);
			pstmt.setDouble(3, sal);
			pstmt.setString(4, gender);
			pstmt.setString(5, email);
			pstmt.setString(6, password);
			int cnt = pstmt.executeUpdate();
			if(cnt > 0) {
				System.out.println("Employee Record inserted successfully !!");

				FetchAllEmployees.printAllEmployees();
			} else {
				System.out.println("Employee Record not inserted successfully !!");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			sc.close();
		}
	}
	
	public static void main(String[] args) {
		insertRecordPrepareStatement() ;
	}
}
