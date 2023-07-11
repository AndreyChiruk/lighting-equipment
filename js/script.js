let menuBtn = document.querySelectorAll('.menu-btn');
let menu = document.querySelectorAll('.menu');
let hide = document.querySelectorAll('.hide');
menuBtn[0].addEventListener('click',()=>{
	menu[0].classList.toggle('active')
	hide[0].classList.toggle('active')
	menuBtn[0].classList.toggle('opacity')
});
hide[0].addEventListener('click',()=>{
	menu[0].classList.toggle('active')
	hide[0].classList.toggle('active')
	menuBtn[0].classList.toggle('opacity')
});