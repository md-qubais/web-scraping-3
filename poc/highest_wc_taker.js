// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
let request=require("request");
let cheerio=require("cheerio");
request(" https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",cb)
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else if(err==null){
            let chselector=cheerio.load(html);
            let hwc=chselector(".table.bowler");
            //# for ids and . for class
            //console.log(hwc.length);
            let str="";
            for(let i=0;i<hwc.length;i++){
                let bowlers=chselector(hwc[i]).find("tr")
                for(let j=0;j<bowlers.length;j++){
                    let td=chselector(bowlers[j]).find("td")
                    console.log(chselector(td[0]).text(),"  ",chselector(td[4]).text());
                }
                console.log();
            }
            console.log(str);
        }
    }
