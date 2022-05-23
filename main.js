var http = require("http");
var express = require('express');
var fs = require("fs");
var port = 8081

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Hello World dsfdsfds\n");
// }).listen(port);
// console.log("server running at http://127.0.0.1:" + port + "/");

//==============================================================

// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Asynchronous read: " + data.toString());
// });

// var data = fs.readFileSync("input.txt");
// console.log("Synchronous read: " + data.toString());

// console.log("program ended");

//==============================================================

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected(){
//     console.log("connected successfully");

//     eventEmitter.emit('data_received');
// }

// eventEmitter.on("connection", connectHandler);

// eventEmitter.on("data_received", function(){
//     console.log("data received successfully");
// });

// eventEmitter.emit("connection");

//==============================================================

// Asynchronous opening File
// console.log("Going to open file!");

// fs.open('input.txt', function(err, data){
//     if(err) throw err;
//     console.log("file opened");
// })

//==============================================================
// Asynchronous get file stats
// console.log("Going to get file info...");
// fs.stat("input.txt", function (err, stats){
//     if(err) throw err;
//     console.log(stats);
//     console.log("Got file info successfully");
//     console.log("isFile ? "+ stats.isFile());
//     console.log("isDirectory ? "+ stats.isDirectory());
// })

//==============================================================

// console.log("Going to write into existing file");
// fs.writeFile("input.txt", "Simply Easy Learning sasasas!", function (err) {
//     if (err) throw err
//     console.log("Data written successfully!");
//     console.log("Let's read newly written data");

//     fs.readFile("input.txt", function (err, data) {
//         if (err) throw err
//         console.log("Asynchronous read: " + data.toString());
//     });
// });

//==============================================================

// var buf = new Buffer.alloc(1024);

// console.log("Going to open an existing file");
// fs.open("input.txt", "r+", function (err, fd) {
//   if (err) throw err;
//   console.log("File opened successfully!");

//   console.log("Going to truncate the file after 10 bytes");
//   fs.ftruncate(fd, 5, function (err) {
//       if (err) throw err;
//     });
//     console.log("File truncated successfully.");
//     console.log("Going to read the same file");

//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) throw err;
//         console.log(bytes+ " bytes read!");

//         if(bytes> 0){
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });

//   fs.close(fd, function (err) {
//     if (err) throw err;
//     console.log("file closed successfully");
//   });
// });

//==============================================================

// console.log("Going to delete an existing file");

// fs.unlink("input.txt", function (err){
//     if (err) throw err;
//     console.log("File deleted successfully")
// })

//==============================================================

// console.log("Going to create directory ");

// fs.mkdir('/GoMyCode/Course/21-Node.js/node/dir', function (err){
//     if (err) throw err;
//     console.log("directorycreated successfully")
// })

//==============================================================

// console.log("Going to read directory /GoMyCode/Course/21-Node.js/node");

// fs.readdir("/GoMyCode/Course/21-Node.js/node", function (err,files){
//     if (err) throw err;
//     files.forEach(function (file) {
//         console.log(file);
//     })
// })

//==============================================================

// console.log("Going to delete directory '/GoMyCode/21-Node.js/node/dir'");

// fs.rmdir("/GoMyCode/Course/21-Node.js/node/dir", function (err) {
//   if (err) throw err;
//   console.log("Going to read directory /GoMyCode/21-Node.js/node");

//   fs.readdir("/GoMyCode/Course/21-Node.js/node", function (err, files) {
//     if (err) throw err;
//     files.forEach(function (file) {
//       console.log(file);
//     });
//   });
// });

//==============================================================

// console.log(__filename);

//==============================================================

// console.log( __dirname );

//==============================================================

// function printHello() {
//     console.log( "Hello, World!");
//  }

//  // Now call above function after 2 seconds
//  setTimeout(printHello, 2000);


//==============================================================

// function printHello() {
//     console.log( "Hello, World!");
//  }

//  // Now call above function after 2 seconds
//  var t = setTimeout(printHello, 2000);

//  // Now clear the timer
//  clearTimeout(t);

//==============================================================

// function printHello() {
//     console.log( "Hello, World!");
//  }

//  // Now call above function after 2 seconds
//  setInterval(printHello, 2000);

console.log("program ended");
