function generateFO() {

  const w = getWaktuWIB();

  if (!nama_FO.value)
    return outFO.innerText = '⚠️ Nama belum diisi';

  // STATUS UP
  if (statusFO.value === 'up') {

    outFO.innerText =
`Selamat ${w}, 

Kami informasikan untuk link FO sudah kembali normal dan dalam monitoring kami. Untuk koneksi internet dapat dicoba kembali. 

Terima kasih. 
~${inisialFO.value}`;

  } else {

    // TEMPLATE DASAR
    let t =
`Selamat ${w}, 
    
Kami informasikan bahwa saat ini terdapat kendala pada link FO pada ${nama_FO.value}.`;

    // JIKA ADA BACKUP
    if (backup.value === 'ada') {

      t +=
`

Untuk menjaga konektivitas layanan, sementara ini koneksi dialihkan menggunakan link backup wireless. Saat ini gangguan pada link FO masih dalam proses pengecekan oleh tim kami.

Mohon maaf atas ketidaknyamanannya. 
Terima kasih. 
~${inisialFO.value}`;

    } 
    
    // JIKA TIDAK ADA BACKUP
    else {

      t +=
`

Saat ini gangguan pada link FO masih dalam proses pengecekan oleh tim kami.

Mohon maaf atas ketidaknyamanannya. 
Terima kasih. 
~${inisialFO.value}`;

    }

    outFO.innerText = t;
  }
}