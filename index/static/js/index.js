$(document).ready(function() {
    // JQuery code to be added in here.
    });

$(function(){
	$("#event1_button").click(function(){
		var table = document.getElementById("event_table");
		var lst = document.getElementsByTagName("tr");
        console.log(lst);
		for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('th');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventstatusid") {
                    console.log(col.id);
                    console.log(col.innerText);
                    if (col.innerText == '1') {
                        lst[i].style.display = '';
                    } else {
                        lst[i].style.display = 'none';
                    }
                }
            }
        }
		lst.border=1;
    	return false;
	});
});

$(function(){
	$("#event2_button").click(function(){
		var table = document.getElementById("event_table");
		var lst = document.getElementsByTagName("tr");
        console.log(lst);
		for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('th');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventstatusid") {
                    console.log(col.id);
                    console.log(col.innerText);
                    if (col.innerText == '2') {
                        lst[i].style.display = '';
                    } else {
                        lst[i].style.display = 'none';
                    }
                }
            }
        }
		lst.border=1;
    	return false;
	});
});
