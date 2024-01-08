const themeBtn = document.querySelector('.btn')
const arrowLeft = document.querySelector('#prev > svg')
const arrowRight = document.querySelector('#next > svg')
const footer = document.querySelector('footer')

themeBtn.addEventListener('click', () => {
	const mainElement = document.querySelector('body')
	const hasNightTheme = mainElement.classList.contains('nightTheme')
	const svg = document.querySelector('svg')
	const telegram = document.querySelector('.telegram')

	if (hasNightTheme) {
		footer.classList.remove('footer-bg')

		arrowRight.classList.remove('white')
		arrowLeft.classList.remove('white')
		telegram.classList.remove('white')
		svg.classList.remove('white')
		themeBtn.classList.remove('black')
		mainElement.classList.remove('nightTheme')
	} else {
		footer.classList.add('footer-bg')

		telegram.classList.add('white')
		arrowRight.classList.add('white')
		arrowLeft.classList.add('white')
		themeBtn.classList.add('black')
		svg.classList.add('white')
		mainElement.classList.add('nightTheme')
	}
})

// slider
let currentSlide = 0
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length

function showSlide(index) {
	if (index < 0) {
		currentSlide = totalSlides - 1
	} else if (index >= totalSlides) {
		currentSlide = 0
	} else {
		currentSlide = index
	}

	const newTransformValue = -currentSlide * 100 + '%'
	document.getElementById('slider').style.transform =
		'translateX(' + newTransformValue + ')'
}

function prevSlide() {
	showSlide(currentSlide - 1)
}

function nextSlide() {
	showSlide(currentSlide + 1)
}
