var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	$('button').click(function(){
		var esp = $(this).attr("data-animal");//creer une var avec l'attribut "data-animal" de l'element "visé" (soit cat, bear ou fish)
		console.log(typeof(species[esp])); //on console.log de plein de façons differente pour tester (genre "typeof species.esp") qui marche pas.
		$("#holder").html( "<img src='img/" + species[esp] + "'>");	// une foi qu'on a la bonne on le rentre dans un bout
	});																// de html qu'on inject avec .html(""). (un peu comme innerHTML)


	// 1. placez un listener sur le click des éléments <button>								<<  GG'  >>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
}

$(document).ready(function(){
	main();
});