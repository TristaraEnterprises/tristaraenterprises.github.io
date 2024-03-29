var contentDiv = document.getElementById("oneContentBoxRightSideContent");
var q1 = document.getElementById("languageSchoolStudentClasses");
var q2 = document.getElementById("languageSchoolStudentHousing");
var q3 = document.getElementById("languageSchoolStudentFood");
var q4 = document.getElementById("languageSchoolStudentDriving");

q1.onclick = function() {
	contentDiv.innerHTML = "<h2>语言生的大学生活</h2><p>为了获签F1学生签证，您需要选择的语言学校应提供至少一周18小时的课程（大部分情况下，一节课50分钟，一周大约24节课）。 如果您为了入大学而选择强化班，课程模式通常与大学课程相似，有家庭作业，测验，课程设计，考试，并通过评分来衡量您的学习进展。 如果您选择偏向于对话或日常生活类型的课程，您的课堂任务可能会较为轻松一些。</p>";
	return false;
};

q2.onclick = function() {
	contentDiv.innerHTML = "<h2>语言生的大学生活</h2><p>如果您的语言学校是隶属于大学的一部分或是一所规模很大的独立语言学院，您可以在校内就餐。 否则的话您就得自行解决就餐问题。 有些宿舍没有配置厨房，所以在您决定住哪之前请想清楚。 如果您决定找寄宿家庭， 您可能会与寄宿家庭一同吃早晚饭。 如果您决定自己住并自己做饭生活，您很可能在美国超市里找不到合适的做饭的食材，有几个可供选择的方案： 您可以搜寻一下周围的进口超市，或者在网上购买食材。 当然您也可以将一些食材打包托运来美国。</p>";
	return false;
};

q3.onclick = function() {
	contentDiv.innerHTML = "<h2>语言生的大学生活</h2><p>规模较小的大学一般有一个提供早中晚餐的学生餐厅，可以持学生卡使用。 您如果住在没有厨房的宿舍就可能会需要自掏腰包就餐。规模大的大学通常会有几个餐厅，咖啡店或者可供学生使用的饭店。</p>";
	return false;
};

q4.onclick = function() {
	contentDiv.innerHTML = "<h2>语言生的大学生活</h2><p>如果您通过了驾照考试，就可以取得驾照并且买车。 在您取得美国驾照之前需要通过机考和路考。在您准备考驾照并买车之前，请做好买汽车保险（强制的)以及汽油费的预算，并且考虑好毕业后如何处理车辆的打算。 可能在短时间内卖不出去车，所以做好提前准备。</p>";
	return false;
};
