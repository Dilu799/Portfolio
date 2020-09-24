$(document).ready(function(){  
  $("#btn").mouseover(function(){
    $(this).css({"background-color":"#0a0a36","color":"white"})
  })
  $("#btn").mouseleave(function(){
  $(this).css({"background-color":"white","color":"black"})
  })
  $("#inputName").blur(function(){
    var text=$(this).val()
    if(text.length<4){
      alert("Enter minimum 4 characters")
      $("InputName").show()
    }else{
      $("InputName").hide()
    }
    })
  })