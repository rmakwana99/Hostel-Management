
/*------------ Rector Registration Validation ----------------*/

function isDate(dateVal) {
    
	var currVal=document.getElementById(dateVal).value;
	if (currVal == '')
    	return false;

    //Declare Regex  
    var rxDatePattern = /^(\d{1,2})(\/|-)([a-zA-Z]{3})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null) 
    	return false;
    var dtDay = parseInt(dtArray[1]);
    var dtMonth = dtArray[3];
    var dtYear = parseInt(dtArray[4]);

    // need to change to lowerCase because switch is
    // case sensitive
    switch (dtMonth.toLowerCase()) {
        case 'jan':
            dtMonth = '01';
            break;
        case 'feb':
            dtMonth = '02';
            break;
        case 'mar':
            dtMonth = '03';
            break;
        case 'apr':
            dtMonth = '04';
            break;
        case 'may':
            dtMonth = '05';
            break;
        case 'jun':
            dtMonth = '06';
            break;
        case 'jul':
            dtMonth = '07';
            break;
        case 'aug':
            dtMonth = '08';
            break;
        case 'sep':
            dtMonth = '09';
            break;
        case 'oct':
            dtMonth = '10';
            break;
        case 'nov':
            dtMonth = '11';
            break;
        case 'dec':
            dtMonth = '12';
            break;
    }

    // convert date to number
    dtMonth = parseInt(dtMonth);

    if (isNaN(dtMonth)) return false;
    else if (dtMonth < 1 || dtMonth > 12) return false;
    else if (dtDay < 1 || dtDay > 31) return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 || (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap)) return false;
    }

    var myDate = new Date(currVal);
    var today = new Date();
    if(myDate>today)
    	return false;
    return true;
}

