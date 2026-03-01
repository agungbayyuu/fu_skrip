function generateLaporFO(){
  const user=document.getElementById('nama_user_lapor_fo').value;
  const w=getWaktuWIB();
  if(problemFO.value==='down'){
    outLaporFOProblem.innerText=
    `Selamat ${w} rekan, Mohon dibantu pengecekan link ${user} terpantau down dari monitoring kami. Terimakasih.`;
  } else {
    outLaporFOProblem.innerText=
    `Selamat ${w} rekan, Mohon dibantu pengecekan link ${user} terpantau intermitten dari monitoring kami. Terimakasih.`;
  }
}