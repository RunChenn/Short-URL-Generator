
function copyUrl() {
    const shortenURL = document.getElementById("shortenURL");
    shortenURL.select();
    document.execCommand('copy');
    alert("複製連結成功！");
};