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

// let nilaiUjian = [80, 75, 65, 45, 90, 90, 78, 80,35, 95];
// let totalNilai = nilaiUjian.reduce((startValue, currentValue) => startValue + currentValue, 0);
// let rataRata = totalNilai / nilaiUjian.length;
// console.log("Nilai Rata-Rata ICT Lv. X adalah =", rataRata);

// let nilaiUjian = [80, 75, 65, 45, 90, 90, 78, 80,35, 95];
// let lulus = nilaiUjian.filter;

// let namaDepan = "John";
// let namaBelakang = "Doe";
// let umur = 25;
// let status = "mahasiswa";
// console.log(namaDepan, namaBelakang, umur, status);

// let nilai = 10;
// if (nilai >= 90) {
//   console.log("Nilai A");
// } else if (nilai >= 80) {
//   console.log("Nilai B");
// } else {
//   console.log("Nilai C");
// }

// let umur = 14;
// if (umur >= 18) {
//   console.log("Anda sudah dewasa dan boleh membuat KTP");
// } else {
//   console.log("Anda masih anak-anak dan belum boleh membuat KTP");
// }

// let beratKayu = 320; // dalam kilogram
// if (beratKayu >= 500) {
//   console.log("Kayu ini termasuk overweight");
//   console.log("Berat kayu ini adalah " + beratKayu + " kg");
// }else if (beratKayu >= 400 && beratKayu <= 500) {
//   console.log("Kayu ini termasuk berat");
//   console.log("Berat kayu ini adalah " + beratKayu + " kg");
// } else {
//   console.log("Kayu ini termasuk ringan");
//   console.log("Berat kayu ini adalah " + beratKayu + " kg");
// }

let menu = ["Katsu", "Telur Asin", "Nasi Goreng", "Mie Ayam", "Sate Ayam"];
for (let i = 0; i < menu.length; i++) {
  if (menu[i] == "Katsu") {
    console.log("Aku Makan", menu[i]);

  } else if (menu[i] == "Telur Asin") {
    console.log("Aku Makan", menu[i]);
  } else {
    console.log("Aku Tidak Makan", menu[i]);
  }
}

let Menu = "Nasi Goreng";
if (Menu == "Katsu") {
  console.log("Aku Makan", Menu);
}else if (Menu == "Telur Asin") {
  console.log("Aku Makan", Menu);
} else if (Menu != "Katsu" && Menu != "Telur Asin") {
  console.log("Aku Tidak Makan", Menu);
}

