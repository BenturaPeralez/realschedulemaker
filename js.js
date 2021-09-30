$(`#timeFormatOne`).text(moment().format("MM/DD/YYYY HH:mm:ss"));

$(".saveBtn").on("click", function(){
    console.log("clicked:",  this)
    })