// NAVBAR

const navToggle = document.querySelector('.nav__toggle')
const navMenuWrapper = document.querySelector('.nav__menu__wrapper')


navToggle.addEventListener('click', function () {
	navMenuWrapper.classList.toggle('show');
})


// PAGE TRANSITION
const allLink = document.querySelectorAll('a')
const pageTransition = document.querySelector('.page__transition')
const el_h1 = document.querySelector("h1")


window.addEventListener('load', function () {
	pageTransition.classList.add('hide');
	el_h1.classList.add("active");
})

allLink.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		pageTransition.classList.remove('hide')
		setTimeout(()=> {
			window.location.href = this.href
		}, 1200)
	})
})

setTimeout(()=> {
	el_h1.classList.remove("active");
}, 2000)


if (window.location.href === 'file:///C:/Users/ahmed%20yasser/Desktop/page-transition-main/index.html') {
	document.links.item(1).classList.add("active");
}

if (window.location.href === 'file:///C:/Users/ahmed%20yasser/Desktop/page-transition-main/about.html') {
	document.links.item(2).classList.add("active");
}

if (window.location.href === 'file:///C:/Users/ahmed%20yasser/Desktop/page-transition-main/blog.html') {
	document.links.item(3).classList.add("active");
}

if (window.location.href === 'file:///C:/Users/ahmed%20yasser/Desktop/page-transition-main/contact.html') {
	document.links.item(4).classList.add("active");
}


