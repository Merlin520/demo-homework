clickMe.addEventListener('click',function (e) {
    popover.style.display = 'block';
    // e.stopPropagation()
});

wrapper.addEventListener('click',function (e) {
    e.stopPropagation()
});


document.addEventListener('click',function () {
    popover.style.display = 'none'
});