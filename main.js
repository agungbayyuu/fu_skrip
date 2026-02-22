function showTab(tab){
  tabFollow.style.display='none';
  tabBalas.style.display='none';
  tabFO.style.display='none';
  tabUpstream.style.display='none';
  tabTiketFOCut.style.display='none';
  tabUpdateTiketMonitoring.style.display='none';
  tabSpamEmail.style.display='none';


  if(tab==='follow') tabFollow.style.display='block';
  if(tab==='balas') tabBalas.style.display='block';
  if(tab==='fo') tabFO.style.display='block';
  if(tab==='upstream') tabUpstream.style.display='block';
  if(tab==='TiketFOCut') tabTiketFOCut.style.display='block';
  if(tab==='UpdateTiketMonitoring') tabUpdateTiketMonitoring.style.display='block';
  if(tab==='SpammingEmail') tabSpamEmail.style.display='block';
  


  const buttons = document.querySelectorAll('.sidebar button');
  
  // Hapus class 'active' dari semua button
  buttons.forEach(btn => btn.classList.remove('active'));

  // Tambahkan class 'active' ke button yang sedang diklik
  // Kita cari button berdasarkan ID yang sesuai dengan parameter 'tab'
  if (tab === 'follow') document.getElementById('mFollow').classList.add('active');
  if (tab === 'balas') document.getElementById('mBalas').classList.add('active');
  if (tab === 'fo') document.getElementById('mFO').classList.add('active');
  if (tab === 'upstream') document.getElementById('mUpstream').classList.add('active');
  if (tab === 'TiketFOCut') document.getElementById('mTiketFOCut').classList.add('active');
  if (tab === 'UpdateTiketMonitoring') document.getElementById('mUpdateTiketMonitoring').classList.add('active');
  if (tab === 'SpammingEmail') document.getElementById('mSpammingEmail').classList.add('active');
}

 function getWaktuWIB(){
      const now = new Date();
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit' };
      const hour = parseInt(new Intl.DateTimeFormat('id-ID', options).format(now));
      console.log(hour);

      if (hour >= 2 && hour < 11) return 'pagi';
      if (hour >= 11 && hour < 15) return 'siang';
      if (hour >= 15 && hour < 18) return 'sore';
      return 'malam';
}



