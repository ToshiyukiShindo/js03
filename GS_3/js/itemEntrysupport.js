'use strict'

const itemcode = document.getElementById('code');
const itemcategory = document.getElementById('category');
const itemname = document.getElementById('name');
const itemprice = document.getElementById('price');
const itemurl = document.getElementById('imgpass');
const resetBtn = document.getElementById('reset');

console.log(JSON.parse(localStorage.getItem('itemdata')));
if(JSON.parse(localStorage.getItem('itemdata'))){
    let itemdata2 = JSON.parse(localStorage.getItem('itemdata'));
    itemcode.value = itemdata2.id;
    itemcategory.value = itemdata2.category;
    itemname.value = itemdata2.name;
    itemprice.value = itemdata2.price;
    itemurl.value = itemdata2.url;
};

resetBtn.addEventListener('click',()=>{
    itemcode.value = "";
    itemcategory.value = "";
    itemname.value = "";
    itemprice.value = "";
    itemurl.value = "";

    let nodata = {
        id: "",
        url: "",
        category: "",
        name: "",
        price: ""
    }
    localStorage.setItem('itemdata',JSON.stringify(nodata));
});

window.addEventListener('beforeunload',()=>{
    alert('データを保存しましたか？Saveしなければデータは保存されません。');
    let nodata = {
        id: "",
        url: "",
        category: "",
        name: "",
        price: ""
    }
    localStorage.setItem('itemdata',JSON.stringify(nodata));
});