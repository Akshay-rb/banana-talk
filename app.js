const btnTranslater = document.querySelector("#btn-translate")
const txtInput = document.querySelector('#txt-input')

function clickEventHandler(){
    console.log('Clicked!!')
    console.log('input', txtInput.value)
}

btnTranslater.addEventListener('click',clickEventHandler )