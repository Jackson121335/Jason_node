const request = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')
const fs = require('fs');
const { log } = require('console');
const { Http2ServerRequest } = require('http2');
const https = require('https');
const { it } = require('node:test');

request({
    url: 'https://pvp.qq.com/web201605/herolist.shtml',
    method: 'GET', 
    encoding: null},
    (error, response, body) => {
        var html = iconv.decode(body,'gb2312')
        var $ = cheerio.load(html,{
            decodeEntities:false
        })
        let allHero = [];
        $('.clearfix li').each(function(){
            const hero = $('img', this).attr('alt');
            const pic = $('img',this).attr('src');
            allHero.push({
                hero,pic
            })
        })
        fs.writeFile('./game.json',JSON.stringify(allHero),function(err){
            if(!err){
                log('writer end!')
            }
        })

        //图片下载
        downloadImage(allHero); 
    }
)
function downloadImage(allHero){
    console.log('下载图片');

    allHero.map((item)=>{
        console.log(item.hero);
    })

}