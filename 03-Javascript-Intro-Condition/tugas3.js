// Soal 1
console.log("============Soal 1============")

let namaLengkap = "Diana Kusuma";
console.log(namaLengkap)

// Soal 2
console.log("\n============Soal 2============")

let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariable = word + ' ' + second + ' ' + third;
console.log(outputGabunganVariable)

// Soal 3
console.log("\n============Soal 3============")

let hello = 'Hello '; 
let world = 'World!!'; 

let output = `${hello}${world}`
console.log(output)

// Soal 4
console.log("\n============Soal 4============")

let panjangPersegiPanjang = parseInt("8");
let lebarPersegiPanjang = parseInt("5");
let kelilingPersegiPanjang = 2 * ( panjangPersegiPanjang + lebarPersegiPanjang );

console.log(kelilingPersegiPanjang)

// Soal 5
console.log("\n============Soal 5============")

let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords= sentences.substring(4, 14) ; // do your own! 
let thirdWords= sentences.substring(15, 18); // do your own! 
let fourthWords= sentences.substring(19, 24); // do your own! 
let fifthWords= sentences.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

// Soal 6
console.log("\n============Soal 6============")

var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0]; 
var exampleSecondWord = sentence[2] + sentence[3]; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];   // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord = sentence[14] + sentence[15] // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21] + sentence[22]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord = sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

// Soal 7
console.log("\n============Soal 7============")

let txt = "I can eat bananas all day";
let hasil = txt.slice(10,17); //lakukan pengambilan kalimat di variable ini

console.log(hasil)

// Soal 8
console.log("\n============Soal 8============")

var nilaiDoe = 50;
console.log("nilai = "+nilaiDoe)

if(nilaiDoe >= 80){
    console.log("indeks = A")
}else if(nilaiDoe >= 70 && nilaiDoe < 80){
    console.log("indeks = B")
}else if(nilaiDoe >= 60 && nilaiDoe < 70){
    console.log("indeks = C")
}else if(nilaiDoe >= 50 && nilaiDoe < 60){
    console.log("indeks = D")
}else{
    console.log("indeks = E")
}

// Soal 9
console.log("\n============Soal 9============")

let angka = 2 ? console.log("angka nya 2") : console.log("bukan angka 2")

// Soal 10
console.log("\n============Soal 10============")

var traffic_lights = "red";

switch(traffic_lights){
    case "red":
        console.log("berhenti")
        break
    case "yellow":
        console.log("hati-hati")
        break
    case "green":
        console.log("berjalan")
        break
}
