
const imgbox = document.getElementById("imgbox");
const qrImg = document.getElementById("qrimg");
const qrText = document.getElementById("qrText");

function genrateQrCode(){
    if(qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }

}