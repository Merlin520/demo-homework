var APP_ID = '7RgK0ULc9Q6Y9X0lGnEERU5k-gzGzoHsz';
var APP_KEY = '3Bq5IoSIySYKSwsJvOLen2ou';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

console.log('success!')

// var TestObject = AV.Object.extend('tom');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })