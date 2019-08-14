function toggleNav()
{
    let element = document.getElementById('nav-links');
    let caret = document.getElementsByClassName('down-caret')[0];

    element.style.maxHeight = (element.style.maxHeight) ? null : element.scrollHeight + "px";
    caret.classList.toggle("open-caret");
}