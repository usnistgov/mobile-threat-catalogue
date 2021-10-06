function toggleNav(anchor)
{
    let element = document.getElementById(anchor);
    let caret = document.getElementsByClassName('down-caret-' + anchor)[0];

    element.style.maxHeight = (element.style.maxHeight) ? null : element.scrollHeight + "px";
    caret.classList.toggle('open-caret');
}

function toggleThreatContent()
{
    let element = document.getElementById("content-hide");
    element.style.maxHeight = (element.style.maxHeight) ? null : element.scrollHeight + "px";
}