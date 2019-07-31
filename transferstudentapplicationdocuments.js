var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("transferStudentDocumentsOnlineApplication");
var q2 = document.getElementById("transferStudentDocumentsTranscripts");
var q3 = document.getElementById("transferStudentDocumentsEnglishTestScores");
var q4 = document.getElementById("transferStudentDocumentsBankStatements");
var q5 = document.getElementById("transferStudentDocumentsPortfolios");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Transfer Student Application Documents</h2><p>Most universities have an online applicatin portal. We will apply for you, using the information you provide us.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Transfer Student Application Documents</h2><p>Transcripts are required for applications. In almost every case, they must be translated into English and notarized by your school or another authorized notary, and then sent in a sealed envelope to the university. A small number of universities also accept electronic transfers, but these must also be translated.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Transfer Student Application Documents</h2><p>All universities require English proficiency before you can be admitted. The most widely accepted test score is the TOEFL. It is advised that you take this test early and have your scores ready when you begin to consult with us, since your TOEFL score helps us find the schools that are the best fit for you.</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>Transfer Student Application Documents</h2><p>Most universities require bank statements or documentation of your parents' employment and salaries before they admit you, since they need to know whether you can pay the tuition and fees. This information may also be necessary when you apply for your student visa after you have been accepted by a school; the school will advise you on student visa procedures.</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>Transfer Student Application Documents</h2><p>For transfer students who are entering programs such as art, architecture, computer graphics, music, or another program where you are developing a skill that can be demonstrated in a portfolio, you may be asked to submit work samples with your application. This is so that the school you are applying to can determine whether you have the pre-requisite skills to enter their program at the level you are applying at.</p>";
	return false;
};