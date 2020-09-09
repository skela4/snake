function resumeGame(game_state) {
	if (game_state.pause == 1 && game_state.refresh_id != null) {
		game_state.pause = 0;
		game_state.refresh_id = setInterval(() => {
			game_state.game.update();
		}, 75);
	}
	return (game_state);
}

function startGame(game) {
	document.addEventListener('keydown', (event) => {
		game.snake.change_direction(event.keyCode);
	});
	game.init();
	return (setInterval(() => {
		game.update();
	}, 75));
}

function stopGame(game_state) {
	if (document.getElementById("snakegame") && game_state.game) {
		game_state = pauseGame(game_state);
		game_state.refresh_id = null;
		game_state.game.snake.clear(game_state.game.context, game_state.game.scale);
		console.log("stopping game")
	}
}

function pauseGame(game_state) {
	if (game_state.refresh_id != null && game_state.pause == 0) {
		game_state.pause = 1;
		clearInterval(game_state.refresh_id);
	}
	return game_state
}

function createObject() {
	// if (document.getElementById("snakegame"))
	// {
	// 	console.log("canvas exist");
	// }
	// else
	// {
	// 	console.log("canvas doesnt exist");
	// }
	let snake = new Snake("green", 4, 4);
	let game = new Game(snake);
	return (game);
}

document.addEventListener('DOMContentLoaded', function (event) {
	window.addEventListener('load', function () {
		let game = createObject();
		let refresh_id = startGame(game);
		let game_state = {
			game : game,
			refresh_id: refresh_id,
			pause: 0
		};

		document.getElementById('btn-pause').addEventListener("click", (e) => {
			game_state = pauseGame(game_state);
		});

		document.getElementById('btn-resume').addEventListener("click", (e) => {
			game_state = resumeGame(game_state);
		});

		document.getElementById('btn-stop').addEventListener("click", (e) => {
			stopGame(game_state);
		});
	});
});
