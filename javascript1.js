/*
Rene Chen
Final Project
This is the js. Features api pull
on button click, and displays it
*/

"use strict";
$(document).ready( () => {
    $("#button1").click( () => {
        const city = $("#state1").val(); // user input
        // if input is not blank
        if(city != ''){
            // reads json from api
            $.ajax({
                url: "https://api.quotable.io/random",
                tyle: "GET",
                dataType: "json",
                success: function(data){
                    const widget = show(data); // calls function
                    $("#show").html(widget); //displays from function
                    $("#state1").val(''); // clears entry after click
                }
                
            });
        }else{ // otherwise gives user error
            $("#error").html("field cannot be empty");
        }
        
    });
    
});
// function 
function show(data){
    return "<h3><strong>Fact</strong>: "+ data.content + "</h3>" + 
        "<h3><strong>Author</strong>: "+ data.author + "</h3>"
    
    
}

