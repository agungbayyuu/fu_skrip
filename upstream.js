function generateUpstream(){
  const w=getWaktuWIB();
  if(statusUpstream.value==='up'){
    outUpstream.innerText=`Selamat ${w}, kami informasikan untuk saat ini link internasional sudah normal kembali dan dalam monitoring kami. Untuk koneksi internet dapat dicoba kembali. Terimakasih.`;
  } else {
    outUpstream.innerText=`Selamat ${w}, kami informasikan untuk saat ini terjadi kendala pada link internasional kami dan dalam pengecekan tim lebih lanjut. Mohon maaf untuk kendalanya. Terimakasih.`;
  }
}