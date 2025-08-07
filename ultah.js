// Tunggu sampai seluruh halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen tombol dan bagian surprise
  const openGiftBtn = document.getElementById("openGiftBtn");
  const surpriseSection = document.getElementById("surpriseSection");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const giftImage = document.getElementById("giftImage");

  // Event ketika tombol "Buka Kado" diklik
  openGiftBtn.addEventListener("click", function () {
    surpriseSection.style.display = "block";
    openGiftBtn.style.display = "none"; // Sembunyikan tombol buka kado
    giftImage.style.display = "none";
  });

  // Event ketika tombol WhatsApp diklik
  whatsappBtn.addEventListener("click", function () {
    // Ganti nomor dan pesan sesuai keinginan Anda
    const nomor = "6285365399170"; // Ganti dengan nomor Anda
    const pesan =
      "Terima kasih atas ucapan ulang tahunnya memey ku cantik! 😊🎉";

    // Buat link WhatsApp
    const whatsappLink = `https://wa.me/${nomor}?text=${pesan}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappLink, "_blank");
  });
});
