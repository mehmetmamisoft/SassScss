//klasik json
// $("button").click(function () {

//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () { işlem gerçekleşirse bunu yap


//         if (xhr.status === 200) { //hiçbir sorun yoksa

//             console.log(xhr.responseText);
//             parse ile parçaladık obj şeklinde geldu
//             var urun = JSON.parse(xhr.responseText);
//                console.log(urun["urunAdi"]); append ekle demek
//             $(".card-deck").append(' <div class="card"><div class="card-header"><h4 class="card-title">'+urun["urunAdi"]+'</h4></div> <div class="card-body"><p class="card-text">'+urun['urunAciklama']+'<br>'+urun['urunDetay']+'</p></div></div>')
//.html text append 
//         } 
//             console.log("dosya yok");
//         }
//     };
//     xhr.open("GET", "urunler.json", true); //asenkron yapı
//     xhr.send();



// });

//dizi json
// $("button").click(function () {
//     var xhr = new XMLHttpRequest();

//     xhr.onload = function () {
//         if (this.status === 200) {
//             var kisilerim = JSON.parse(this.responseText);
//             kisilerim.forEach(kisi => {
//                 $(".card-deck").append('<div class="card"><div class="card-header"><h4 class="card-title">'+kisi['userName']+ ''+kisi["userSurname"]+'</h4></div><div class="card-body"><p class="card-text">'+kisi["age"]+'</p></div></div > ');   
                
//             });
                    
//         } else {
//             $(".display-3").text("Hata kişiler dosyası bulunamadı!");

//         }

//     };



//     xhr.open("GET", "kisiler.json", true);
//     xhr.send();

// });

//promise başarılı yada başarısız getirir!!!
//buna bağlı  2 method döner then ve catch

var prms=new Promise(function (resolve,reject) {
    var sayi=1;
    if (sayi>0) {
        resolve("Sayı 0'dan büyüktür");
        
    }else{
        reject("Sayı 0'dan küçüktür");
        
    }
    
});

prms.then(function (result) {
    console.log(result);

}).catch(function(result){

    console.log("hata yakalandı"+result);
});