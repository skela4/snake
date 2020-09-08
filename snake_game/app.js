
function startGame() {
	let game = new Game();
	let snake = new Snake(game.scale, "red", 4, 4);

	document.addEventListener('keydown', (event) => {

		snake.change_direction(event.keyCode);
	});
	game.init(snake);
	setInterval(() => {
		game.update(snake);
	}, 200)
}

document.addEventListener('DOMContentLoaded', function (event) {
	window.addEventListener('load', function () {
		startGame();
	});
});
