(function(){
'use strict';

var initialShoppingList = [
{
	name: "Cookies",
	quantity: 10
},
{
	name: "Cakes",
	quantity: 20
},
{
	name: "Colas",
	quantity: 5
},
{
	name: "Chocolates",
	quantity: 7
},
{
	name: "Croissants",
	quantity: 14 
},
{
	name: "Chips",
	quantity: 15
}
];

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

	var toBuy = this;

	toBuy.toBuyList = ShoppingListCheckOffService.getInitialItems();
	console.log(toBuy.toBuyList);

	toBuy.buyItems = function(itemIdex){
		ShoppingListCheckOffService.buyItems(itemIdex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

	var bought = this;

	bought.boughtList = ShoppingListCheckOffService.getBoughtItems();
	console.log(bought.boughtList);

}

function ShoppingListCheckOffService(){

	var service = this;

	var toBuyItems = initialShoppingList;
	var boughtItems  = [];


	service.buyItems = function(itemIdex){
		boughtItems.push(toBuyItems[itemIdex]);
		toBuyItems.splice(itemIdex, 1);
	};


	service.getInitialItems = function(){
		return toBuyItems;
	};

	service.getBoughtItems = function(){
		return boughtItems;
	};
}


})();