const btnTranslater = document.querySelector("#btn-translate")
const txtInput = document.querySelector('#txt-input')
const outputDiv = document.querySelector('#output')

function clickEventHandler() {
    // console.log('Clicked!!')
    // console.log('input', txtInput.value)
    outputDiv.innerText = 'akfjdnf '+txtInput.value
}

btnTranslater.addEventListener('click', clickEventHandler)