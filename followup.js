
function generateFollowUp(){

  const ini = document.getElementById("inisialFU").value;
  console.log(getWaktuWIB());
  if(!nama.value) return outFollow.innerText='⚠️ Nama belum diisi';

  outFollow.innerText=
`Selamat ${getWaktuWIB()}

Kami informasikan untuk perangkat di lokasi ${nama.value} termonitoring down dalam sistem kami. Mohon informasi apakah sedang ada kendala kelistrikan dilokasi?

Terimakasih
~${ini}`;
}
