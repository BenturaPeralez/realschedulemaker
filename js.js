$(`#timeFormatOne`).text(moment().format("MM/DD/YYYY HH:mm:ss"));

$(".saveBtn").on("click", function(){
    let text = $(this).siblings(".textareacontainer").children("textarea").val();
    let time =$(this).parent().attr("id");
    localStorage.setItem(time, text);
    })


var text10 = localStorage.getItem("10")

var text9 = localStorage.getItem("9")

var text11 = localStorage.getItem("11")

var text12 = localStorage.getItem("12")

var text1 = localStorage.getItem("1")

var text2 = localStorage.getItem("2")

var text3 = localStorage.getItem("3")

var text4 = localStorage.getItem("4")

var text5 = localStorage.getItem("5")
    
$("#10").children(".textareacontainer").children("textarea").val(text10);

$("#9").children(".textareacontainer").children("textarea").val(text9);

$("#11").children(".textareacontainer").children("textarea").val(text11);

$("#12").children(".textareacontainer").children("textarea").val(text12);

$("#1").children(".textareacontainer").children("textarea").val(text1);

$("#2").children(".textareacontainer").children("textarea").val(text2);

$("#3").children(".textareacontainer").children("textarea").val(text3);

$("#4").children(".textareacontainer").children("textarea").val(text4);

$("5").children(".textareacontainer").children("textarea").val(text5);