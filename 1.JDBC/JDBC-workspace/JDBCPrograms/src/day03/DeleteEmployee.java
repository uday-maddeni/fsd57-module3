
package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class DeleteEmployee {
	
	public static void delete() {
		PreparedStatement pstmt = null;
		Connection con = null;
		con = DbConnection.getConnection();
		FetchAllEmployees.printAllEmployees();
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Employee id to delete :");
		int empno = sc.nextInt();
		
		String query = "delete from emp where empno = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1, empno);
			int cnt = pstmt.executeUpdate();
			if(cnt > 0) {
				System.out.println("Student record delted successfully !!");
				FetchAllEmployees.printAllEmployees();
			} else {
				System.out.println("Please enter a valid sid ");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			sc.close();
		}
	}
	
	public static void main(String[] args) {
		delete();
	}

}