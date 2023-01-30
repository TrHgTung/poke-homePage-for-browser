document.querySelector('#text_input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var link = document.getElementById("text_input").value;
        var resultOfLink = 'https://www.google.com/search?q=' + encodeURIComponent(link);
        window.location = resultOfLink;
    }
});