$(`#timeFormatOne`).text(moment().format("MM/DD/YYYY HH:mm:ss"));

$(".saveBtn").on("click", function(){
    debugger
    let text = $(this).siblings(".textarea").val();
    let time =$(this).parent().attr("id")
    })