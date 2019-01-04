var fs = require('fs')

fs.readFile('readMe.txt' , 'utf8', function(error,data){
    fs.writeFile('writeMe.txt' , data );
});
// fs.writeFileSync('writeMe.txt', readMe);

// var myEmitter = new events.EventEmitter();

// myEmitter.on(`someEvent`, function(mssg){
//     console.log(mssg)
// });

// myEmitter.emit('someEvent' , 'the event was emitted'); 