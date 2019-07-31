var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("languageSchoolStudentOnlineApplication");
var q2 = document.getElementById("languageSchoolStudentDocumentsBankStatements");
var q3 = document.getElementById("languageSchoolStudentsOtherDocuments");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Application Documents</h2><p>Some language schools have very simple online applications that only require basic information about you. Others have applications that require copies of your passport, your English background, the types of courses you want to take, your goals, and other information. We will fill out the forms for you for whatever school(s) you choose to apply for.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Application Documents</h2><p>Before you can get the documents needed to apply for your visa, the language school will require at least a bank statement from you showing proof that you or your family or a sponsor has the ability to pay for your study and living expenses in the USA. Some schools require not only a bank statement, but a deposit or payment of the tuition in full.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Application Documents</h2><p>Depending on the school, other documents may be required. If you are planning to enter an intensive English language program at a university for one or two semesters and then transfer to regular college courses, for example, your application may be more rigorous than that for an independent language school not affiliated with a university.</p>";
	return false;
};
