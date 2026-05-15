
function generateFollowUp(){

  const ini = document.getElementById("inisialFU").value;
  console.log(getWaktuWIB());
  if(!nama.value) return outFollow.innerText='⚠️ Nama belum diisi';

  outFollow.innerText=
`Selamat ${getWaktuWIB()}

Kami informasikan untuk site ${nama.value} termonitoring down dalam sistem kami. Apabila terdapat kendala koneksi dapat diinformasikan pada kami, atau mohon informasi apa sedang kendala kelistrikan dilokasi?

Terimakasih
~${ini}`;
}
