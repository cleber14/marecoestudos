let soundSelect = document.querySelector(".soundBip");
const tdata = document.getElementsByTagName("tr");

for (let i = 0; i < tdata.length; i++) {
    tdata[i].addEventListener('mouseover', function() {
        soundSelect.currentTime = 0; // Reinicia o áudio do início
        soundSelect.play();
    });
}