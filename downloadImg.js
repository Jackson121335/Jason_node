const fs = require('fs')
const request = require('request')
const path = require('path')
async = require("async");
const p = path.join(__dirname, './game.json')
const arr = require(p)


function downloadImage(arr) {

    const h = 'http:'
    arr.forEach(element => {
        const picUrl = h + element.pic;
        request(picUrl).pipe(
            fs.createWriteStream(`./imgs/${element.hero}.jpg`).on('close', err => { console.log(`${element.hero}.jpg下载成功`) })
        )
    });

}

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('------------下载图片start------------')
        resolve()
    }, 500)
}).then(function () {
    return new Promise((resolve, reject) => {
        downloadImage(arr)
        resolve()
    })
}).then(function () {
    setTimeout(() => {
        console.log('------------下载图片 end ------------')
    }, 2000)
})