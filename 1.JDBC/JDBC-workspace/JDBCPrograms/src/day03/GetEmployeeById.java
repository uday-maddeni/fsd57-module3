package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.db.DbConnection;

public class GetEmployeeById {
	
	public static void getEmployee(int empno) {
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		Connection con = null;
		con = DbConnection.getConnection();
		
		String query = "select * from emp where empno = ?";
	    
		
		try {
			con = DbConnection.getConnection();
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1, empno);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				System.out.println("Employee details with id :"+empno);
				do {
					System.out.print(rs.getInt(1)+"   ");
					System.out.print(rs.getString(2)+"   ");
					System.out.print(rs.getDouble(3)+"   ");
					System.out.print(rs.getString(4)+"   ");
					System.out.print(rs.getString(5)+"   ");
					System.out.println(rs.getString(6));
				}while(rs.next());
			} else {
				System.out.println("Please enter a valid Student Id");
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} 
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employ empno");
		int empno = sc.nextInt();
		
		getEmployee(empno);
		sc.close();
	}

}

