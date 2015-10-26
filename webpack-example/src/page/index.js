require("../css/index.less");

document.write(require("./test"));

var img1 = require("../img/close.png");
var img2 = require("../img/产品介绍v1.png");
var img3 = require("../img/tag.png");
var multiplyBy2 = require('./moduleA');

var src1 = img1;
var src2 = img2;
var src3= img3;
console.log(img2);
document.getElementById('img1').setAttribute('src', src1);
document.getElementById('img2').setAttribute('src', src2);
document.getElementById('img3').setAttribute('src', src3);
document.body.onclick = function() {
    console.log('test module hot');
    var result = multiplyBy2(4);
    //console.log(result);
    console.log(result);
}
if(module.hot){
    module.hot.accept("./moduleA", function(){
        multiplyBy2 = require('./moduleA');
        console.log('test module hot');
    });
}

