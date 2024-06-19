let bilgisayar = 0;
let oyuncu = 0;

const secim = (sec) => {
  let bilSecim = bilgisayarSecim();

  if (sec == 1) {
    if (bilSecim == 1) {
      bilAlanGoster("Taş");
      sonucGoster("warning", "Berabere!");
    } else if (bilSecim == 2) {
      bilAlanGoster("Kağıt");
      sonucGoster("danger", "Kaybettin!");
      bilgisayar++;
      skorTablosu();
    } else {
      bilAlanGoster("Makas");
      sonucGoster("success", "Kazandın!");
      oyuncu++;
      skorTablosu();
    }
  } else if (sec == 2) {
    if (bilSecim == 1) {
      bilAlanGoster("Taş");
      sonucGoster("success", "Kazandın!");
      oyuncu++;
      skorTablosu();
    } else if (bilSecim == 2) {
      bilAlanGoster("Kağıt");
      sonucGoster("warning", "Berabere!");
    } else {
      bilAlanGoster("Makas");
      sonucGoster("danger", "Kaybettin!");
      bilgisayar++;
      skorTablosu();
    }
  } else {
    if (bilSecim == 1) {
      bilAlanGoster("Taş");
      sonucGoster("danger", "Kaybettin!");
      bilgisayar++;
      skorTablosu();
    } else if (bilSecim == 2) {
      bilAlanGoster("Kağıt");
      sonucGoster("succes", "Kazandın!");
      oyuncu++;
      skorTablosu();
    } else {
      bilAlanGoster("Makas");
      sonucGoster("warning", "Berabere!");
    }
  }
};
const bilgisayarSecim = () => {
  let min = 1;
  let max = 3;
  let bilSecim = Math.floor(Math.random() * (max - min + 1)) + min;
  return bilSecim;
};

const bilAlanGoster = (yazi) => {
  let bilAlan = document.getElementById("bilAlan");
  bilAlan.innerHTML = `
  <div class="bg-info card p-5">
  <h3 class="text-center">${yazi}</h3>
</div>
  `;
};
const sonucGoster = (renk, yazi) => {
  let sonucAlan = document.getElementById("sonucAlan");
  sonucAlan.innerHTML = `
  <div class="bg-${renk} card p-5">
  <h3 class="text-center">${yazi}</h3>
</div>
  `;
};
const skorTablosu = () => {
  let bilSonuc = document.getElementById("bilSonuc");
  let oyuncuSonuc = document.getElementById("oyuncuSonuc");
  bilSonuc.innerHTML = bilgisayar;
  oyuncuSonuc.innerHTML = oyuncu;
};
