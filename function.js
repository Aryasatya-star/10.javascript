// function cekHarga(harga, jumlah) {
//     return new Promise((dipenuhi, tidakDipenuhi) => {
//         console.log("Sedang memproses nilai...");
//         setTimeout(() => {
//             const total = harga * jumlah;
//             console.log(`Total harga: ${total}`);
//             if (total >= 1000) {
//                 dipenuhi(`Harga Per Item: ${harga}, Jumlah Item: ${jumlah}, diskon = 5000 Total Belanja: ${total-5000}`);
//             } else {
//                 tidakDipenuhi(`Harga Per Item: ${harga}, Jumlah Item: ${jumlah}, Total Belanja: ${total}`);
//             }
//         }, 2000);
//     });
// }

// cekHarga(10000, 5)
//     .then((pesanJikaBerhasil) => {
//         console.log("Mendapatkan Diskon:", pesanJikaBerhasil);
//     })
//     .catch((pesanJikaGagal) => {
//         console.log("Gagal Mendapatkan Diskon:", pesanJikaGagal);
//     });

// function cekhargaSederhana(harga, jumlah){
//     return harga * jumlah;
// }

// let totalHarga = cekhargaSederhana(10000, 5);
// console.log(`harga apel per buah = 10000, jumlah apel = 5, diskon 5000 maka total harga = ${totalHarga - 5000}`);

// function operasiLingkaran(r, pi = 3.14) {
//     return new Promise((resolve, reject) => {
//         console.log("Sedang memproses nilai...");
//         setTimeout(() => {
//             if (r <= 0) {
//                 reject("Jari-jari harus lebih besar dari 0");
//             } else {
//                 const luas = pi * r**2;
//                 const keliling = 2 * pi * r;
//                 resolve({ luas, keliling });
//             }
//         }, 2000);
//     });
// }

// operasiLingkaran(7)
//     .then((hasil) => {
//         console.log(`Luas Lingkaran: ${hasil.luas} cm², Keliling Lingkaran: ${hasil.keliling} cm`);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });



// function operasiLingkaran(l,p,t) {
//     return new Promise((resolve, reject) => {
//         console.log("Sedang memproses nilai...");
//         setTimeout(() => {
//             if (r <= 0) {
//                 reject("Jari-jari harus lebih besar dari 0");
//             } else {
//                 const vol = p*l*t
//                 resolve(vol);
//             }
//         }, 2000);
//     });
// }

// operasiLingkaran(7)
//     .then((hasil) => {
//         console.log(`Luas Lingkaran: ${hasil.luas} cm², Keliling Lingkaran: ${hasil.keliling} cm`);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


// const rumusBalok=(p,l,t)=> {
//     return p*l*t
// }

// console.log(rumusBalok(8,2,2))

// const hitungTotal=(harga, jumlah)=>{
//     console.log(`Harga Apel Per Buah ${harga}, Jumlah: ${jumlah}`);
//     return harga*jumlah;
// }

// let total = hitungTotal(1000,2)
// let dis = 500
// let bayar = total-dis

// console.log("Harga Bayar:", bayar)

// function tampilkanNama(){
//     let umur = 17
//     console.log(umur)
// }
// tampilkanNama()

// let berat_badan = 70
// console.log(berat_badan)

// const beratBadan=(berat)=>{
//     console.log(berat)
// }

// beratBadan(200)
// console.log(berat) 

// //berikan aku

