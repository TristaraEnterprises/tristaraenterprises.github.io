var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("graduateStudentDocumentsOnlineApplication");
var q2 = document.getElementById("graduateStudentDocumentsEssay");
var q3 = document.getElementById("graduateStudentDocumentsTranscripts");
var q4 = document.getElementById("graduateStudentDocumentsStandardizedTestScores");
var q5 = document.getElementById("graduateStudentDocumentsEnglishTestScores");
var q6 = document.getElementById("graduateStudentDocumentsBankStatements");
var q7 = document.getElementById("graduateStudentDocumentsResearchPlans");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>Most universities have an online application portal. We will apply for you, using the information you provide us.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>Some universities require an essay of a certain length, while others may require a personal statement, and still others may require nothing. In whatever case, we will assist you with the requirements.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>Transcripts are required for applications. In almost every case, they must be translated into English and notarized by your school or another authorized notary, and then sent in a sealed envelope to the university. A small number of universities also accept electronic transfers, but these must also be translated.</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>Depending on your program and area of study, you may have to take one or more standardized tests as part of the application process. Common examples are the GRE, MCAT, or LSAT.</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>All universities require English proficiency before you can be admitted. The most widely accepted test score is the TOEFL. It is advised that you take this test early and have your scores ready when you begin to consult with us, since your TOEFL score helps us find the schools that are the best fit for you.</p>";
	return false;
};

q6.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>Most universities require bank statements or documentation of your parents' employment and salaries before they admit you, since they need to know whether you can pay the tuition and fees. This information may also be necessary when you apply for your student visa after you have been accepted by a school; the school will advise you on student visa procedures.</p>";
	return false;
};

q7.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student Application Documents</h2><p>Many masters degree programs and almost all Ph.D. level programs require you to submit a plan or idea for research when you apply. It is helpful for you to choose a school that has faculty that are interested in your area, since you will need one of them to be your advisor when you begin your thesis or dissertation.</p>";
	return false;
};