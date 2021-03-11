let fs=require("fs");
//why do u wanted to run this and reading the file on the main thread
//and wait for some time and wait to do some another work
//do the another work if the work is indepedent on reading the file
//let content=fs.readFileSync("E:/web_development/3_web_scrapping/poc/f1.html")
console.log("before");
//this below function fs.readFile is an async function and with call back function
//if we wrtie like this readFileSync then this is synchronized function
fs.readFile("f2.html", 'utf8', function (err,data){
    if (err) {
      return console.log(err);
    }else if(err==null){
    console.log("reading the file");
    console.log(data)
    }
  });
  console.log("after");
  console.log("this is known as call back function");