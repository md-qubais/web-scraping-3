let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
function req(url){
    request(url,cb);
}

function cb(err, response, html) {
    let chselect=cheerio.load(html)
    //now lets retrieve winning team name
    let winning_team="";
    let teams=chselect(".teams>.team")
       for(let i=0;i<teams.length;i++){
        if(!chselect(teams[i]).hasClass("team-gray")){
            let name=chselect(teams[i])
            winning_team=chselect(name).find(".name-detail .name-link .name").text()
        }
    }
    let both_card=chselect(".Collapsible__contentInner");
    let names=chselect(".Collapsible .col ");
    for(let i=0;i<names.length;i++){
        if(chselect(names[i]).text().split("INNINGS")[0].trim()==winning_team){
            let hrs=chselect(both_card[i]).find(".table.batsman")
            for(let i=0;i<hrs.length;i++){
                let table=chselect(hrs[i]).find("tr")               
                let str=""
                let max=0
                for(let j=0;j<table.length-4;j++){
                    let row=chselect(table[j]).find("td")
                    let num=parseInt(chselect(row[2]).text())
                    let name=chselect(row[0]).text();
                    if(num>max){
                        str=name;
                        max=num
                    }                
                }
                console.log("the winning team is->"+winning_team);
                console.log("Highest run score by->"+str.split("(")[0]+"->"+max);
            }
            break;
        }
    }
}

module.exports={
    req:req
}