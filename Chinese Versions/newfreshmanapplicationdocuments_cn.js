var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("newFreshmanDocumentsOnlineApplication");
var q2 = document.getElementById("newFreshmanDocumentsEssay");
var q3 = document.getElementById("newFreshmanDocumentsTranscripts");
var q4 = document.getElementById("newFreshmanDocumentsStandardizedTestScores");
var q5 = document.getElementById("newFreshmanDocumentsEnglishTestScores");
var q6 = document.getElementById("newFreshmanDocumentsBankStatements");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>新入生申请材料</h2><p>大部分大学有在线申请门户网站。 我们将会收集您的信息来为您申请。 当我们申请时，我们需要将您的申请费递交给学校。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>新入生申请材料</h2><p>有些大学需要一篇一定长度的有关论题的论文，有些学校需要一份个人陈述，有些学校则可能都不要这些。 不管是哪种情况，我们都会帮助您达到申请要求。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>新入生申请材料</h2><p>申请需要成绩单。 几乎每一种情况下，成绩单都需要被翻译成英文然后在学校或公证机构进行公证， 并密封好在信封里寄往所申请的学校。 一小部分大学接受电子传输文件，但必须是翻译过的文件。</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>新入生申请材料</h2><p>在美国，大学要求申请者提交SAT或者ACT考试成绩; 这些考试往往包括了数学，阅读，解决问题，有些情况还包含有历史和科学之类的内容。 有些学校也需要国际学生提交这些考试成绩。我们会告诉您您是否被要求提供这类考试的成绩。</p><p>还有一类SAT II考试包含了诸如化学或欧洲历史的范畴。在这类考试中取得好成绩有助于您在有名望的学校里选择相关专业; 取得高分也可能帮助您在一些学校里获得学分。</p><p>最后，如果在IB或AP考试取得高分，您可能会获得相关专业诸如经济或物理的大学学分。</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>新入生申请材料</h2><p>所有的大学都需要您出示英语成绩。 最广泛被接受的英语考试是TOEFL。因为您的TOEFL成绩直接关系到选择您最合适的大学，所以强烈建议您在决定联系我们之前准备好您的TOEFL成绩。</p>";
	return false;
};

q6.onclick = function() {
	contentDiv.innerHTML = "<h2>新入生申请材料</h2><p>大部分的大学在录取您之前需要银行对账单或您父母的从业或收入证明以及相关的材料，以此来证明您是否可以负担留学费用。这些材料在您被学校录取后还需作为申请学生签证的必须材料，您的学校会指导您签证的申请流程。</p>";
	return false;
};