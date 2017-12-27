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


// $('.image > img:nth-child(1)').addClass('current');
// $('.image > img:nth-child(2)').addClass('enter');
// $('.image > img:nth-child(3)').addClass('enter');

//初始化
let n;
Initialize();

// let n = 1;
setInterval(function () {
    $(`.image > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',function (e) {
        $(e.currentTarget).removeClass('leave').addClass('enter');
    });
    $(`.image > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current');
    n = n+1
}, 3000);//此函数可优化，此处未优化

function x(n) {
    if(n>3){
        n = n%3;
        if(n===0){
            n=3
        }
    }//n = 1 2 3
    return n
}

//初始化
 function Initialize(){
        n = 1;
     $(`.image > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
     // $('.image > img:nth-child(2)').addClass('enter');
     // $('.image > img:nth-child(3)').addClass('enter');
 }





// setTimeout(function () {
//     $('.image > img:nth-child(2)').removeClass('current').addClass('leave')
//         .one('transitionend',function (e) {
//             $(e.currentTarget).removeClass('leave').addClass('enter');
//         });
//     $('.image > img:nth-child(3)').removeClass('enter').addClass('current');
//
// }, 6000);
//
// setTimeout(function () {
//     $('.image > img:nth-child(3)').removeClass('current').addClass('leave')
//         .one('transitionend',function (e) {
//             $(e.currentTarget).removeClass('leave').addClass('enter');
//         });
//     $('.image > img:nth-child(1)').removeClass('enter').addClass('current');
//
// }, 9000);
//
// setTimeout(function () {
//     $('.image > img:nth-child(1)').removeClass('current').addClass('leave')
//         .one('transitionend',function (e) {
//             $(e.currentTarget).removeClass('leave').addClass('enter');
//         });
//     $('.image > img:nth-child(2)').removeClass('enter').addClass('current');
//
// }, 12000);















