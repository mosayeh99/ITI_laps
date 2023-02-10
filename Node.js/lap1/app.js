const express = require('express');
const bodyParser = require('body-parser');
const bodyParserForm = bodyParser.urlencoded();
const app = express();

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/pages/home.html');
})
app.get('/roadmap',function(req,res){
    res.sendFile(__dirname+'/pages/roadmap.html');
})
app.get('/signup',function(req,res){
    res.sendFile(__dirname+'/pages/signup.html');
})
app.get('/css/header.css',(req,res) => {
    res.sendFile(__dirname+'/css/header.css');
})
app.get('/css/style.css',(req,res) => {
    res.sendFile(__dirname+'/css/style.css');
})
app.get('/css/signup.css',(req,res) => {
    res.sendFile(__dirname+'/css/signup.css');
})
app.get('/imgs/ITI_logo.png',(req,res) => {
    res.sendFile(__dirname+'/imgs/ITI_logo.png');
})
app.get('/imgs/bg_img.png',(req,res) => {
    res.sendFile(__dirname+'/imgs/bg_img.png');
})

app.post("/signup",bodyParserForm,(req,res) => {
    if(req.body.password.length >= 8){
        res.send("<h1>Registration Success</h1>");
    }else{
        res.send("<h1>Registration Failed</h1>");
    }
})

app.listen(4040);

// const http = require('http');
// const fs = require('fs');
// process.chdir('./pages');
// const server = http.createServer((req, res) => {
//     if(req.url == '/home'){
//         fs.readFile('home.html',(err, data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.write(data);
//                 res.end();
//             }
//         })
//     }else if (req.url == '/roadmap'){
//         fs.readFile('roadmap.html',(err, data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.write(data);
//                 res.end();
//             }
//         })
//     }else if (req.url == '/signup'){
//         fs.readFile('signup.html',(err, data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.write(data);
//                 res.end();
//             }
//         })
//     }else if(req.url == '/css/header.css') {
//         fs.readFile('../css/header.css',(err,data) => {
//             if (err) console.log('Error', err)
//             else {
//                 res.write(data);
//                 res.end();
//             }
//         })
//     }else if (req.url == '/css/style.css'){
//         fs.readFile('../css/style.css', (err,data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.write(data);
//                 res.end();
//             }
//         })
//     }else if (req.url == '/css/signup.css'){
//         fs.readFile('../css/signup.css', (err,data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.write(data);
//                 res.end();
//             }
//         })
//     }else if (req.url == '/imgs/ITI_logo.png'){
//         fs.readFile('../imgs/ITI_logo.png', (err,data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.end(data);
//             }
//         })
//     }else if (req.url == '/imgs/bg_img.png'){
//         fs.readFile('../imgs/bg_img.png', (err,data) => {
//             if(err) console.log('Error', err)
//             else {
//                 res.end(data);
//             }
//         })
//     }else{
//         res.writeHead(404, {'Content-type' : 'text/html'});
//         res.write('page not found');
//         res.end();
//     }
// })

// server.listen(4040);