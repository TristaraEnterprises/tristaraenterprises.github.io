var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("newFreshmanDocumentsOnlineApplication");
var q2 = document.getElementById("newFreshmanDocumentsEssay");
var q3 = document.getElementById("newFreshmanDocumentsTranscripts");
var q4 = document.getElementById("newFreshmanDocumentsStandardizedTestScores");
var q5 = document.getElementById("newFreshmanDocumentsEnglishTestScores");
var q6 = document.getElementById("newFreshmanDocumentsBankStatements");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>New Freshman Application Documents</h2><p>Most universities have an online applicatin portal. We will apply for you, using the information you provide us. When we apply, we will need the application fee from you to submit to the school.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>New Freshman Application Documents</h2><p>Some universities require an essay of a certain length, while others may require a personal statement, and still others may require nothing. In whatever case, we will assist you with the requirements.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>New Freshman Application Documents</h2><p>Transcripts are required for applications. In almost every case, they must be translated into English and notarized by your school or another authorized notary, and then sent in a sealed envelope to the university. A small number of universities also accept electronic transfers, but these must also be translated.</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>New Freshman Application Documents</h2><p>Universities require American applicants to submit either SAT or ACT test scores; these tests usually cover math, reading, and problem solving, and sometimes cover history and science as well. Some schools require international students to also submit these scores. We will let you know if you are required to take these tests or not.</p><p>There are also a number of SAT II tests that cover certain areas such as chemistry or European history. Scoring well in these tests may be required if you plan to major in a certain area at a prestigious school; a high score may also give you college credit at other schools.</p><p>Finally, you may also be able to get college credit if you score high on an IB or AP test in a specific subject area such as economics or physics.</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>New Freshman Application Documents</h2><p>All universities require English proficiency before you can be admitted. The most widely accepted test score is the TOEFL. It is advised that you take this test early and have your scores ready when you begin to consult with us, since your TOEFL score helps us find the schools that are the best fit for you.</p>";
	return false;
};

q6.onclick = function() {
	contentDiv.innerHTML = "<h2>New Freshman Application Documents</h2><p>Most universities require bank statements or documentation of your parents' employment and salaries before they admit you, since they need to know whether you can pay the tuition and fees. This information may also be necessary when you apply for your student visa after you have been accepted by a school; the school will advise you on student visa procedures.</p>";
	return false;
};