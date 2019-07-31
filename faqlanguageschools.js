var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqLanguageSchoolEnglish");
var q2 = document.getElementById("faqLanguageSchoolWhereLive");
var q3 = document.getElementById("faqLanguageSchoolHowLongTilTransfer");


q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />How good does my English have to be?</h3><p><span class='emphasize'>Answer: </span><br /><br />Language schools accept students at various levels, from absolute beginner up through advanced.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Where will I live?</h3><p><span class='emphasize'>Answer: </span><br /><br />Some language schools, especially those that are parts of colleges or universities, have dormitories available for studeents. In other cases, the school may assist you in locating a host family or an apartment.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />How long does it take to get good enough to transfer to a university?</h3><p><span class='emphasize'>Answer: </span><br /><br />This, of course, depends on your level when you begin. If yo uare only missing a few points for a qualifying TOEFL score, you will probably only need one semester of intensive study. If you are starting as a beginner or with a very low score, however, it may take around two years.</p><p>If you are conditionally admitted to a college program, but you are required to take English classes first because your TOEFL score was not high enough, you will most likely not need to take the TOEFL again. Instead, you school will probably tell you that when you finish a certain level course with a high enough grade, you will then be ready to enter normal classes. Some schools may even let you take one or two normal classes at the same time as your English classes.</p>";
	return false;
};

