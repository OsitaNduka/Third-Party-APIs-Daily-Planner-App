$(document).ready(function(){

    //DOM VARIABLES
 var display = $(".display-3");
 var currentDay = $("#currentDay");
 var lead = $(".lead");
 var timeblock = $("#time-block");
 var div9 = $("#div9");
 var div10 = $("#div10");
 var div11 = $("#div11");
 var div12 = $("#div12");
 var div1 = $("#div1");
 var div2 = $("#div2");
 var div3 = $("#div3");
 var div4 = $("#div4");
 var div5 = $("#div5");

 var button9 = $("#btn9");
 var button10 = $("#btn10");
 var button11 = $("#btn11");
 var button12 = $("#btn12");
 var button1 = $("#btn1");
 var button2 = $("#btn2");
 var button3 = $("#btn3");
 var button4 = $("#btn4");
 var button5 = $("#btn5");


 // Save the event in local storage
 button9.click(function(event) {
   // console.log("click");
    //console.log(event.target);
    //console.log(event.target.val());
    var value9am = $("#div9").val();
    //console.log(value9am);

    localStorage.setItem("Entry9am", JSON.stringify($("#btn9").val()));
 });

 button10.click(function(event){
    var value10am = $("#div10").val();
    localStorage.setItem("Entry10am", JSON.stringify($("#btn10").val()));
    //console.log(value10am)
 });

 button11.click(function(event){
    var value11am = $("#div11").val();
    localStorage.setItem("Entry11am", JSON.stringify($("#btn11").val()));
    //console.log(value11am);
 });

 button12.click(function(event){
    var value12pm = $("#div12").val();
    localStorage.setItem("Entry12pm", JSON.stringify($("#btn12").val()));
    //console.log(value12pm);
 });

 button1.click(function(event){
    var value1pm = $("#div1").val();
    localStorage.setItem("Entry1pm", JSON.stringify($("#btn1").val()));
    //console.log(value1pm);
 });

 button2.click(function(event){
    var value2pm = $("#div2").val();
    localStorage.setItem("Entry2pm", JSON.stringify($("#btn2").val()));
    //console.log(value2pm);
 });

 button3.click(function(event){
    var value3pm = $("#div3").val();
    localStorage.setItem("Entry3pm", JSON.stringify($("#btn3").val()));
    //console.log(value3pm);
 });

 button4.click(function(event){
    var value4pmm = $("#div4").val();
    localStorage.setItem("Entry4pm", JSON.stringify($("#btn4").val()));
    //console.log(value4pm);
 });

 button5.click(function(event){
    var value5pm = $("#div5").val();
    localStorage.setItem("Entry5pm", JSON.stringify($("#btn5").val()));
    //console.log(value5pm)
});
 
 function setItems(){
    localStorage.setItem("Entry9am", div9.val());
    localStorage.setItem("Entry10am", div10.val());
    localStorage.setItem("Entry11am", div11.val());
    localStorage.setItem("Entry12pm", div12.val());
    localStorage.setItem("Entry1pm", div1.val());
    localStorage.setItem("Entry2pm", div2.val());
    localStorage.setItem("Entry3pm", div3.val());
    localStorage.setItem("Entry4pm", div4.val());
    localStorage.setItem("Entry5pm", div5.val());
 }

 setItems();
   // html id's
 var div9 = $("#Entry9am");
 var div10 = $("#Entry10pm");
 var div11 = $("#Entry11pm");
 var div12 = $("#Entry12pm");
 var div1 = $("#Entry1pm");
 var div2 = $("#Entry2pm");
 var div3 = $("#Entry3pm");
 var div4 = $("#Entry4pm");
 var div5 = $("#Entry5pm");

  //HTML id link to variables
 
  
  
  function getItems (){
    var prevEntry1pm = localStorage.getItem("Entry1pm");
    //console.log(prevEntry1pm);
    var prevEntry2pm = localStorage.getItem("Entry2pm");
    var prevEntry3pm = localStorage.getItem("Entry3pm");
    var prevEntry4pm = localStorage.getItem("Entry4pm");
    var prevEntry5pm = localStorage.getItem("Entry5pm");
    var prevEntry9am = localStorage.getItem("Entry9am");
    var prevEntry10am = localStorage.getItem("Entry10am");
    var prevEntry11am = localStorage.getItem("Entry11am");
    var prevEntry12pm = localStorage.getItem("Entry12pm");

    console.log("9AM: ", localStorage.getItem("Entry9am"));
    console.log("10AM: ", localStorage.getItem("Entry10am"));
    //console.log("10AM: ", prevEntry10am);
 }


 getItems();


 // Definitions of Functions

 var today = moment();
 //console.log("Today: ", today)
 //$("#currentDay").text(today.format("dddd MMMM Do"));

 
 function updateTime() {
     var timeInterval = setInterval(function () {
        // currentDay();
        //console.log("Loop:"  , moment().format("MMMM Do YYYY, hh:mm:ss"));
        $("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss"));

    }, 1000);
  }

  updateTime();

 function clock() {
    currentDay.text(moment().format('LL'));
    display.text(moment().format("hh:mm:ssA"));
    $(".jumbotron").append(currentDay);
    $(".jumbotron").append(".display");

 }
   var timeblock = $(".timeblock")
 function timeblock(){
    if (currentDay(div12.attr("data-hour")) > today){
        div12.removeClass("past present future");
        div12.addClass("future");

    } else if (currentDay(div12.attr("data-hour"))===today) {
        div12.removeClass("past present future");
        div12.addClass("present");

    } else {
        div12.removeClass("past present future");
        div12.addClass("present");
    }
 }




























});