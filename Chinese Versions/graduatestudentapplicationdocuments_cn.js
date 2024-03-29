var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("graduateStudentDocumentsOnlineApplication");
var q2 = document.getElementById("graduateStudentDocumentsEssay");
var q3 = document.getElementById("graduateStudentDocumentsTranscripts");
var q4 = document.getElementById("graduateStudentDocumentsStandardizedTestScores");
var q5 = document.getElementById("graduateStudentDocumentsEnglishTestScores");
var q6 = document.getElementById("graduateStudentDocumentsBankStatements");
var q7 = document.getElementById("graduateStudentDocumentsResearchPlans");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>大部分大学有在线申请门户网站。 我们将会收集您的信息来为您申请。 当我们申请时，我们需要将您的申请费递交给学校。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>有些大学需要一篇一定长度的有关论题的论文，有些学校需要一份个人陈述，有些学校则可能都不要这些。 不管是哪种情况，我们都会帮助您达到申请要求。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>申请需要成绩单。 几乎每一种情况下，成绩单都需要被翻译成英文然后在学校或公证机构进行公证， 并密封好在信封里寄往所申请的学校。 一小部分大学接受电子传输文件，但必须是翻译过的文件。</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>取决于您的学习研究的领域，研究生院会有不同的标准化考试的要求。 最普遍的考试是GRE，MCAT或LSAT.</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>所有的大学都需要您出示英语成绩。 最广泛被接受的英语考试是TOEFL。因为您的TOEFL成绩直接关系到选择您最合适的大学，所以强烈建议您在决定联系我们之前准备好您的TOEFL成绩。</p>";
	return false;
};

q6.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>大部分的大学在录取您之前需要银行对账单或您父母的从业或收入证明以及相关的材料，以此来证明您是否可以负担留学费用。这些材料在您被学校录取后还需作为申请学生签证的必须材料，您的学校会指导您签证的申请流程。</p>";
	return false;
};

q7.onclick = function() {
	contentDiv.innerHTML = "<h2>研究生申请材料</h2><p>大部分的硕士项目和几乎所有的博士项目都需要您提交一个研究计划。因为您的毕业答辩需要指导教授的审核，所以最好可选择一个对您的研究领域感兴趣的教授进行申请。</p>";
	return false;
};