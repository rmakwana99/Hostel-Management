package com.rahulvivek.hostel.controller;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.servlet.http.Part;
import com.rahulvivek.hostel.db.RectorData;


@WebServlet("/add_rector")
public class AddRector extends HttpServlet {
	private static final long serialVersionUID = 1L;

	static int rid=10;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		System.out.println("start");
		InputStream rphoto=null;
		String name=request.getParameter("rector_name");
		String dob=(request.getParameter("rector_dob"));
		String address=request.getParameter("rector_add");
		long mobile=Long.parseLong(request.getParameter("rector_numb"));
		String email=request.getParameter("rector_email");
		String password=request.getParameter("rector_pass");
		Part filePart =  request.getPart("rector_photo");
		if (filePart != null) {
			// prints out some information for debugging
			System.out.println(filePart.getName());
			System.out.println(filePart.getSize());
			System.out.println(filePart.getContentType());
			
			// obtains input stream of the upload file
			rphoto = filePart.getInputStream();
		}
		String dateOfJoin=request.getParameter("doj");
		
		System.out.println(name+" "+dob+" "+address+" "+mobile+" "+email+" "+password+" "+rphoto+" "+dateOfJoin);
	
		int i=RectorData.saveRector(rid, name, dob, address,  mobile, email, password, dateOfJoin, rphoto);
	
		if(i>0) {
			response.sendRedirect("index.html");
		}
	}

}
