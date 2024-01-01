
package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class UpdateEmployee {
	
	public static void update() {
		PreparedStatement pstmt = null;
		Connection con = null;
		con = DbConnection.getConnection();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employee  empno to Update");
		int empno = sc.nextInt();
		
		GetEmployeeById.getEmployee(empno);
		
		System.out.println("Enter Employee ename, email to update");
		sc.nextLine();
		String ename = sc.nextLine();
		String email = sc.next();
		
		String query = "update emp set ename = ? , email = ? where empno = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setString(1, ename);
			pstmt.setString(2, email);
			pstmt.setInt(3, empno);
			
			System.out.println("==================================================================");
			int cnt = pstmt.executeUpdate();
			if(cnt > 0) {
				System.out.println("Employe Record Updated Successfully!!");
				GetEmployeeById.getEmployee(empno);
			} else {
				System.out.println("Update failed !!");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			sc.close();
		}
	}


	public static void main(String[] args) {
		update();
	}

}


