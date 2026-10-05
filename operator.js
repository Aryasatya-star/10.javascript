// let a= 10;
// let b= 3;
// let hasil = a ** b;

// let x = 10;
// x/=5;
// let angka= 5;
// let angka2="5";
// angka--;

// let fol = 5 == "5";


// console.log(fol);

// let umur = 18;
// let remaja=18;

// console.log(umur >= remaja);


// let namaDepan="John";
// let namaBelakang="Doe";
// console.log(namaDepan, namaBelakang);

// let nilai=[85, 90, 78, 92, 88];
// console.log(nilai[0]);
// let hasil = nilai[0]+nilai[1];
// let selisih = nilai[2]-nilai[3];
// console.log("Hasilnya", hasil, "Selisihnya", selisih);


// let harga =[1000, 2000, 3000, 5000];
// let jumlah = [1,2,3,4,5];
// let total=
//     harga[0]*jumlah[1] + 
//     harga[1]*jumlah[2] + 
//     harga[2]*jumlah[3] + 
//     harga[3]*jumlah[4];
// console.log("Totalnya", total, "rata-rata", total/4);

let nilaiUjian = [80, 90, 75, 85, 70];
let totalNilai = nilaiUjian.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let rataRata = totalNilai / nilaiUjian.length;
console.log("Total Nilai:", totalNilai);
console.log("Rata-rata Nilai:", rataRata);

// let namaDepan = "John";
// let namaBelakang = "Doe";
// let umur = 25;
// let status = "mahasiswa";
// console.log(namaDepan, namaBelakang, umur, status);