package day03;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.db.DbConnection;

public class Demo01 {
	public static void main(String[] args) {
		
		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;
		ResultSet rs = null;
		
		String selectQuery = "select * from emp";
		
		try {
			
			pst = con.prepareStatement(selectQuery);
			rs = pst.executeQuery();
			
			while (rs.next()) {
				System.out.print(rs.getInt(1) + " " + rs.getString(2) + " ");
				System.out.print(rs.getDouble(3) + " " + rs.getString(4) + " ");
				System.out.println(rs.getString(5) + " " + rs.getString(6));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		finally {
			if (con != null) {
				try {
					rs.close();
					pst.close();
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}		
	}
}
