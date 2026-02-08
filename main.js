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
  const h=new Date().toLocaleString('id-ID',{timeZone:'Asia/Jakarta',hour:'2-digit'});
  if(h>=4&&h<11) return 'pagi';
  if(h<15) return 'siang';
  if(h<18) return 'sore';
  return 'malam';
}
