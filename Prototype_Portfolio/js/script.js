$( document ).ready(function() {
    // effect
    $("#headerimage").click(function(){
        $(this).fadeOut(1000);
        // event.src("okay")
    });
    //change content
    $("#My_Name").click(function(){
        $(this).text("I Hope you Like My Webpage!");
    });
    //change style
    $("p").click(function(){
        $(this).css('color',"red");
    });
    $("form[name='contact']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          username: "required",
          email: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          },
          commentary: "required",    
        },
        // Specify validation error messages
        messages: {
          username: "Please enter your name",
          email: "Please enter a valid email address",
          commentary: "Please write a message",
    
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
});


// function hover(event){
//   event.currentTarget.style.background-color = "grey";
// }