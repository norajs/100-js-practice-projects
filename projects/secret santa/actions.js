var names= new Array();

$('#btn1').on('click', function get_number() {
    var answer= $('#answer').val();
    $("#btn1").remove();
    $("#btn2").css("display", "block");
    return(answer);
});

alert(answer);
                          
for (var i = 0; i < answer; i++) {
    $('#question').text("Please enter Name " + i);
    $('#btn2').click(function() { 
            names.push($('#answer').val()); 
       });
    alert(names[i]);
}


    
    
                          
                          





