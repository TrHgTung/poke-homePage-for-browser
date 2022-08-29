document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {

        //there is no need to declare a new function here.

        var one = document.getElementById("text_input").value;
        var two = 'https://www.google.com/search?q=' + encodeURIComponent(one);
        window.location = two;



    });
});