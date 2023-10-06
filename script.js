const x1 = document.getElementById("One")
const x2 = document.getElementById("Two")
const x3 = document.getElementById("Three")
const url = "file:///C:/Users/Gav/Desktop/HTMLPresets/index.html"


const A = "Get-Latest-Filled-Complete"
const B = "Get-Latest-Unfilled=Complete"
const C = "Get-Latest-XYZ"

var UserIP;

document.addEventListener("DOMContentLoaded", function () {
    var queryString = window.location.search;
    if (!queryString) {
        return;
    }
    var PreString = queryString.substring(1);

    if (PreString === A) {
        var checkA = confirm("Download The Latest Version Of The Filled Complete Website Prebuild?")
        if (checkA == true) {
            alert("Downloading The Latest Version Of The Filled Complete Website Prebuild")
            window.location.href = "Latest/ExampleFilled.zip"
        } else {
            alert("You Canceled, Redirecting You To The Websites Root")
            window.location.href = url;
        }
    } else if (PreString === B) {
        var checkB = confirm("Download The Latest Version Of The Unfilled Complete Website Prebuild?")
        if (checkB == true) {
            alert("Downloading The Latest Version Of The Unfilled Complete Website Prebuild")
            window.location.href = "Latest/ExampleUnfilled.zip"
        } else {
            alert("You Canceled, Redirecting You To The Websites Root")
            window.location.href = url;
        }
    } else if (PreString === C) {
        alert("Idk Why You Clicked This, It Literally Says Nothing Is There...");
        alert("Redirecting You To The Root");
        window.location.href = url;
    } else {
        alert("You Silly Goose, This Is An Invalid String");
        alert("Redirecting You To The Root");
        window.location.href = url;
    }
    // alert(PreString); // You can remove this line, it's just for testing purposes
});


document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // prevent the default context menu from appearing
    window.location.href = url; // navigate to Google.com
});

x1.addEventListener("click", function () {
    window.location.href = "?" + A;
});

x2.addEventListener("click", function () {
    window.location.href = "?" + B;
});

x3.addEventListener("click", function () {
    window.location.href = "?" + C;
});