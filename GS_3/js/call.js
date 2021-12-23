'use strict'

let script = document.createElement('script');

script.src = "https://randomuser.me/api?callback=jsonData";
document.body.appendChild(script);
document.body.removeChild(script);
  
//コールバックされたJSONデータの読み込み
function jsonData(data) {
    console.log(data);
    console.log(data.results[0].gender);
    let html = `Hello! ${data.results[0].name.first} ${data.results[0].name.last} (${data.results[0].login.username})`
    document.getElementById('call').append(html);
}

