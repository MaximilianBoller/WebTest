
const navigationCSS = document.querySelector(".navigation-css");

$(document).ready(function()
{
    $(navigationCSS).click(function()
    {
        $(document.getElementById("content")).load('css.html');

    });
});


console.log("hello");