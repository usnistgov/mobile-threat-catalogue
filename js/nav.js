function toggleNav()
{
    let element = document.getElementById('nav-links');
    element.style.maxHeight = (element.style.maxHeight) ? null : element.scrollHeight + "px";
}