function generateUpdateTiket() {
  const outUpdate = document.getElementById('outUpdateTiketMonitoring');
  
  // Mendapatkan tanggal hari ini dengan format Indonesia
  const options = { day: 'numeric', month: 'Long', year: 'numeric' };
  const tanggalHariIni = new Date().toLocaleDateString('id-ID', options);

  // Template teks
  outUpdate.innerText = 
`Dear Team

Berikut monitoring pada tanggal ${tanggalHariIni} : 

Terimakasih`;

  // Tambahkan animasi feedback yang kita buat sebelumnya
  triggerFeedback(event.target);
}