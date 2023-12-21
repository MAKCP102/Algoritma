// let bill =10;
// let bill2 =20;
// let bill3 =30;

// if (bill>bill2 && bill>bill3) {
//     console.log(bill)
// } else if (bill2>bill && bill2>bill3) {
//     console.log(bill2)
// } else if (bill3>bill && bill3>bill2) {
//     console.log(bill3)
// } else (bill==bill2 && bill==3) 
//     console.log('semua bilangan sama')

//nomor 2//
// let angka = prompt ('masukkan angka selain 0');

// if (angka %2==0 && angka >0) {
//     console.log('genap positif')
// } else if (angka %2==0 && angka <0) {
//     console.log('genap negatif')
// } else if (angka %2==1 && angka >0) {
//     console.log('ganjil positif')
// } else if (angka %2==1 && angka <0) {
//     console.log('ganjil negatif')
// } else {
//     console.log('masukkan angka')
// }

// //nomor3//
// let saklar =1;

// if (saklar==1) {
//     console.log('ON')
// } else if (saklar==0) {
//     console.log('OFF')
// } else {
//     console.log('masukkan angka 1 atau 0')
// }


//nomor4//
// let br1 =50000;
// let br2 =30000;
// let br3 =30000;

// let total =br1+br2+br3
// let diskon =10/100*total

// if(total>100000) {
//     console.log(total-diskon)
// } else if (total<100000) {
//     console.log(total)
// }

// nomor5
// let jam = prompt ('masukkan jam kerja');

// if (jam <6) {
//     console.log('Rp100000')
// } else if (jam ==6) {
//     console.log('Rp200000')
// } else  {
//     console.log('Rp300000')
// }

// nomor6

// let kondisi = prompt ('masukkan kondisi air');

// if (kondisi <500) {
//     console.log('Aman')

// Penerimaan
let Jalur = 'Prestasi';
let NilaiUN= 85;
let TesMandiri= 80;

if (NilaiUN >=90 && NilaiUN <=100) {
    console.log('Nilai sempurna dan lolos')
} else if (NilaiUN >=80 && NilaiUN <=89) {
    if (Jalur == 'Prestasi') {
        console.log('jalur Prestasi')
    } else if (Jalur =='Rapot')
    console.log('Jalur Rapot')
} else if (TesMandiri >=79 && TesMandiri<=100) {
    console.log('Lolos Tes')
} else {console.log('Tes Gagal')}