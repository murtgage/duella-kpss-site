// Duella KPSS — tanıtım sitesi
// Oyun önizlemesindeki soru kartı için küçük bir etkileşim.
// Gerçek uygulama bağlantıları eklendiğinde bu dosya genişletilebilir.

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.classList.contains("correct")) return;

      option.style.opacity = "0.5";
      const correct = document.querySelector(".option.correct");
      if (correct) {
        correct.style.transform = "scale(1.08)";
        setTimeout(() => {
          correct.style.transform = "";
        }, 300);
      }
    });
  });
});
