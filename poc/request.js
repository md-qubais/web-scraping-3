let request=require("request");
let cheerio=require("cheerio");
console.log("before");
request("https://www.google.com/",cb)
//here below is the call back function
    function cb(err,response,html){
        //console.log(html);
        let cheerio_selector=cheerio.load(html);
        let element=cheerio_selector("#RNmpXc");
       // console.log(element.text());
        //console.log(element.html());
      //  console.log(element);
       // console.log(element.html())
        console.log(element.text());
        //console.log(element.val());
    

    }
console.log("after");
