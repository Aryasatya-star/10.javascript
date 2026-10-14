// let text = "Nama Saya Arya";
// let i2 = 0;

// console.log("=== Menggunakan For Loop ===");

// for (let i = 5; i < 8; i++) {
//     console.log(i);
// }

// console.log("=== Menggunakan While Loop ===");
// while (i2 < 5) {
//     console.log(text);
//     i2++;
// }

// console.log("=== Menggunakan Array Loop ===");
// let nilai = [80, 76, 90, 60, 100];
// for (let index = 0; index < nilai.length; index++) {
//     if (nilai[index] >= 90) {
//         console.log("Nilai Ujian", nilai[index], "Mendapatkan Nilai A");
//     } else if (nilai[index] >= 80 && nilai[index] < 90) {
//         console.log("Nilai Ujian", nilai[index], "Mendapatkan Nilai B");
//     } else if (nilai[index] >= 70 && nilai[index] < 80) {
//         console.log("Nilai Ujian", nilai[index], "Mendapatkan Nilai C");
//     } else if (nilai[index] >= 60 && nilai[index] < 70) {
//         console.log("Nilai Ujian", nilai[index], "Mendapatkan Nilai D");
//     } else if (nilai[index] < 60) {
//         console.log("Nilai Ujian", nilai[index], "Mendapatkan Nilai E");
//     }
// }

// console.log("=== Menggunakan For Loop i-- ===");

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

let number = [1,2,3,4,5,6,7,8,9,10];

// let genap = number.filter((num) => num % 2 === 0);
// console.log("Angka Genap:", genap);

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         console.log("Angka Genap:", number[i]);
//     } else {
//         console.log("Angka Ganjil:", number[i]);
//     }
// }

// let ganjil = number.filter((num) => num % 2 !== 0);
// console.log("Angka Ganjil:", ganjil);

// for (let i = 0; i <= number.length; i++) {
//     console.log(i, "x", 1, "=", i * 1);
// }

let total = 0
//untuk //definisi kondisi
for     (let i = 0; i < 5; i++) {//---lakukan
    total += number[i];//apa yang dilakukan
    console.log(`i=${i}, total=${total}`);
}
//artinya
//untuk kondisi berikut: i dimulai dari 0, selama i kurang dari 5, maka lakukan increment i sebanyak 1 setiap kali loop selesai. maka lakukan
//penjumlahan total dengan number[i] setiap kali loop selesai. sehingga total akan menjadi 1+2+3+4+5 = 15