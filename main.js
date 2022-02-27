import facts from './data.js'
import englishToMorse from './letters.js'
import morseToEnglish from './morseSymbols.js'
const englishInput = document.querySelector('.english')
const morseOutput = document.querySelector('.morse-output')
const morseInput = document.querySelector('.morse')
const englishOutput = document.querySelector('.english-output')
console.log(facts.length)
let carouselInner = document.querySelector('.carousel-inner')
console.log('englishToMorse :', englishToMorse)
console.log('morseToEnglish :', morseToEnglish)
console.log('morseOutput :', morseOutput)
console.log('englishOutput :', englishOutput)
facts.map((mfact, i) => {
	if (i === 0) {
		const fact = document.createElement('p')
		fact.innerHTML = `${mfact.fact} ${mfact.details}`
		fact.classList.add('carousel-item')
		fact.classList.add('active')
		carouselInner.appendChild(fact)
	} else {
		const fact = document.createElement('p')
		fact.innerHTML = `${mfact.fact} ${mfact.details}`
		fact.classList.add('carousel-item')
		carouselInner.appendChild(fact)
	}
})
function englishTextConverter() {
	let textArray = englishInput.value.toUpperCase().split('')
	console.log('textArray :', textArray)

	const convertedArray = textArray.map(letter => englishToMorse[letter])
	// textArray = textArray.join('')
	console.log('convertedArray :', convertedArray)
	console.log('newArr :', convertedArray.join(''))
	morseOutput.innerHTML = convertedArray.join('')
}
function morseTextConverter() {}
englishInput.addEventListener('input', englishTextConverter)
morseInput.addEventListener('input', morseTextConverter)
