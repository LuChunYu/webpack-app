require(["./module1"], function(module1) {
    console.log("ass");
    var module2 = require("./module2");
    console.log("bbb");
});
require(["./module1"], function(module1){
    console.log("ccc");
});