function rectorRegistration(form_rec_registration) {
	var name = form_rec_registration.rec_name.value;
	var email = form_rec_registration.rec_email.value;
	var dob = form_rec_registration.rec_dob.value;
	var address = form_rec_registration.rec_add.value;
	var phone = form_rec_registration.rec_num.value;
	var password = form_rec_registration.rec_pass.value;
	var photo = form_rec_registration.rec_photo.value;
	var cpassword = form_rec_registration.rec_cpass.value;

	var nameRegex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var addressRegx = /^[0-9a-zA-Z@#$&/,()-]+$/;
	var messageRegex = new RegExp(
			/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gim);
	var phoneRegex = /^[0-9]+$/;
	var passwordRegex = /^[0-9a-zA-Z!^@#$%&*()]+$/;
	
	/*--------------------- Name -----------------------*/
	if (name == "") {
		inlineMsg('rec_name', 'You must enter name.', 4);
		return false;
	}
	if (!name.match(nameRegex)) {
		inlineMsg('rec_name', 'You have entered an invalid name.', 4);
		return false;
	}

	/*--------------------- DOB -----------------------------*/
	if (dob == "") {
		inlineMsg('rec_dob', 'You must enter Birthdate.', 4);
		return false;
	}
	if (!isDate('rec_dob')) {
		inlineMsg('rec_dob', 'Please enter Valid date.', 4);
		return false;
	}

	/*----------------------- Address ----------------------*/
	if (address == "") {
		inlineMsg('rec_add', 'You must enter Address.', 4);
		return false;
	}
	if (!address.match(addressRegx)) {
		inlineMsg('rec_add', 'You have entered an invalid Address.', 4);
		return false;
	}

	/*----------------------- Contact number ----------------*/

	if (phone == "") {
		inlineMsg('rec_num', 'You must enter Contact Number.', 4);
		return false;
	}
	if (phone.length != 10) {
		inlineMsg('rec_num', 'You must enter valid Contact Number.', 4);
		return false;
	}
	if (!phone.match(phoneRegex)) {
		inlineMsg('rec_num', 'You have entered an invalid contact number.', 4);
		return false;
	}

	/*---------------------- Email ---------------------------*/
	if (email == "") {
		inlineMsg('rec_email', 'You must enter your email.', 4);
		return false;
	}
	if (!email.match(emailRegex)) {
		inlineMsg('rec_email', 'You have entered an invalid email.', 4);
		return false;
	}

	/*----------------------- Password ------------------------*/
	if (password == "") {
		inlineMsg('rec_pass', 'You must enter Password.', 4);
		return false;
	}
	if (password.length <= 6) {
		inlineMsg('rec_pass', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!password.match(passwordRegex)) {
		inlineMsg('rec_pass', 'You have entered an invalid password.', 4);
		return false;
	}
	if (cpassword == "") {
		inlineMsg('rec_cpass', 'You must enter Password.', 4);
		return false;
	}
	if (cpassword.length <= 6) {
		inlineMsg('rec_cpass', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!cpassword.match(passwordRegex)) {
		inlineMsg('rec_cpass', 'You have entered an invalid password.', 4);
		return false;
	}
	if (password != cpassword) {
		inlineMsg('rec_cpass', 'Password does not match.', 4);
		return false;
	}
	return true;
}

/*------------ Student Registration Validation ----------------*/

function studentRegistration(form_stu_registration) {

	var name = form_stu_registration.stu_name.value;
	var age = form_stu_registration.stu_age.value;
	var dob = form_stu_registration.stu_dob.value;
	var doj = form_stu_registration.stu_doj.value;
	var address = form_stu_registration.stu_add.value;
	var college = form_stu_registration.stu_colg.value;
	var phone = form_stu_registration.stu_numb.value;
	var email = form_stu_registration.stu_email.value;
	var password = form_stu_registration.stu_pass.value;
	var cpassword = form_stu_registration.stu_cpass.value;

	var nameRegex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	/*
	 * var messageRegex = new RegExp( /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gim);
	 */
	var addressRegx = /^[0-9a-zA-Z@#$&/,()-]+$/;
	var phoneRegex = /^[0-9]+$/;
	var passwordRegex = /^[0-9a-zA-Z!^@#$%&*()]+$/;

	/*----------------------- Name -------------------------*/
	if (name == "") {
		inlineMsg('stu_name', 'You must enter name.', 4);
		return false;
	}
	if (!name.match(nameRegex)) {
		inlineMsg('stu_name', 'You have entered an invalid name.', 4);
		return false;
	}

	/*------------------------ Age ---------------------------*/
	if (age == "") {
		inlineMsg('stu_age', 'You must enter Age.', 4);
		return false;
	}
	if (age.length != 2) {
		inlineMsg('stu_age', 'Enter valid Age.', 4);
		return false;
	}
	if (!age.match(phoneRegex)) {
		inlineMsg('stu_age', 'You have entered an invalid age.', 4);
		return false;
	}

	/*------------------------- DOB ------------------------*/
	if (dob == "") {
		inlineMsg('stu_dob', 'You must enter Birthdate.', 4);
		return false;
	}
	if (!isDate('stu_dob')) {
		inlineMsg('stu_dob', 'Please enter Valid date.', 4);
		return false;
	}

	/*------------------------- DOJ --------------------------*/
	if (doj == "") {
		inlineMsg('stu_doj', 'You must enter Date Of Joining.', 4);
		return false;
	}
	if (!doj.match(dateRegex)) {
		inlineMsg('rec_doj', 'Enter date in given formate.', 4);
		return false;
	}

	/*------------------------- Address ------------------------*/
	if (address == "") {
		inlineMsg('stu_add', 'You must enter Address.', 4);
		return false;
	}
	if (!address.match(addressRegx)) {
		inlineMsg('stu_add', 'You have entered an invalid message.', 4);
		return false;
	}

	/*---------------------------- College ----------------------*/
	if (college == "") {
		inlineMsg('stu_colg', 'You must enter College.', 4);
		return false;
	}
	if (college.match(addressRegx)) {
		inlineMsg('stu_colg', 'You have entered an invalid college name.', 4);
		return false;
	}

	/*--------------------------- Contact number ----------------------*/

	if (phone == "") {
		inlineMsg('stu_numb', 'You must enter Contact Number.', 4);
		return false;
	}
	if (phone.length != 10) {
		inlineMsg('stu_numb', 'You must enter valid Contact Number.', 4);
		return false;
	}
	if (!phone.match(phoneRegex)) {
		inlineMsg('rec_num', 'You have entered an invalid contact number.', 4);
		return false;
	}

	/*------------------------- Email --------------------------*/
	if (email == "") {
		inlineMsg('stu_email', 'You must enter your email.', 4);
		return false;
	}
	if (!email.match(emailRegex)) {
		inlineMsg('stu_email', 'You have entered an invalid email.', 4);
		return false;
	}
	/*---------------------------- Password ----------*/
	if (password == "") {
		inlineMsg('rec_pass', 'You must enter Password.', 4);
		return false;
	}
	if (password.length <= 6) {
		inlineMsg('stu_pass', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!password.match(passwordRegex)) {
		inlineMsg('stu_pass', 'You have entered an invalid password.', 4);
		return false;
	}
	if (cpassword == "") {
		inlineMsg('stu_cpass', 'You must enter Password.', 4);
		return false;
	}
	if (cpassword.length <= 6) {
		inlineMsg('stu_cpass', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!cpassword.match(passwordRegex)) {
		inlineMsg('stu_cpass', 'You have entered an invalid password.', 4);
		return false;
	}
	if (password != cpassword) {
		inlineMsg('stu_cpass', 'Password does not match.', 4);
		return false;
	}
	return true;
}

/*------------------------ Rector (Index) Page Login Validation ---------------*/

function rectorLogin(form_rec) {

	var email = form_rec.rector_un.value;
	var password = form_rec.rector_pw.value;

	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var passwordRegex = /^[0-9a-zA-Z!^@#$%&*()]+$/;

	/*------------------------------- Email -----------------------------*/
	if (email == "") {
		inlineMsg('rector_un', 'You must enter your email.', 4);
		return false;
	}
	if (!email.match(emailRegex)) {
		inlineMsg('rector_un', 'You have entered an invalid email.', 4);
		return false;
	}

	/*------------------------- Password --------------------------------*/
	if (password == "") {
		inlineMsg('rector_pw', 'You must enter Password.', 4);
		return false;
	}
	if (password.length <= 6) {
		inlineMsg('rector_pw', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!password.match(passwordRegex)) {
		inlineMsg('rector_pw', 'You have entered an invalid password.', 4);
		return false;
	}
	return true;
}

/*--------------------- Student (Index) Page Login Validation ---------------*/

function studentLogin(form_stu) {

	var email = form_stu.student_un.value;
	var password = form_stu.student_pw.value;

	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var passwordRegex = /^[0-9a-zA-Z!^@#$%&*()]+$/;

	/*-------------------------- Email --------------------------------*/
	if (email == "") {
		inlineMsg('student_un', 'You must enter your email.', 4);
		return false;
	}
	if (!email.match(emailRegex)) {
		inlineMsg('student_un', 'You have entered an invalid email.', 4);
		return false;
	}

	/*------------------------------ Password ------------------------------*/
	if (password == "") {
		inlineMsg('student_pw', 'You must enter Password.', 4);
		return false;
	}
	if (password.length <= 6) {
		inlineMsg('student_pw', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!password.match(passwordRegex)) {
		inlineMsg('student_pw', 'You have entered an invalid password.', 4);
		return false;
	}
	return true;
}

/*------------------------ Contact Us Page Validation ---------------*/

function contactUs(form_cus) {

	var email = form_cus.contactus_un.value;
	var message = form_cus.contactus_msg.value;

	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var messageRegx =  new RegExp( /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gim);

	/*-------------------------------- Email --------------------------------*/
	if (email == "") {
		inlineMsg('contactus_un', 'You must enter your email.', 4);
		return false;
	}
	if (!email.match(emailRegex)) {
		inlineMsg('contactus_un', 'You have entered an invalid email.', 4);
		return false;
	}

	/*-------------------------- message --------------------------------*/
	if (message == "") {
		inlineMsg('contactus_msg', 'You must enter Some Message.', 4);
		return false;
	}
	if (message.match(messageRegx)) {
		inlineMsg('contactus_msg', 'You have entered an invalid message.', 4);
		return false;
	}
	return true;
}

/*------------------------ Forgot Password Page Validation ---------------*/

function resetPwd(form_rp) {

	var email = form_rp.reset_un.value;
	var password = form_rp.reset_pwd.value;
	var cpassword = form_rp.reset_cpwd.value;

	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var passwordRegex = /^[0-9a-zA-Z!^@#$%&*()]+$/;

	/*------------------------- Email --------------------------------*/
	if (email == "") {
		inlineMsg('reset_un', 'You must enter your email.', 4);
		return false;
	}
	if (!email.match(emailRegex)) {
		inlineMsg('reset_un', 'You have entered an invalid email.', 4);
		return false;
	}

	/*------------------------------ Password -------------------------*/
	if (password == "") {
		inlineMsg('reset_pwd', 'You must enter Password.', 4);
		return false;
	}
	if (password.length <= 6) {
		inlineMsg('reset_pwd', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!password.match(passwordRegex)) {
		inlineMsg('reset_pw', 'You have entered an invalid password.', 4);
		return false;
	}
	if (cpassword == "") {
		inlineMsg('reset_cpwd', 'You must enter Password.', 4);
		return false;
	}
	if (cpassword.length <= 6) {
		inlineMsg('reset_cpwd', 'Password length must be 6 to 25 character.', 4);
		return false;
	}
	if (!cpassword.match(passwordRegex)) {
		inlineMsg('reset_cpwd', 'You have entered an invalid password.', 4);
		return false;
	}
	if (password != cpassword) {
		inlineMsg('reset_cpwd', 'Password does not match.', 4);
		return false;
	}
	return true;
}

// START OF MESSAGE SCRIPT //

var MSGTIMER = 20;
var MSGSPEED = 5;
var MSGOFFSET = 3;
var MSGHIDE = 3;

/*--------------------------- Inline Function Message----------------------*/
function inlineMsg(target, string, autohide) {
	var msg;
	var msgcontent;
	if (!document.getElementById('msg')) {
		msg = document.createElement('div');
		msg.id = 'msg';
		msgcontent = document.createElement('div');
		msgcontent.id = 'msgcontent';
		document.body.appendChild(msg);
		msg.appendChild(msgcontent);
		msg.style.filter = 'alpha(opacity=0)';
		msg.style.opacity = 0;
		msg.alpha = 0;
	} else {
		msg = document.getElementById('msg');
		msgcontent = document.getElementById('msgcontent');
	}
	msgcontent.innerHTML = string;
	msg.style.display = 'block';
	var msgheight = msg.offsetHeight;
	var targetdiv = document.getElementById(target);
	targetdiv.focus();
	var targetheight = targetdiv.offsetHeight;
	var targetwidth = targetdiv.offsetWidth;
	var topposition = topPosition(targetdiv) - ((msgheight - targetheight) / 2);
	var leftposition = leftPosition(targetdiv) + targetwidth + MSGOFFSET;
	msg.style.top = topposition + 'px';
	msg.style.left = leftposition + 'px';
	clearInterval(msg.timer);
	msg.timer = setInterval("fadeMsg(1)", MSGTIMER);
	if (!autohide) {
		autohide = MSGHIDE;
	}
	window.setTimeout("hideMsg()", (autohide * 1000));
}

// ---------------------hide the form alert---------------------- //
function hideMsg(msg) {
	var msg = document.getElementById('msg');
	if (!msg.timer) {
		msg.timer = setInterval("fadeMsg(0)", MSGTIMER);
	}
}

// ------------------- face the message box ----------------------//
function fadeMsg(flag) {
	if (flag == null) {
		flag = 1;
	}
	var msg = document.getElementById('msg');
	var value;
	if (flag == 1) {
		value = msg.alpha + MSGSPEED;
	} else {
		value = msg.alpha - MSGSPEED;
	}
	msg.alpha = value;
	msg.style.opacity = (value / 100);
	msg.style.filter = 'alpha(opacity=' + value + ')';
	if (value >= 99) {
		clearInterval(msg.timer);
		msg.timer = null;
	} else if (value <= 1) {
		msg.style.display = "none";
		clearInterval(msg.timer);
	}
}

// calculate the position of the element in relation to the left of the browser
// //
function leftPosition(target) {
	var left = 0;
	if (target.offsetParent) {
		while (1) {
			left += target.offsetLeft;
			if (!target.offsetParent) {
				break;
			}
			target = target.offsetParent;
		}
	} else if (target.x) {
		left += target.x;
	}
	return left;
}

// calculate the position of the element in relation to the top of the browser
// window //
function topPosition(target) {
	var top = 0;
	if (target.offsetParent) {
		while (1) {
			top += target.offsetTop;
			if (!target.offsetParent) {
				break;
			}
			target = target.offsetParent;
		}
	} else if (target.y) {
		top += target.y;
	}
	return top;
}
