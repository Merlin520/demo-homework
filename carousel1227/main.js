// setTimeout(function () {
//     $('.image>img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     });
//
//     $('.image>img:nth-child(2)').css({
//         transform:'translateX(-100%)'
//     });
//     $('.image>img:nth-child(1)').one('transitionend',function (e) {
//        $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
//
// },3000);
//
// setTimeout(function () {
//     $('.image>img:nth-child(2)').css({
//         transform:'translateX(-200%)'
//     });
//
//     $('.image>img:nth-child(3)').css({
//         transform:'translateX(-100%)'
//     });
//     $('.image>img:nth-child(2)').one('transitionend',function (e) {
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
//
// },6000);
//
// setTimeout(function () {
//     $('.image>img:nth-child(3)').css({
//         transform:'translateX(-200%)'
//     });
//
//     $('.image>img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     });
//     $('.image>img:nth-child(3)').one('transitionend',function (e) {
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
//
// },9000);
//
// setTimeout(function () {
//     $('.image>img:nth-child(1)').css({
//         transform:'translateX(-200%)'
//     });
//
//     $('.image>img:nth-child(2)').css({
//         transform:'translateX(-100%)'
//     });
//     $('.image>img:nth-child(1)').one('transitionend',function (e) {
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
//
// },12000);


$('.image > img:nth-child(1)').addClass('current');
$('.image > img:nth-child(2)').addClass('enter');

setTimeout(function () {
    $('.image > img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transitionend',function (e) {
        $(e.currentTarget).removeClass('leave').addClass('enter');
    });
    $('.image > img:nth-child(2)').removeClass('enter').addClass('current');

}, 3000);

setTimeout(function () {
    $('.image > img:nth-child(2)').removeClass('current').addClass('leave')
        .one('transitionend',function (e) {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        });
    $('.image > img:nth-child(3)').removeClass('enter').addClass('current');

}, 6000);

setTimeout(function () {
    $('.image > img:nth-child(3)').removeClass('current').addClass('leave')
        .one('transitionend',function (e) {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        });
    $('.image > img:nth-child(1)').removeClass('enter').addClass('current');

}, 9000);

setTimeout(function () {
    $('.image > img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transitionend',function (e) {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        });
    $('.image > img:nth-child(2)').removeClass('enter').addClass('current');

}, 12000);















