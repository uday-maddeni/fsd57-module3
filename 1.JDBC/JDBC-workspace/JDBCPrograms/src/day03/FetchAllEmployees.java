
package day03;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.db.DbConnection;

//Fetch Employee Data: select * from emp
public class FetchAllEmployees {
	
	public static void printAllEmployees() {
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		String query = "Select * from emp";

		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DbConnection.getConnection();

			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			System.out.println("===========================================================");
			System.out.println("                   Employee Details");
			System.out.println("===========================================================");
			while (rs.next()) {
				System.out.print(rs.getInt(1) + " " + rs.getString(2) + " ");
				System.out.print(rs.getDouble(3) + " " + rs.getString(4) + " ");
				System.out.println(rs.getString(5) + " " + rs.getString(6));
			}
			System.out.println("===========================================================");
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		
		printAllEmployees();
	}
}