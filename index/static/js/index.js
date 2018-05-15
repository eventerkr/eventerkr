var filter_list = [];

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

function disableFilterButtons() {
    console.log(filter_list);
    var buttons = document.getElementById("filter-button").getElementsByTagName('button');
    if (filter_list.length == 0) {
        for (var i=0; i<buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace(" button_disabled", "");
        }
        return;
    }

    for (var i=0; i<buttons.length; i++) {
        if (!buttons[i].className.includes(" button_disabled")) {
            buttons[i].className += " button_disabled";
        }
    }

    for (var i=0; i<filter_list.length; i++) {
        filter_id = filter_list[i] - 1;
        //console.log(buttons[i].className);
        if (buttons[filter_id].className.includes(" button_disabled")) {
            buttons[filter_id].className = buttons[filter_id].className.replace(" button_disabled", "");
        }
    }
}

$(document).ready(function() {
    $("#filter-button button").click(function(e) {
        hideAllDetails();
        target_id = e.currentTarget.id;
        if (filter_list.includes(target_id)) {
            const index = filter_list.indexOf(target_id);
            filter_list.splice(index, 1);

        } else {
            filter_list.push(target_id);
        }
        var table = document.getElementById("event_table");
        var lst = document.getElementsByTagName("tr");
        //console.log(lst);
        for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('td');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventstatusid") {
                    //console.log(col.id);
                    //console.log(col.innerText);
                    if (filter_list.length == 0) {
                        lst[i].style.display = '';
                    } else if (filter_list.includes(col.innerText)) {
                        lst[i].style.display = '';
                    } else {
                        lst[i].style.display = 'none';
                    }
                }
            }
        }
        lst.border=1;
        disableFilterButtons();
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
