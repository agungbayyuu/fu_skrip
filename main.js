function showTab(tab){
  tabFollow.style.display='none';
  tabBalas.style.display='none';
  tabFO.style.display='none';
  tabUpstream.style.display='none';
  tabTiketFOCut.style.display='none';

  if(tab==='follow') tabFollow.style.display='block';
  if(tab==='balas') tabBalas.style.display='block';
  if(tab==='fo') tabFO.style.display='block';
  if(tab==='upstream') tabUpstream.style.display='block';
  if(tab==='TiketFOCut') tabTiketFOCut.style.display='block';
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



