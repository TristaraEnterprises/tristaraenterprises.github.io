var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqLanguageSchoolEnglish");
var q2 = document.getElementById("faqLanguageSchoolWhereLive");
var q3 = document.getElementById("faqLanguageSchoolHowLongTilTransfer");


q1.onclick = function() {
	contentDiv.innerHTML = "<h2>语言学习生 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />我的英语要达到什么要求？</h3><p><span class='emphasize'>Answer: </span><br /><br />语言学校接受不同程度的语言学习生，从零基础到高级均可。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>语言学习生 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />来美国后，我住在哪合适？</h3><p><span class='emphasize'>Answer: </span><br /><br />一部分的语言学校，尤其是隶属于大学的那部分语言学校提供宿舍给学生。 其他的情况下，学校会帮助您安顿到寄宿家庭或者公寓。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>语言学习生 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />要花多久可以正式转入大学进行学习？</h3><p><span class='emphasize'>Answer: </span><br /><br />这个取决于您开始语言学习的英语等级。 如果您只是在托福成绩上差了几分，花上一个学期的强化学习应该足够了。如果您是从零开始，并且托福成绩不理想，这个情况下您可能要花上两年左右的语言学习。</p><p>如果您是有条件地被录取入大学，但需要上英语课程来拟补托福成绩的不足，您很可能还需要再次进行托福考试。 或者，您的学校可能会让您参加正常选课如果您高分通过一定等级的英语课程。 有些大学甚至可以让您在修英语课的同时选上一两门大学课程。</p>";
	return false;
};

