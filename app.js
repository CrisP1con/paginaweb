$(document).ready(function () {

   

    $("#borrar").click(function (e) { 
  
      
        $("#contacto").empty().append($("<option>",{
         value: 1,
         text: 9


        }));
 
  // $("#contacto option:selected").attr("value", 2).text("7");

        
    });

   
});