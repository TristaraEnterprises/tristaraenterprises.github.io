var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("languageSchoolStudentClasses");
var q2 = document.getElementById("languageSchoolStudentHousing");
var q3 = document.getElementById("languageSchoolStudentFood");
var q4 = document.getElementById("languageSchoolStudentDriving");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student Life in America</h2><p>In order to qualify for an F1 student visa, you will need to enroll in a language school that offers at least 18 hours of class a week (in many cases this amounts to 24 classes, since classes are around 50 minutes long). If you take intensive classes to prepare for entry into college, they will often be structured similarly to college classes, with homework, quizzes, projects, tests, and grades to guage your progress. If you take more of a conversation or daily life type of course, your classes may be more relaxed.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student Life in America</h2><p>If your language school is part of a university or is a very large independent langauge school, you may be able to eat in the school cafeteria. Otherwise, you will have to arrange food for yourself on your own. Some dormitories do not have cooking areas, so keep that in mind when you decide where you want to live. If you live with a host family, you will most likely eat breakfast and dinner with them. If you live by yourself and plan to cook for yourself, you may not be able to find all of the ingredients you usually use at a normal American grocery store, but you have a couple options. You can search for a specialty store that sells imported products, or you can buy products online. Of course, you can always bring cooking ingredients with you when you first arrive.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student Life in America</h2><p>Small universities often have one cafeteria that serves breakfast, lunch, and dinner to students with a meal card. You will probably be required to buy a meal card if you live in a dormitory without a kitchen. Larger universities often have several cafeterias, coffee shops, or restaurants available to students.</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>Language School Student Life in America</h2><p>You may be able to get a driver's license and buy a car if you can pass the tests; there is a written and an actual driving test to pass before getting a license in America. If you do plan to buy a car and get a driver's license, keep in mind the cost of mandatory driver's insurance and gasoline when you create your budget, and consider what you will do with your car after you finish studying. It may be difficult to sell on short notice.</p>";
	return false;
};
