var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqApplicationProgress");
var q2 = document.getElementById("faqApplicationContact");
var q3 = document.getElementById("faqApplicationMoreSchools");


q1.onclick = function() {
	contentDiv.innerHTML = "<h2>申请 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />如何知道我申请状态的进展？</h3><p><span class='emphasize'>Answer: </span><br /><br />我们会每隔一天给您发邮件来告知您的申请进展。 此外，如果需立即处理的申请状况，我们会立即通知你。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>申请 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />我该如何联系你们？</h3><p><span class='emphasize'>Answer: </span><br /><br />给我们发<span class='oneContentBoxLink'><a href='emailus_cn.html'>邮件</a></span>。 我们会在24小时内联系您。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>申请 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />我可以申请超过5所学校吗？</h3><p><span class='emphasize'>Answer: </span><br /><br />您可以申请超过5所学校，超过5所学校的申请需要收取额外的手续费用。</p>";
	return false;
};
