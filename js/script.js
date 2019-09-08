$(document).ready(function() {
 $("button").mouseenter(function(){
  $("button").removeClass("makeRed").addClass("makeBorder")
 })
  $("button").mouseleave(function(){
   $("button").removeClass("makeBorder").addClass("makeRed")
 })
 $("#button1").click(function(){
   $("#para1").slideUp("1000")
   
 })
  $("#button1").click(function(){
   $("#para1").hide("1000").show("1000")
   
 })
 $("button").click(function() {
     $("p").fadeIn().fadeOut()
 })
 

});