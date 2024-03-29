var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("faqFeesBaseFee");
var q2 = document.getElementById("faqFeesRefund");
var q3 = document.getElementById("faqFeesExtraCharges");


q1.onclick = function() {
	contentDiv.innerHTML = "<h2>收费 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />基本费用包含什么?</h3><p><span class='emphasize'>Answer: </span><br /><br />基本费用包括您所申请的5所大学所需的一切手续费用：Skype咨询, 帮助修改个人陈述, 大学筛选, 填交申请表, 申请进程的消息反馈, 提交考试成绩, 关于您所需提交材料的详细说明，以及接受大学录取的后续手续。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>收费 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />可以退款吗？</h3><p><span class='emphasize'>Answer: </span><br /><br />没有任何一家机构可以百分之百保证您被录取。 我们尽我们所能帮您成功申请，但最不理想的情况下，如果申请失败了，我们会返还您<span class='emphasize'>30%</span> 的收费($750)。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>收费 FAQ</h2><h3><span class='emphasize'>Question:</span><br /><br />你为何要对额外服务项目收取额外费用？ 你为何不把所有的服务项目包含进基本费用里？</h3><p><span class='emphasize'>Answer: </span><br /><br />并不是所有的申请者都需要所有的服务项目。 为了让您不在申请学校上花费过多，我们不愿意在您不需要的服务上进行收费。因此，我们的基本费用包含了每个申请者所需的服务项目。 如果您需要额外的收费项目，我们另外给您提供，因此我们并没有将所有的服务包含进基本服务内。</p>";
	return false;
};
