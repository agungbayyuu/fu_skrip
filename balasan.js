function generateBalasan(){

  const ini = document.getElementById("inisial").value;
  const nama = "Bapak/Ibu [Nama]";
  const waktu = getWaktuWIB();

  // TERIMA KOMPLAIN
  document.getElementById("outBalas").innerText =
`Selamat ${waktu} ${nama}.
Terima kasih atas informasinya dan mohon maaf atas ketidaknyamanannya🙏
Baik, mohon ditunggu kami akan melakukan pengecekan terkait kendala tersebut ~${ini}`;


  // UPDATE NON MASSAL
  document.getElementById("outUpdateNonMassal").innerText =
`Dari pengecekan awal kami, link kami terpantau normal dan dapat mengcover layanan saat ini,
mohon info detail kendalanya guna memudahkan kami dalam melakukan pengecekan lebih lanjut ~${ini}`;


  // UPDATE MASSAL
  document.getElementById("outUpdateMassal").innerText =
`Kami informasikan saat ini terdeteksi adanya gangguan pada link di area Bapak/Ibu.
Tim kami sedang melakukan penanganan, kami akan update kembali setelah ada perkembangan terbaru ~${ini}`;


  // OPTIMASI
  document.getElementById("outOptimasi").innerText =
`Dari pengecekan kami, link terpantau belum optimal dan memerlukan optimasi link.
Optimasi dilakukan via remote dan koneksi akan tidak stabil ±30-45 menit.

Mohon info optimasi dapat dilakukan pada jam berapa? ~${ini}`;


  // TAMBAHAN WAKTU
  document.getElementById("outTambahanWaktu").innerText =
`Mohon maaf kami memerlukan tambahan waktu untuk melakukan pengecekan.
Kami akan segera mengabari setelah pengecekan selesai ~${ini}`;


  // FOTO PERANGKAT
  document.getElementById("outFoto").innerText =
`Mohon bantuannya untuk mengirimkan foto perangkat (ONT/RB/AP/POE)
guna memudahkan pengecekan lebih lanjut ~${ini}`;


  // SOLVED
  document.getElementById("outSolved").innerText =
`Kami informasikan koneksi telah kembali normal.
Kendala terjadi karena [penyebab singkat].
Perbaikan telah dilakukan [tindakan].

Mohon dicoba kembali dan konfirmasi apakah sudah normal 🙏 ~${ini}`;
}
