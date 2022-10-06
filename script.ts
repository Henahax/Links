var data = JSON.parse("");

function generatePage() : void{
 $.getJSON("data.json", function(json){
    data = json;
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

    $.each(data.body.profile, function(key, val){
    
        var profileItem = $("<div></div>");
        profileItem.addClass(key.toString());
        profileItem.contents = val;
        $('#profile').append(profileItem);
    });
}

function generateLinks() {
    $.each(data.body.links, function(key, val){

        var link = $("<a></a>");
        link.addClass("button");
        link.addClass(key.toString());
        link.attr("href", val.link);

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");

        switch(key) {
            case "discord":
                svg.setAttribute("viewBox", "0 0 640 512");
              break;
            default:
                svg.setAttribute("viewBox", "0 0 512 512");
            }

        var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d", "");

        svg.append(path);
        link.append(svg);

        link.append(val.description);

        $("#links").append(link);
    });
}

function generateFooter(){
    $('footer').append('todo');
}