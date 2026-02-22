
function generateSpamEmail(){
const waktu = getWaktuWIB();
  if(!email.value || !password_email.value) return outSpamEmail.innerText='⚠️ Nama dam Password belum diisi';

  outSpamEmail.innerText=
  `Selamat ${waktu} pak

Kami informasikan untuk email “${email.value}” terindikasi melakukan spamming. Untuk keamanan akun tersebut kami lakukan reset kredensial. Berikut Kredensial baru untuk akun tersebut.

username : ${email.value}
password : ${password_email.value}

Disarankan untuk melakukan reset kredensial menggunakan kombinasi password yang kuat dan berbeda dengan password sebelumnya dan melakukan scanning terhadap virus/malware/keylogger pada device yang digunakan untuk mengakses email.

Terimakasih
`;
}
