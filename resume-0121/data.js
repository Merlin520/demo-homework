var APP_ID = '7RgK0ULc9Q6Y9X0lGnEERU5k-gzGzoHsz';
var APP_KEY = '3Bq5IoSIySYKSwsJvOLen2ou';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
    // console.log(messages);
    // console.log(messages[0].attributes);
    // console.log(messages[1].attributes)
    let array = messages.map((item) =>item.attributes);
        console.log(array);

    array.forEach((item)=>{
        let li = document.createElement('li');
        li.innerText = item.content;
        let messageList = document.querySelector('#messageList');
        messageList.appendChild(li)
    })


}, function (error) {
    // 异常处理--find的异常
    alert('提交失败')
});
// .then(()=>{},(error)=>{
//     console.log(error)
// });//处理前两个函数的异常



//监听form
let myForm = document.querySelector('#postmessageForm');

myForm.addEventListener('submit',function (e) {
    e.preventDefault();
    let content = myForm.querySelector('input[name=content]').value;

    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content':content
    }).then(function (object) {
        // alert('success');
        window.location.reload()//自动刷新页面
        // console.log(object)
    })
});




// console.log('success!')
// var TestObject = AV.Object.extend('tom');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })