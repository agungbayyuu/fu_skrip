function generateFollowUp(){
  if(!nama.value) return outFollow.innerText='⚠️ Nama belum diisi';

  outFollow.innerText=
  `Selamat ${getWaktuWIB()}, kami informasikan untuk site ${nama.value} termonitoring down dalam sistem kami. Apabila ada kendala kelistrikan dapat diinformasikan ke kami. Terimakasih`;
}
