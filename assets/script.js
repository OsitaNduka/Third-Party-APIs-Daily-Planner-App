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

 var button9 = $("btn9");
 var button10 = $("btn10");
 var button11 = $("btn11");
 var button12 = $("btn12");
 var button1 = $("btn1");
 var button2 = $("btn2");
 var button3 = $("btn3");
 var button4 = $("btn4");
 var button5 = $("btn5");


 div1.val(localStorage.getItem("enter1"));
 div2.val(localStorage.getItem("enter2"));
 div3.val(localStorage.getItem("enter3"));
 div4.val(localStorage.getItem("enter4"));
 div5.val(localStorage.getItem("enter5"));
 div9.val(localStorage.getItem("enter9"));
 div10.val(localStorage.getItem("enter10"));
 div11.val(localStorage.getItem("enter11"));
 div12.val(localStorage.getItem("enter12"));




 // Definitions of Functions

 var today = moment();$("#currentDay").text(today.format("dddd MMMM Do"));

 $("#currentDay").text(today.format("MMMM Do YYYY, hh:mm:ss"));

 function checkTime() {
    var today = setInterval(function () {
      updateCurrentTime();
    }, 1000);
  }

































});