// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
let request=require("request");
let cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary",cb)
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else if(err==null){
            let chselector=cheerio.load(html);
            //# for ids and . for class
            let lbc=chselector(".match-comment .d-flex.match-comment-padder.align-items-center .match-comment-long-text p");
            console.log(lbc.length);
            //console.log(lbc.html());//jitne elements hai usme se sirf first wala
            //lake dega yeh
            
          //  for(let i=0;i<lbc.length;i++){
            //    console.log(chselector(lbc[i]).text())
              //  console.log('\n')
           // }
            console.log(chselector(lbc[0]).text());
        }
    }
