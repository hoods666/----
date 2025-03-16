var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");
var depth_page = link.getAttribute("depth");

btn.addEventListener("click", function() { ChangeTheme(); });

if (config.theme == "dark") {
    ChangeTheme();
}

function ChangeTheme() {
    var depth = Depth(depth_page);
    let lightTheme = depth + "css/style-light-theme.css";
    let darkTheme = depth + "css/style-dark-theme.css";

    btn.classList.toggle('_active')

    var currTheme = link.getAttribute("href");
    var theme = "";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    } else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);
}

function Depth(depth) {
    var path = "";
    for (var i = 0; i < depth; i++) {
        path += "../";
    }
    return path;
}