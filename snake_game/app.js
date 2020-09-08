function direction_left(snake) {
	snake.x_speed = -1;
	snake.y_speed = 0;
}

function direction_top(snake) {
	snake.y_speed = -1;
	snake.x_speed = 0;
}

function direction_right(snake) {
	snake.x_speed = 1;
	snake.y_speed = 0;
}

function direction_bottom(snake) {
	snake.y_speed = 1;
	snake.x_speed = 0;
}

function update_snake_direction(snake, direction) {
	if (direction == 37)
		direction_left(snake);
	else if (direction == 38)
		direction_top(snake);
	else if (direction == 39)
		direction_right(snake);
	else if (direction == 40)
		direction_bottom(snake);
}

function set_event(snake) {
	document.addEventListener('keydown', (event) => {
		update_snake_direction(snake, event.keyCode);
	});
}

function startGame() {
	let game = new Game();
	let snake = new Snake(game.scale, "red", 4, 4);

	set_event(snake);
	game.init(snake);
	setInterval(() => {
		game.update(snake);
	}, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
	window.addEventListener('load', function () {
		startGame();
	});
});
