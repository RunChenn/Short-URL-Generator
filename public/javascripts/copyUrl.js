
const shortenURL = document.querySelector("#shortenURL");
const copyUrlBtn = document.querySelector("#copyUrlBtn");

function copyUrl() {
    shortenURL.select();
    document.execCommand('copy');
    alert(`複製連結成功！${shortenURL.innerText}`);
};

copyUrlBtn.addEventListener('click', copyUrl);
