function generateFO(){
  const w=getWaktuWIB();
  if(statusFO.value==='up'){
    outFO.innerText=
    `Selamat ${w}, kami informasikan untuk link FO sudah kembali normal dan dalam monitoring kami. Untuk koneksi internet bisa dicoba kembali. Terimakasih. ~${inisialFO.value}`;
  } else {
    let t=`Selamat ${w}, kami informasikan bahwa saat ini terdapat kendala pada link FO. `;
    if(backup.value==='ada') t+=`Untuk sementara, koneksi menggunakan link backup wireless. `;
    t+=`Kendala link FO masih dalam proses pengecekan oleh tim kami. Mohon maaf atas ketidaknyamanannya. Terima kasih. ~${inisialFO.value}`;
    outFO.innerText=t;
  }
}