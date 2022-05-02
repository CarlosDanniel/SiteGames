let cart = [];
let modalKey = 0;
let modalQt = 1;

const c = (e)=> document.querySelector(e);
const cs = (e)=> document.querySelectorAll(e);



gameJson.map((item, index)=> {
	let gameItem = c('.areas .modelos .modelo').cloneNode(true);

	gameItem.setAttribute('data-key', index);
	gameItem.querySelector('.item-img img').src = item.img;
	gameItem.querySelector('.nome').innerHTML = item.name;
	gameItem.querySelector('.preço').innerHTML = `R$ ${item.price.toFixed(2)}`;
	gameItem.querySelector('a').href = item.link;

	c('.game-area').append(gameItem);
});
function abrir() {
	if (c('.menumobopen').classList.contains('abrir')) {
		c('.menumobopen').classList.remove('abrir');
	} else {
		c('.menumobopen').classList.add('abrir');
	}
}
function abrir1() {
	if (c('.menumobopen1').classList.contains('abrir')) {
		c('.menumobopen1').classList.remove('abrir');
	} else {
		c('.menumobopen1').classList.add('abrir');
	}
}
function abrir2() {
	if (c('.menumobopen2').classList.contains('abrir1')) {
		c('.menumobopen2').classList.remove('abrir1');
	} else {
		c('.menumobopen2').classList.add('abrir1');
	}
}