let request=require("request");
let cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard",cb)
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else if(err==null){
            let chselector=cheerio.load(html);
           let hrs=chselector(".table.batsman")
           for(let i=0;i<hrs.length;i++){
               let table=chselector(hrs[i]).find("tr")
               
              // let table=chselector(hrs[i]).hasClass("abc")
              //the above .hasClass returns true if it contains that particular class
              //else false if it does not contains any class
               let str=""
               let max=0
               for(let j=0;j<table.length-4;j++){
                   let row=chselector(table[j]).find("td")
                   //console.log(chselector(row[0]).text()," ",chselector(row[2]).text())
                   let num=parseInt(chselector(row[2]).text())
                   let name=chselector(row[0]).text();
                   if(num>max){
                       str=name;
                       max=num
                   }                
               }
               console.log("Highest run score by->"+str+"->"+max);
               console.log("------------------------------------------------------------")
           }
        }
    }