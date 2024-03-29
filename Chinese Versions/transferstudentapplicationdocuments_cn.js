var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("transferStudentDocumentsOnlineApplication");
var q2 = document.getElementById("transferStudentDocumentsTranscripts");
var q3 = document.getElementById("transferStudentDocumentsEnglishTestScores");
var q4 = document.getElementById("transferStudentDocumentsBankStatements");
var q5 = document.getElementById("transferStudentDocumentsPortfolios");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>转校生申请材料</h2><p>大部分大学有在线申请门户网站。 我们将会收集您的信息来为您申请。 当我们申请时，我们需要将您的申请费递交给学校。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>转校生申请材料</h2><p>申请需要成绩单。 几乎每一种情况下，成绩单都需要被翻译成英文然后在学校或公证机构进行公证， 并密封好在信封里寄往所申请的学校。 一小部分大学接受电子传输文件，但必须是翻译过的文件。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>转校生申请材料</h2><p>所有的大学都需要您出示英语成绩。 最广泛被接受的英语考试是TOEFL。因为您的TOEFL成绩直接关系到选择您最合适的大学，所以强烈建议您在决定联系我们之前准备好您的TOEFL成绩。</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>转校生申请材料</h2><p>大部分的大学在录取您之前需要银行对账单或您父母的从业或收入证明以及相关的材料，以此来证明您是否可以负担留学费用。这些材料在您被学校录取后还需作为申请学生签证的必须材料，您的学校会指导您签证的申请流程。</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>转校生申请材料</h2><p>对于需转入像艺术，建筑，电脑绘图，音乐或是其他的诸如您的个人才能可以从您提供的作品中展示出来的专业，在您的申请过程中可能会要求您提交您的一份作品小样。 您所申请的大学可以以此决定您是否有能力进入一定等级的课程进行深造。</p>";
	return false;
};