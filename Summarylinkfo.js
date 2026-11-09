function hitungDurasi(startValue, resolvedValue) {
  if (!startValue || !resolvedValue) return null;

  const start = new Date(startValue);
  const resolved = new Date(resolvedValue);

  let diffMs = resolved - start;
  if (isNaN(diffMs)) return null;
  if (diffMs < 0) diffMs = 0;

  const totalMenit = Math.round(diffMs / 60000);
  const jam = Math.floor(totalMenit / 60);
  const menit = totalMenit % 60;

  return `${jam} jam ${menit} menit`;
}

// "2026-11-08T21:02" -> "2026-11-08 21:02 WIB"
function formatTanggalJam(value, zona) {
  if (!value) return '-';
  return `${value.replace('T', ' ')} ${zona}`;
}

function generateSummaryLinkFO() {
  const deskripsi = document.getElementById('summary_deskripsi').value.trim();
  const frekuensi = document.getElementById('summary_frekuensi').value;
  const pola = document.getElementById('summary_pola').value.trim();
  const area = document.getElementById('summary_area').value.trim();

  const startValue = document.getElementById('summary_startDate').value;
  const resolvedValue = document.getElementById('summary_resolvedDate').value;
  const zona = document.getElementById('summary_zona').value;

  const tikorLat = document.getElementById('summary_tikorLat').value.trim();
  const tikorLong = document.getElementById('summary_tikorLong').value.trim();
  const detailGangguan = document.getElementById('summary_detailGangguan').value.trim();

  const penyebab = document.getElementById('summary_penyebab').value.trim();
  const perbaikan = document.getElementById('summary_perbaikan').value.trim();

  const output = document.getElementById('outSummaryLinkFO');

  const startTimeText = formatTanggalJam(startValue, zona);
  const resolvedTimeText = formatTanggalJam(resolvedValue, zona);
  const durasi = hitungDurasi(startValue, resolvedValue) || '-';

  let frekuensiText = frekuensi;
  if (pola) frekuensiText += ` (${pola})`;

  const tikorText = (tikorLat && tikorLong) ? `${tikorLat}, ${tikorLong}` : '-';

  output.innerText =
`1. Ringkasan
Deskripsi : ${deskripsi}
Frekuensi Problem : ${frekuensiText}
Area : ${area}
Start Time : ${startTimeText}
Resolved Time : ${resolvedTimeText}
Durasi : ${durasi}
-------------------------------------------------
2. Detail Spesifik Gangguan
Tikor : ${tikorText}
Detail gangguan : ${detailGangguan || '-'}
-------------------------------------------------
3. Analisa Penyebab Gangguan
Penyebab Gangguan : ${penyebab || '-'}
-------------------------------------------------
4. Tindakan Perbaikan
Perbaikan : ${perbaikan || '-'}`;
}