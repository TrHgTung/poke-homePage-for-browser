/*document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    link.addEventListener('click', function() {

        var one = document.getElementById("text_input").value;
        var two = 'https://www.google.com/search?q=' + encodeURIComponent(one);
        window.location = two;

    });
});
*/

document.querySelector('#text_input').addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        var link = document.getElementById("text_input").value;
        var str = 'https://www.google.com/search?q=' + encodeURIComponent(link);
        window.location = str;
    }
});