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
	gameItem.querySelector('a').addEventListener('click', (e)=> {
		e.preventDefault();
		let key = e.target.closest('.modelo').getAttribute('data-key');
		modalKey = key;
		let modalQt = 1;

		c('.gameInfo h1').innerHTML = gameJson[key].name;
		c('.gameBig img').src = gameJson[key].img;
		c('.gameInfo--actualPrice').innerHTML = `R$ ${gameJson[key].price.toFixed(2)}`;
		c('.gameInfo--qt').innerHTML = modalQt;

		c('.gameWindowArea').style.opacity = 0;
		c('.gameWindowArea').style.display = 'flex';
		setTimeout(()=> {
		c('.gameWindowArea').style.opacity = 1;
		}),200;
	});

	c('.game-area').append(gameItem);
});

function closeModal() {
	c('.gameWindowArea').style.opacity = 0;
	setTimeout(()=>{
		c('.gameWindowArea').style.display = 'none';
	},500);
}
cs('.gameInfo--cancelButton, .gameInfo--cancelMobileButton').forEach((item)=>{
	item.addEventListener('click', closeModal);
});
c('.md').addEventListener('click', ()=>{
	
	if (modalQt >1) {
		modalQt--;
		c('.gameInfo--qt').innerHTML = modalQt;
	}
});
c('.ml').addEventListener('click', ()=>{
	if (modalQt <1) {
		modalQt++;
		c('.gameInfo--qt').innerHTML = modalQt;
	}
});
c('.gameInfo--addButton').addEventListener('click', ()=>{
	let identifier = gameJson[modalKey].id+'@';
	let key = cart.findIndex((item)=> item.identifier == identifier);
	if (key > -1) {
		cart[key].qt+=modalQt;
	}else {
		cart.push({
			identifier,
			id:gameJson[modalKey].id,
			qt:modalQt
		});

	}
	updateCart()
	closeModal();
});
c('.menu-openner').addEventListener('click', ()=>{
	if (cart.length >0) {
		c('aside').classList.add('show');
	}
});
c('.menu-closer').addEventListener('click', ()=>{
		c('aside').classList.remove('show');
});
function updateCart() {
	c('.menu-openner span').innerHTML = cart.length;

	if (cart.length > 0) {
		c('aside').classList.add('show');
		c('.cart').innerHTML = '';
		let subtotal = 0;
		let desconto = 0;
		let total = 0;


		for(let i in cart){
			let gameItem = gameJson.find((item) =>item.id == cart[i].id);
			subtotal += gameItem.price * cart[i].qt;

			let cartItem = c('.modelos .cart--item').cloneNode(true);
			cartItem.querySelector('img').src = gameItem.img;
			cartItem.querySelector('.cart--item-nome').innerHTML = gameItem.name;
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
			cartItem.querySelector('.md').addEventListener('click', ()=> {

			if (cart[i].qt>1) {
				cart[i].qt--;
			} else {
				cart.splice(i, 1);
			}
			updateCart();
			});

			c('.cart').append(cartItem);
		}
		desconto = subtotal * 0.1;
		total = subtotal - desconto;

		c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
		c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
		c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
	} else {
		c('aside').classList.add('show');
		c('aside').classList.remove('show');
	}
}
c('.openmen').addEventListener('click', ()=>{
	c('.menu-mob').style.width = '100vw';
});
c('.menu-mob span').addEventListener('click', ()=>{
	c('.menu-mob').style.width = '0';
});
c('.cart--finalizar').addEventListener('click', ()=>{
	alert('Atenção site em desenvolvimento.\n Por favor tire print do pedido antes de proseguir;\n Estamos redirecionando para o WHATSAPP;');
	setTimeout(()=>{
		window.location.assign("https://contate.me/pedidochgames");
	},1000);
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