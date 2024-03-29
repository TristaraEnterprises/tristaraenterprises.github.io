var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("languageSchoolStudentOnlineApplication");
var q2 = document.getElementById("languageSchoolStudentDocumentsBankStatements");
var q3 = document.getElementById("languageSchoolStudentsOtherDocuments");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>语言学校申请材料</h2><p>一些语言学校有着非常简单的在线申请流程，只需要您的一些基本信息。 其他的学校需要您护照的复印件，英语能力证明，您需要选课的类型，您需要达到的学习目的以及其他的一些信息。 不论是哪一种申请类型，我们都会帮助您完成这一系列的申请手续。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>语言学校申请材料</h2><p>在您申请签证之前，您所申请的语言学校需要您出示一张银行对账单，证明您的家庭可以支持您在美国留学的开销。 有些学校不仅需要银行的证明，还需要支付押金或是全部的学费作为入学条件。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>语言学校申请材料</h2><p>取决于您申请的学校，申请的材料可能不同。 如果您想申请大学里的强化语言学习课程，为期一到两个学期，然后转入大学开始选课，这类情况下，您的申请可能要比申请一般的独立语言学院要困难一些。</p>";
	return false;
};
