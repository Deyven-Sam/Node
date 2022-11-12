const http=require ("http");
const fs=require ("fs");
var generator = require('generate-password');
var nodemailer = require('nodemailer');

console.log("HELLO WORLD")


const hostname="127.0.0.1";
const port=3000;

const server= http.createServer((req,res)=>{

});

server.listen(port,hostname,()=>{console.log("<h1>Hello Node!!!</h1>\n")})


fs.writeFile("welcome.txt","Hello Node",function(err){
  if (err){return console.error(err)}
})


fs.readFile("welcome.txt",function(err,data){
  if (err){return console.error(err)}
console.log(data.toString())
})




var password = generator.generate({
	length: 10,
	numbers: true,
  symbols:true,
  lowercase:true,
  uppercase:true,
  excludeSimilarCharacters:true,
});

console.log(password);



// 5
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'spencel1993@gmail.com',
    pass: 'isqaxftepgwriseg'
  }
});

var mailOptions = {
  from: 'spence1993@gmail.com',
  to: 'guesmimohamed596@gmail.com',
  subject: 'PASSWORD',
  text: `Use this one ${password}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
