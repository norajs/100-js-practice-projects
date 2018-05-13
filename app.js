if (document.getElementsByClassName('added').length == 1) {
    document.getElementById('count').innerHTML= 1;
    document.getElementById('count_text').innerHTML= " javascript practice project";   
}
else {
    document.getElementById('count').innerHTML= document.getElementsByClassName('added').length;
}


 
