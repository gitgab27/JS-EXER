function message() 
{
    alert("Right Click!");
}
function message1() 
{
    alert("Right Click again!");
}
function message() 
{
    alert("paragraph!");
}
function message1() 
{
    alert("Move out to Link!");
}
function message2() 
{
    alert("Press any key in keyboard!");
}
function message3() 
{
    alert("Press and release any key in keyboard!");
}
function message4() 
{
    alert("Press key in keyboard!");
}
function submitMessage() 
{
    alert("Form Submitted!");
    document.getElementById("form").style.display = "none";
}
function loadMessage() 
{
    document.getElementById("form").style.display = "block";
}

function colorChange() 
{
    document.getElementById("this").style.backgroundColor = "red";
}



function windowResize() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "window size: width" + w + ", height: " + h;
    document.getElementById("here").style.width = w;
}
window.onresize = windowResize;


function dailyMessage() {
    var now = new Date();
    var dateOfTheweek = now.getDay();

    if(dateOfTheweek == 0)
    {
        alert("Have a Blessed Sunday!!!");
    }

    else if(dateOfTheweek == 1)
    {
        alert("MONDAY!!!");
    }

    else if(dateOfTheweek == 2)
    {
        alert("Have a Good Tuesday!!!");
    }

    else if(dateOfTheweek == 3)
    {
        alert("Have a Beautiful day as Wednesday!!!");
    }

    else if(dateOfTheweek == 4)
    {
        alert("Have a Good Thursday!!!");
    }

    else if(dateOfTheweek == 5)
    {
        alert("TGIF!!!");
    }

    else if(dateOfTheweek == 6)
    {
        alert("Saturday!!!");
    }

    else
    {
        alert("Have a Good Day!!!");
    }
}