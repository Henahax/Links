var data = null;

function generatePage(){
 $.getJSON("data.json", function(json){
    data = json;
    alert("hi");
    generateHead();
    generateProfile();
    generateLinks();
    generateFooter();
 })
 .fail(function (jqXHR, textStatus, error) {
    console.log("Post error: " + error);
});
}

function generateHead(){
    $('head').append('todo');
}

function generateProfile(){
    $('profile').append('todo');
}

function generateLinks(){
    //foreach
    $('links').append('todo');

}

function generateFooter(){
    $('footer').append('todo');
}