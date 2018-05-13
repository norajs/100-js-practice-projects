/* change direction of convertion */
$(document).ready(function () {
    $('#arrow').click(function() {
    if ($('#one').attr('placeholder')== "C") {
        $('#one').attr('placeholder', 'F');
        $('#two').attr('placeholder', 'C');
    }
    else if ($('#one').attr('placeholder')== "F") {
        $('#one').attr('placeholder', 'C');
        $('#two').attr('placeholder', 'F');
    }
});
});
