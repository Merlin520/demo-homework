// $(p1).on('click',function () {
//     $(images).css({
//         transform:'translateX(0)'
//     })
// });
//
// $(p2).on('click',function () {
//     $(images).css({
//         transform:'translateX(-400px)'
//     })
// });
//
// $(p3).on('click',function () {
//     $(images).css({
//         transform:'translateX(-800px)'
//     })
// });

var allButtons = $('#buttons > span');

for(let i = 0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index();
        var n = index * -400;
        $('#images').css({
            transform:'translate(' + n + 'px)'
            })
    })
}

//自动播放
var n = 0;
var size = allButtons.length;
// allButtons.eq(n%3).trigger('click')
setInterval(()=>{
    n=n+1;
    allButtons.eq(n%size).trigger('click')
},1000);
















