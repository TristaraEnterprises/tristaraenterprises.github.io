var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqApplicationProgress");
var q2 = document.getElementById("faqApplicationContact");
var q3 = document.getElementById("faqApplicationMoreSchools");


q1.onclick = function() {
	contentDiv.innerHTML = "<h2>Application FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />How is the progress on my application?</h3><p><span class='emphasize'>Answer: </span><br /><br />We will send you an email update every two days to let you know how the progress of your applicaation is going. In addition, if any major or time-sensitive development takes place, we will contact you right away.</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>Application FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />How can I contact you about my application?</h3><p><span class='emphasize'>Answer: </span><br /><br />Send us an <span class='oneContentBoxLink'><a href='emailus.html'>email</a></span>. We will respond as soon as possible, within 24 hours.</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>Application FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />Can I apply to more than five schools?</h3><p><span class='emphasize'>Answer: </span><br /><br />You can apply to more than five schools. However, because of the extra time and paperwork involved, there is an extra fee for each additional school.</p>";
	return false;
};
