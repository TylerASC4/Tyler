var randomGifimg= ["http://s.quickmeme.com/img/6a/6a079ca901b50d0c50ecd06e85cad7229c3c0f16043218cba73701b0e408fe26.jpg", "https://img.ifcdn.com/images/e8bd690608dbc7441a7deef25480f8ffcf5a4f68acb211265ee72861eed32bb5_1.jpg","http://memestatic.fjcdn.com/pictures/Expanding+brain+meme_fbb8c7_6209742.jpg","https://pics.me.me/683804329095106561-Twitter.png","https://static1.squarespace.com/static/531a2463e4b0fe5194174403/531b399de4b00720a474d729/54418178e4b03de3b67a5b42/1413579138916/409637_368493243223986_811345486_n.jpg?format=500w","https://static1.squarespace.com/static/531a2463e4b0fe5194174403/531b399de4b00720a474d729/54418178e4b03de3b67a5b42/1413579138916/409637_368493243223986_811345486_n.jpg?format=500w"];
var count = 0;

$(document).ready(function (){
    changeSubtitle();
});

function changeSubtitle() {
    setInterval(function () {
        if (count < randomGifimg.length - 1) {
            $("#randomimg").attr("src", randomGifimg[count]);
            count++;
        } else {
            $("#subtitle").attr("src", randomGifimg[randomGifimg.length - 1]);
            count = 0;
        }
    }, 3000);
}