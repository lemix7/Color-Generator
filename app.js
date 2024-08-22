let colorBall = document.querySelector('.color-ball-inside')
let hexCode = document.querySelector('.hex-code')
let generateBtn = document.querySelector('.generate-btn')
let copyBtn = document.querySelector('.copy-btn')
let tittle = document.querySelector('.tittle-copy')


let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

generateBtn.addEventListener('click',function(){
    
    let hexColor = '#'
    let tittleColor = '#'

    for(let i = 0 ; i<6;i++){
        hexColor += hex[Math.floor(Math.random()*hex.length)]
        tittleColor += hex[Math.floor(Math.random()*hex.length)]
    }

    colorBall.style.backgroundColor = hexColor
    hexCode.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    tittle.style.color = tittleColor

})

// copy funtion that uses the clipboard api to copy the text to the clipboard
copyBtn.addEventListener('click',function(){

    let textToCopy = hexCode.innerHTML

    navigator.clipboard.writeText(textToCopy).then(function() {
        showTemporaryText(hexCode,"copied ",500)
       
        })       

})



// Function to display text for a short duration and then hide it
function showTemporaryText(element, text, duration) {

    element.textContent = text; // Set the text

    setTimeout(function() {
        element.textContent = hexCode.textContent; 
    }, duration);
    
}