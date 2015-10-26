
document.write('hello ');
document.getElementById('test').addEventListener('click', function(){
    require.ensure(["./module1"],function(){
        console.log('ccc');
        require("./module1");
    });
});
document.getElementById('two').addEventListener('click', function(){
    require.ensure(["./module2"],function(){
        console.log('aaaaaa');
        require("./module2");
    });
});
