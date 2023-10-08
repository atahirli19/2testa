//1
//$(btn).ready(function(){
    $("button").click(function(){
        $(".slide").slideDown();
    });

//2
//$(btn).ready(function(){
    $("button").click(function(){
        $(".slide").slideUp();
    });

//3
//$(btn).ready(function(){
    $("button").click(function(){
        $(".slide").slideToggle();
    });

//4
//$(btn).ready(function(){
    $("button.btn").click(function(){
        $("div.slide").slideDown(4000);
      });
    
//5
//$(btn).ready(function(){
    $("button.btn").click(function(){
        $("div.slide").slideUp(5000);
      });

//6
//$(btn).ready(function(){
    $("button.btn").click(function(){
        $("div.slide").slideToggle(6000);
      });
    
//7
//$(btn).ready(function(){
    $("button").click(function(){
        $(".slide").slideUp(5000, function(){
          
            alert("Вверх");
        });
      });
  
 //8
 //$(document).ready(function() {
    $(".btn").click(function() {
        $(".slide").slideDown(5000, function() {
          alert("Вниз");
        });
      });

 //9
//$(btn).ready(function() {
    $("button").click(function() {
        $(".slide").slideToggle(5000, function() {
          alert("Движrние");
        });
      });

//10
//$(document).ready(function(){
    $(".btn").click(function(){
        $(".slide").animate({left});
      });

//11
//$(document).ready(function(){
    $(".btn").click(function(){
        $(".slide").animate({
          height: "400px",
          width: "400px"
        });
      });

//12
//останавливает какие-то элементы

//13
//обрезать ,оставить

//14
// язык описания внешнего вида страницы 

//15
//