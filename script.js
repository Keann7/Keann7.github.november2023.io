const password = 'sepeda'; // Ganti dengan kata sandi yang diinginkan

function checkPassword() {
  const passwordInput = document.getElementById('passwordInput').value;

  if (passwordInput === password) {
    window.location.href = 'halaman_ucapan.html'; // Ganti dengan halaman yang ingin diakses setelah kata sandi benar
  } else {
    document.getElementById('message').innerText = 'Kata Sandi Salah!';
  }
}
