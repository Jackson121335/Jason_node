// import * from './game.json'
const fs = require('fs')
const request = require('request')
const path = require('path')
async = require("async");
const p = path.join(__dirname, './game.json')
const arr = require(p)


downloadImage(arr)
function downloadImage(arr) {
    console.log('------------下载图片start------------');

    const h = 'http:'
    arr.forEach(element => {
        const picUrl = h + element.pic;
        request( picUrl ).pipe(
            fs.createWriteStream(`./imgs/${element.hero}.jpg`).on('close', err => { console.log(`${element.hero}.jpg写入成功`) })
        )
    });
    // setTimeout(()=>console.log('------------下载图片 end ------------'),2000)
    

}

console.log('------------下载图片 end ------------')