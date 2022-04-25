let cart = [];
let modalKey = 0;


const c = (e)=> document.querySelector(e);
const cs = (e)=> document.querySelectorAll(e);



gameJson.map((item, index)=> {
	let gameItem = c('.areas .modelos .modelo').cloneNode(true);

	gameItem.setAttribute('data-key', index);
	gameItem.querySelector('.item-img img').src = item.img;
	gameItem.querySelector('.nome').innerHTML = item.name;
	gameItem.querySelector('.preço').innerHTML = `R$ ${item.price.toFixed(2)}`;
	gameItem.querySelector('.modelo a').addEventListener('click', (e)=> {
		e.preventDefault();
		let key = e.target.closest('.modelo').getAttribute('data-key');
		modalKey = key;

		c('.gameInfo h1').innerHTML = gameJson[key].name;
		c('.gameBig img').src = gameJson[key].img;
		c('.gameInfo--actualPrice').innerHTML = `R$ ${gameJson[key].price.toFixed(2)}`;
		c('.gameInfo--addButton a').href = item.link;


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