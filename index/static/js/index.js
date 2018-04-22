$(document).ready(function() {
    // JQuery code to be added in here.
    });

$(function(){
	$("#event1_button").click(function(){
		var table = document.getElementById("event_table");
		var lst = document.getElementsByTagName("tr");
        var eventstatusid = lst.getElementById("eventstatusid");
        console.log(eventstatusid);
		for (var i=0; i<lst.length; i++) {
            if (lst[i].getElementById("eventstatusid") == "1") {
                lst[i].style.display = 'none';
            }
        }
		lst.border=1;
    	return false;
	});
});
