let QrInput = document.getElementById('qrInput');
let genBtn = document.getElementById('generateBtn')
let QrBox = document.querySelector('.qr-box')

genBtn.addEventListener('click',function(){

    let input = QrInput.value;
    if(input === ""){
        alert('write something!')
          return;
    }
  

    const QrUrl =  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + input;

    QrBox.innerHTML ="";

    const img = document.createElement('img')

    img.src = QrUrl;


    QrBox.appendChild(img)



})
