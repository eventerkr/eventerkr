$(document).ready(function() {
    // JQuery code to be added in here.
    });

function getElementsByIdStartsWith(container, selectorTag, prefix) {
    var items = [];
    var myPosts = document.getElementById(container).getElementsByTagName(selectorTag);
    for (var i = 0; i < myPosts.length; i++) {
        //omitting undefined null check for brevity
        if (myPosts[i].id.lastIndexOf(prefix, 0) === 0) {
            items.push(myPosts[i]);
        }
    }
    return items;
}

function hideAllDetails() {
    var details = getElementsByIdStartsWith("event_table", "tr", "detail-");
    for (var i=0; i<details.length; i++) {
        details[i].style.display = 'none';
    }
}

$(function(){
	$("#event1_button").click(function(){
        hideAllDetails();
		var table = document.getElementById("event_table");
		var lst = document.getElementsByTagName("tr");
        //console.log(lst);
		for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('th');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventstatusid") {
                    //console.log(col.id);
                    //console.log(col.innerText);
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
        hideAllDetails();
		var table = document.getElementById("event_table");
		var lst = document.getElementsByTagName("tr");
        //console.log(lst);
		for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('th');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventstatusid") {
                    //console.log(col.id);
                    //console.log(col.innerText);
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

$(function(){
	$("#event3_button").click(function(){
        hideAllDetails();
		var table = document.getElementById("event_table");
		var lst = document.getElementsByTagName("tr");
        //console.log(lst);
		for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('th');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventstatusid") {
                    //console.log(col.id);
                    //console.log(col.innerText);
                    if (col.innerText == '3') {
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

$(document).ready(function() {
    $("#event_table tr").click(function(e) {
        //console.log(e.currentTarget);
        var target = e.currentTarget;
        if (target.id.startsWith("detail-")) {
            return
        }
        //console.log(target.id)
        var detail = document.getElementById("detail-"+target.id);
        if (detail.style.display == 'none') {
            hideAllDetails();
            detail.style.display = '';
        } else {
            hideAllDetails();
        }
    });
});
