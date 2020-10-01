$(document).ready(function(){  
  $("#btn").mouseover(function(){
    $(this).css({"background-color":"#0a0a36","color":"white"})
  })
  $("#btn").mouseleave(function(){
  $(this).css({"background-color":"white","color":"black"})
  })
  })
  
  function buttonClick() {
    var namec = document.forms["myForm"]["name"].value
    var emailc = document.forms["myForm"]["emailid"].value
    var messagec = document.forms["myForm"]["message"].value
 
      if(namec == ""){
      var nm ="Please enter your name"
      document.getElementById("errorname").innerHTML=nm}else{
        document.getElementById("errorname").innerHTML="";
      }
      if(emailc == ""){
      var em ="Please enter your email"
      document.getElementById("errormail").innerHTML=em}else{
        document.getElementById("errormail").innerHTML="";
      }
      if(messagec == ""){
      var ms ="Please enter your query"
      document.getElementById("errormessage").innerHTML=ms}else{
        document.getElementById("errormessage").innerHTML=""; 
      }
      if(namec !="" && emailc !="" && subjectc !="" && messagec !=""){
        var mesg = "Form Submitted successfully"
        document.getElementById("submitted").innerHTML=mesg
        document.getElementById("myForm").reset();
      }
    
  }