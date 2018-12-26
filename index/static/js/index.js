var filter_status_list = [];
var user_status_list = [];

$(document).ready(function() {
    //console.log(events_list);
    var event_calendar = $('#event-calendar').fullCalendar({
        header: {
            left: 'title',
            center: 'month,listYear'
        },
        views: {
            month: {
                titleFormat: 'MMMM YYYY'
            }
        },
        height: 'auto',
        contentHeight: 'auto',
        events: events_list,
        theme: true,
        themeSystem: 'bootstrap3',
        displayEventTime: false,
        selectHelper: true,
        eventRender: function(event, element){
            element.popover({
                animation:true,
                delay: 100,
                placement: 'bottom',
                //content: 'Date:'+event.start,
                title: event.title,
                content: event.start_str+'</br>'+event.place,
                trigger: 'click',
                container: "#wrap",
                html: true
            });
        }
    });
    $('html').click(function () {
        $('.popover').each(function () {
            console.log('close');
            $(this).popover('hide');
        });
    });
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

function disableUserStatusButtons() {
    //console.log(user_status_list);
    var buttons = document.getElementById("filter-user-button").getElementsByTagName('button');
    if (user_status_list.length == 0) {
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

    for (var i=0; i<user_status_list.length; i++) {
        user_id = user_status_list[i] - 1;
        //console.log(buttons[i].className);
        if (buttons[user_id].className.includes(" button_disabled")) {
            buttons[user_id].className = buttons[user_id].className.replace(" button_disabled", "");
        }
    }
}

function disableFilterStatusButtons() {
    //console.log(filter_status_list);
    var buttons = document.getElementById("filter-status-button").getElementsByTagName('button');
    if (filter_status_list.length == 0) {
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

    for (var i=0; i<filter_status_list.length; i++) {
        filter_id = filter_status_list[i] - 1;
        //console.log(buttons[i].className);
        if (buttons[filter_id].className.includes(" button_disabled")) {
            buttons[filter_id].className = buttons[filter_id].className.replace(" button_disabled", "");
        }
    }
}

$(document).ready(function() {
    $("#filter-user-button button").click(function(e) {
        hideAllDetails();
        target_id = e.currentTarget.id;
        if (user_status_list.includes(target_id)) {
            const index = user_status_list.indexOf(target_id);
            user_status_list.splice(index, 1);

        } else {
            user_status_list.push(target_id);
        }
        var table = document.getElementById("event_table");
        var lst = document.getElementsByTagName("tr");
        //console.log(lst);
        for (var i=0; i<lst.length; i++) {
            var cols = lst[i].getElementsByTagName('td');
            for (var j=0; j<cols.length; j++) {
                col = cols[j];
                if (col.id == "eventuserid") {
                    //console.log(col.id);
                    //console.log(col.innerText);
                    var found = false;
                    if (user_status_list.length == 0) {
                        found = true;
                    } else {
                        var exist_all = true;
                        for (var k=0; k<user_status_list.length; k++) {
                            if (!col.innerText.includes(user_status_list[k])) {
                                exist_all = false;
                                break;
                            }
                            //console.log(col.innerText)
                            //console.log(user_status_list[k])
                        }
                        if (exist_all)
                            found = true;
                    }
                    if (found) {
                        lst[i].style.display = '';
                    } else {
                        lst[i].style.display = 'none';
                    }
                }
            }
        }
        lst.border=1;
        disableUserStatusButtons();
    });

/*
    $("#filter-status-button button").click(function(e) {
        hideAllDetails();
        target_id = e.currentTarget.id;
        if (filter_status_list.includes(target_id)) {
            const index = filter_status_list.indexOf(target_id);
            filter_status_list.splice(index, 1);

        } else {
            filter_status_list.push(target_id);
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
                    if (filter_status_list.length == 0) {
                        lst[i].style.display = '';
                    } else if (filter_status_list.includes(col.innerText)) {
                        lst[i].style.display = '';
                    } else {
                        lst[i].style.display = 'none';
                    }
                }
            }
        }
        lst.border=1;
        disableFilterStatusButtons();
    }); */
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
