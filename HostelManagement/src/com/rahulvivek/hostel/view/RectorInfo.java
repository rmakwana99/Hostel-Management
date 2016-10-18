package com.rahulvivek.hostel.view;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.rahulvivek.hostel.db.Rector;
import com.rahulvivek.hostel.db.RectorData;
import com.rahulvivek.hostel.db.Student;
import com.rahulvivek.hostel.db.StudentData;

@WebServlet("/rector_info")
public class RectorInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(request.getParameter("rid"));
		Rector ri = RectorData.getRector(Integer.parseInt(request.getParameter("rid")));
		
		System.out.println(ri.toString());
		
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		
/*--------------------------- Header Here ---------------------------*/
		
		request.getRequestDispatcher("hostel_header.html").include(request, response);
		
/*----------------- Rector Details Division -----------------*/
		
		pw.print("<div id=\"rector_info\">");
		pw.print("<label>"+ri.getName()+"</label><br/>");
		pw.print("<label>"+ri.getAddress()+"</label><br/>");
		pw.print("<label>"+ri.getEmail()+"</label><br/>");
		pw.print("<label>"+ri.getDob()+"</label><br/>");
		pw.print("<label>"+ri.getPhoneno()+"</label><br/>");
		//pw.print("<img src=\""+ri.getPhoto()+"\"/><br/>");
		
		
		pw.print("</div>");
		
/*------------------- Student Details Division ----------------------*/
		List<Student> sList = StudentData.getAllStudent();
		pw.print("<div id=\"student_info\">");
		
		pw.print("<table>");
		pw.print("<tr><th>Student Id</th>");
		pw.print("<th>Name</th>");
		pw.print("<th>Date Of Birth</th>");
		pw.print("<th>Age</th>");
		pw.print("<th>College</th>");
		pw.print("<th>Email Id</th>");
		pw.print("<th>Date Of Joining</th>");
		pw.print("<th>Room No</th>");
		pw.print("<th>fees</th></tr>");
		
		pw.print("<tr><td></th>");
		pw.print("</table>");
		pw.print("</div>");
		
/*----------------------Footer Here--------------------*/
		request.getRequestDispatcher("hostel_footer.html").include(request, response);
	}

}
