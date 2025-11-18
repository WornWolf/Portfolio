function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copyText(icon) {
  const input = document.getElementById("discordID");

  // คัดลอกข้อความ
  navigator.clipboard.writeText(input.value)
    .then(() => {
      const btn = icon.parentElement; // div.copy-btn
      btn.classList.add("show-tooltip");

      // ซ่อน tooltip หลัง 1.5 วินาที
      setTimeout(() => {
        btn.classList.remove("show-tooltip");
      }, 1500);
    })
    .catch(err => console.error("เกิดข้อผิดพลาดในการคัดลอก: ", err));
}
