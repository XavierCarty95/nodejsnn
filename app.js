var fs = require('fs')

fs.unlink("./writeMe.txt" , function(){
    fs.rmdir('stuff');
    
});



fs.mkdir('stuff' , function(){
    fs.readFile('readMe.txt', 'utf-8' , function(error,data){
        fs.writeFile('./writeMe.txt', data)
    })
}) 