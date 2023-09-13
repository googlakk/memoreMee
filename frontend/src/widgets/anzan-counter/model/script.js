function fontsize() {
    let block = document.querySelector('.fontsize');
    let text = document.querySelector('.fontsize .text');
    let w = block.offsetWidth;
    text.style.fontSize = w/24 + "px";
    text.style.top = w/38 + "px";
    text.style.left = w/9 + "px";
}
window.onload = fontsize;
window.onresize = fontsize; 