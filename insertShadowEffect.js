let headerian = document.getElementById('headerian');

window.onscroll = function() {
    var top = window.scrollY || document.documentElement.scrollTop;
    if (top > 99) {
        headerian.classList.remove("py-6");
        headerian.classList.add("insert-shadow");
    } else {
        headerian.classList.remove("insert-shadow");
        headerian.classList.add("py-6");
    }
};
