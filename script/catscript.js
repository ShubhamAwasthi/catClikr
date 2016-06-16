var cat_list = ["dangerous dave","martin and lou","hector","crazy sam","chika"];
var src_list = ["images/cat_roll.jpg","images/contra_brothers.jpg","images/cute_cat.jpg","images/flower_power.jpg","images/let_me_out.jpg"];
var cat_count = [];

var current = 0;

function createList(){
	var list = document.createElement('ul');

	cat_list.forEach(function (item,index) {
		var cat_item = document.createElement('li');
		cat_item.innerHTML = item;
		list.appendChild(cat_item);
		cat_count.push(0);
	});


	document.getElementById('cat_list').appendChild(list);
}

createList();

document.getElementById('menu').addEventListener('click',function(e){
	e.stopImmediatePropagation();
	document.getElementById('cat_list').classList.toggle('open');
});

document.body.addEventListener('click',function(e){
	e.stopImmediatePropagation();
	document.getElementById('cat_list').classList.remove('open');
});

document.getElementById('cat_list').addEventListener('click',function(e){
	if(e.target.tagName.toLowerCase() ==='li'){
		e.stopImmediatePropagation();
		current = cat_list.findIndex(function(element, index, array){
			if(element === e.target.innerHTML)
				return true;
			return false;
		});
		setUpCat();
	}
});

function setUpCat(){
	document.getElementById('name').innerHTML = cat_list[current];
	document.getElementById('cat_img').src=src_list[current];
	document.getElementById('count').innerHTML = cat_count[current];
}

document.getElementById('cat_img').addEventListener('click',function(e){
	e.stopImmediatePropagation();
	incrementCountAndStore();
});

function incrementCountAndStore(){
	var count = document.getElementById('count');
	var val = parseInt(count.innerHTML);
	val = val +1;
	cat_count[current] = val;
	count.innerHTML = val;
}