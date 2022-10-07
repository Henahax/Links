var data = JSON.parse("");
var logos = JSON.parse("");

function generatePage() {
    $.getJSON("logos.json", function (jsonLogos) {
        logos = jsonLogos;
        $.getJSON("data.json", function (jsonData) {
            data = jsonData;
            setColors();
            generateProfile();
            generateLinks();
            generateFooter();
        })
            .fail(function (jqXHR, textStatus, error) {
                console.log("Post error: " + error);
            });
    }).fail(function (jqXHR, textStatus, error) {
        console.log("Post error: " + error);
    });
}
function setColors() {
    $("body,html").css("background-color", data.body.colors.background);
    $("body,html").css("color", data.body.colors.text);
}

function generateProfile() {
    $.each(data.body.profile, function (key, val) {
        if (key == "avatar") {
            var profileItem = $("<img></img>");
            profileItem.addClass(key);
            profileItem.attr("src", val)
            $('#profile').append(profileItem);
        } else {
            var profileItem = $("<div></div>");
            profileItem.addClass(key);
            profileItem.append(val);
            $('#profile').append(profileItem);
        }
    });
}

function generateLinks() {

    $.each(data.body.links, function (keyData, keyVal) {
        var link = $("<a></a>");
        link.addClass("button");
        link.addClass(keyData);
        link.attr("href", keyVal.link);

        var profileItem = $("<i></i>");

        $.each(logos, function (keyLogos, valLogos) {
            if (keyLogos == keyData) {
                $.each(valLogos.class, function (keyClasses, valClasses) {
                    profileItem.addClass(valClasses);
                });
                link.append(profileItem);
                link.append(valLogos.description);
            }
        });

        $("#links").append(link);
    });
}

function generateFooter() {
    $('#footer').append(data.body.footer);
}
