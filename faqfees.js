var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqFeesBaseFee");
var q2 = document.getElementById("faqFeesRefund");
var q3 = document.getElementById("faqFeesExtraCharges");


q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Fees FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />What does the base fee include?</h3><p><span class='emphasize'>Answer: </span><br /><br />The base fee includes everything you need to apply to five schoolsS: Skype consultation, essay assistance, university search, filling out and submitting applications, updating progress, submission of test scores, detailed instructions for paperwork you need to gather, and accepting an offer for admission.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Fees FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Is the fee refundable?</h3><p><span class='emphasize'>Answer: </span><br /><br />It's impossible to guarantee that you will be accepted to a university. Although we do everything possible to get you accepted, in the unfortunate event that you do not get accepted, we will refund <span class='emphasize'>30%</span> of the basic fee to you ($750).</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Fees FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Why do you charge extra for extra services? Why don't you include everything in the base fee?</h3><p><span class='emphasize'>Answer: </span><br /><br />Not every student requires every service. In order to keep your cost as low as possible, we don't want to charge people for a service that they don't need. Therefore, we charge our basic fee for all of the necessary services that everyone should use. If anyone wants extra services, they can pay for those services separately, so that others who don't want or need those services don't have to pay for them.</p>";
	return false;
};
