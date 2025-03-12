let toastBox = document.getElementById("toast-box");
let successMsg = "<i class='fa-solid fa-circle-check'></i> Successful";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i> Something went wrong";
let invalidMsg = "<i class='fa-solid fa-circle-exclamation'></i> Invalid Input";

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('wrong')){
        toast.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove()
    },3000)
}


