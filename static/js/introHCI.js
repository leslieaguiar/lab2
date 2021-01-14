$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Redirecting");
            });
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#000000");
}





