$(`#timeFormatOne`).text(moment().format("MM/DD/YYYY HH:mm:ss"));

$(".saveBtn").on("click", function(){
    let text = $(this).siblings(".textareacontainer").children("textarea").val();
    let time =$(this).parent().attr("id");
    localStorage.setItem(time, text);
    })
    
    var text = localStorage.getItem("10")

    
$("#10").children(".textareacontainer").children("textarea").val(text);

$("#9").children(".textareacontainer").children("textarea").val(text);

$("#11").children(".textareacontainer").children("textarea").val(text);

$("#12").children(".textareacontainer").children("textarea").val(text);

$("#1").children(".textareacontainer").children("textarea").val(text);

$("#2").children(".textareacontainer").children("textarea").val(text);

$("#3").children(".textareacontainer").children("textarea").val(text);

$("#4").children(".textareacontainer").children("textarea").val(text);

$("5").children(".textareacontainer").children("textarea").val(text);