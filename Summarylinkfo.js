function hitungDurasi(startDate, startTime, resolvedDate, resolvedTime) {
  if (!startDate || !startTime || !resolvedDate || !resolvedTime) return null;

  const start = new Date(`${startDate}T${startTime}:00`);
  const resolved = new Date(`${resolvedDate}T${resolvedTime}:00`);

  let diffMs = resolved - start;
  if (isNaN(diffMs)) return null;
  if (diffMs < 0) diffMs = 0;

  const totalMenit = Math.round(diffMs / 60000);
  const jam = Math.floor(totalMenit / 60);
  const menit = totalMenit % 60;

  return `${jam} jam ${menit} menit`;
}

function formatTanggalJam(dateStr, timeStr, zona) {
  if (!dateStr || !timeStr) return '-';
  return `${dateStr} ${timeStr} ${zona}`;
}

function generateSummaryLinkFO() {
  const deskripsi = document.getElementById('summary_deskripsi').value.trim();
  const frekuensi = document.getElementById('summary_frekuensi').value;
  const pola = document.getElementById('summary_pola').value.trim();
  const area = document.getElementById('summary_area').value.trim();

  const startDate = document.getElementById('summary_startDate').value;
  const startTime = document.getElementById('summary_startTime').value;
  const resolvedDate = document.getElementById('summary_resolvedDate').value;
  const resolvedTime = document.getElementById('summary_resolvedTime').value;
  const zona = document.getElementById('summary_zona').value;

  const tikorLat = document.getElementById('summary_tikorLat').value.trim();
  const tikorLong = document.getElementById('summary_tikorLong').value.trim();
  const detailGangguan = document.getElementById('summary_detailGangguan').value.trim();

  const penyebab = document.getElementById('summary_penyebab').value.trim();
  const perbaikan = document.getElementById('summary_perbaikan').value.trim();

  const output = document.getElementById('outSummaryLinkFO');

  if (!deskripsi || !area || !startDate || !startTime || !resolvedDate || !resolvedTime) {
    output.innerText = '⚠️ Mohon lengkapi minimal Deskripsi, Area, Start Time, dan Resolved Time';
    return;
  }

  const startTimeText = formatTanggalJam(startDate, startTime, zona);
  const resolvedTimeText = formatTanggalJam(resolvedDate, resolvedTime, zona);
  const durasi = hitungDurasi(startDate, startTime, resolvedDate, resolvedTime) || '-';

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