console.log("bonjour");

function githubSearch() {
    var textField = document.getElementById('search-field').value;

    //https://api.github.com/search/repositories?q=textField

    $.get("https://api.github.com/search/repositories?q=" + textField, function (data) {
        $(".result").html(data);
        console.log(data);
        alert("Load was performed.");
        alert(data);
    });

    console.log(textField);
}

// Shorthand for $( document ).ready()
$(function () {
    console.log("jquery is ready!");

});