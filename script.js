let qrfromEL = document.getElementById("qrForm");
let formDeta = document.getElementById("qrInputText");
let qrImageEl = document.getElementById("qrImage");
let qrContainerEl = document.getElementById("qrContainer");
let qrInputTextEl = document.getElementById("qrInputText");
let generateBtnEl = document.getElementById("generateBtn");
let renderQRCode = (url) => {
    if (!url) return;
    qrImageEl.src = url;
    generateBtnEl.innerText = "Generating Qr Code...";

    let interval = setInterval(() => {
        qrContainerEl.classList.add("show");
        clearInterval(interval);
        generateBtnEl.innerText = "Genrate QR Code";
      }, 500);
};
qrfromEL.addEventListener("submit", (event)=>{
    event.preventDefault();
    let textDeta = formDeta.value;
    // console.log(textDeta);
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textDeta}`;

    renderQRCode(url);
});
qrInputTextEl.addEventListener("keyup", () => {
    if (!qrInputTextEl.value.trim()) {
      qrContainerEl.classList.remove ("show");
    }
  });