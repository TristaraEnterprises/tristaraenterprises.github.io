var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqGraduateEnglish");
var q2 = document.getElementById("faqGraduateWhen");
var q3 = document.getElementById("faqGraduateHowLong");
var q4 = document.getElementById("faqGraduateThesis");
var q5 = document.getElementById("faqGraduateFunding");
var q6 = document.getElementById("faqGraduateWhereLive");
var q7 = document.getElementById("faqGraduateContactProf");
var q8 = document.getElementById("faqGraduateTests");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />How good does my English have to be?</h3><p><span class='emphasize'>Answer: </span><br /><br />Each school has a minimum or average TOEFL score for international students. Generally, the more prestigious the school, the higher a score you will need.</p><p>However, if you have a strong application and the only thing that is weak is your English score, some schools may admit you conditionally, that is, they will admit you to their school for one semester or year and require you to take only ESL classes. If you can pass the ESL classes, then you will be admitted as a regular student for the following semester.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />When should I start the application process?</h3><p><span class='emphasize'>Answer: </span><br /><br />It's best to begin applying at least a year before you want to begin classes. Many graduate programs start in the fall, with application deadlines in the previous January or even December. Therefore, you should begin the application process in the summer or, at the latest, the fall in the year before you want to begin classes.</p><p>Some programs do allow graduate students to begin at other times during the year. If you want ot find such a program, let us know.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />How long does a master's degree or Ph.D. take?</h3><p><span class='emphasize'>Answer: </span><br /><br />The general rule of thumb is that a masters degree program takes between one to two years and a Ph.D. program takes at least three years, but often four or more.</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Do I have to write a thesis for a master's degree?</h3><p><span class='emphasize'>Answer: </span><br /><br />Many masters degree programs have more than one option for a culminating project or experience. Although doing research and writing a thesis is the traditional option, some programs give you the alternative of doing a small research paper in a research class and completing some other type of project in lieu of a thesis. Other programs may allow you to take a comprehensive exam instead of writing a thesis.</p><p>Regardless of the choices available in your program, if you want to pursue a Ph.D. after your master's degree, it is recommended that you complete a thesis so that you gain experience in doing complex research and so that you have a sample of your work to submit when you apply to Ph.D. programs.</p>";
	return false;
};

q5.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Will I get funding for graduate school?</h3><p><span class='emphasize'>Answer: </span><br /><br />Graduate programs may offer a variety of funding options to students. You may be able to get a job as a graduate research assistant or a teaching assistant. These jobs may pay you a salary or, commonly, you may have your tuition for one semester or year remitted.</p><p>Another type of funding graduate students may receive is a research grant. Research grants may be used to remit tuition, or they may remit tuition and include a small monthly stipend paid to you as a salary. The availability of these types of grants depends on whether your department has enough funds.</p>";
	return false;
};

q6.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Where will I live?</h3><p><span class='emphasize'>Answer: </span><br /><br />Many universities offer graduate students housing in their dormitories or apartments owned by the school. You must pay a housing fee. Alternatively, you may search for an apartment or a host family on your own.</p>";
	return false;
};

q7.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Should I contact professors before applying? How?</h3><p><span class='emphasize'>Answer: </span><br /><br />If you have questions about the program or the specific research a professor is conducting, or if you want to ask a aprofessor to consider being your advisor, you can contact them before or while applying. Usually studnets contact professors by email.</p>";
	return false;
};

q8.onclick = function() {
	contentDiv.innerHTML = "<h2>Graduate Student FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Do I need to take a test like the GRE or MCAT?</h3><p><span class='emphasize'>Answer: </span><br /><br />There are many standardized tests that graduate programs may require, depending on your field of study. The most general test is the GRE, and the majority of graduate programs require it. You may also need to take a specialized test if you are applying to medical school, law school, or a program heavy in mathematics, for example.</p>";
	return false;
};