function search_window_flag(flag) {
    var text = $('#keyword').val();
    if(flag == 1) {
        if(text == "サイト内検索") {
            $('#keyword').val("");
            $('#keyword').css("color","black");
        }
    } else {
        if(text == "") {
            $('#keyword').val("サイト内検索");
            $('#keyword').css("color","#999");
        }
    }
}
function search_submit() {
    var last_keyword = $('#keyword').val();
    window.location.href = "Users/kaikinishimura/My files/Lectures/情報基礎2/Final/search?hl=ja&hq=inurl:www.web-officer.com&ie=UTF-8&oe=UTF-8&filter=0&q="+last_keyword;
}
function enter() {
    $("#keyword").keypress(function(e) {
        if(e.which == 13) {
            $("#search_btn").click();
        }
    });
}
