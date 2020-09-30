$(document).ready(function(){  
  $("#btn").mouseover(function(){
    $(this).css({"background-color":"#0a0a36","color":"white"})
  })
  $("#btn").mouseleave(function(){
  $(this).css({"background-color":"white","color":"black"})
  })
  })
  
function buttonClick() {
  var name = document.forms["myForm"]["name"].value
  var email = document.forms["myForm"]["emailid"].value
  var contact = document.forms["myForm"]["contactno"].value

  if(name == "" && email == "" && contact == "") {

      alert("Name, Email, & Contact no. must be filled")
      return false
  } else {

      var text = "Your Form is Submitted"
      document.getElementById("display-info").innerHTML=text
      $('#name').val('')
      $('#emailid').val('')
      $('#contactno').val('')
      $('#message').val('')
      return false
  }
}
