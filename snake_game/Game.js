class	Game
{
	constructor() {
		this.food = {x: 0, y: 0};
		this.scale = 20;
		this.canvas = document.createElement("canvas");
		this.canvas.width = 600;
		this.canvas.height = 600;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.create_map();
	}

	create_food(snake_array) {
		do {
			this.food = {
				x: Math.floor(Math.random() * this.canvas.width / this.scale),
				y: Math.floor(Math.random() * this.canvas.height / this.scale)
			};
		}
		while (snake_array.findIndex((element) => JSON.stringify(element) === JSON.stringify(this.food)) !== -1);
		this.context.fillStyle = "red";
		this.context.fillRect(this.food.x * this.scale + 1, this.food.y * this.scale + 1, this.scale - 2, this.scale - 2);
		this.context.fill();
	}

	create_map() {
		this.x_cell = Math.floor(this.canvas.width / this.scale);
		this.y_cell = Math.floor(this.canvas.height / this.scale);

		this.map = new Array(this.x_cell);
  
		for (var i = 0; i < this.map.length; i++) { 
			this.map[i] = new Array(this.y_cell); 
		} 		
		this.draw_map();
	}

	draw_map() {
		for (var i = 0; i <= this.x_cell; i++) { 
			for (var j = 0; j <= this.y_cell; j++) { 
				this.context.moveTo(i * this.scale, 0);
				this.context.lineTo(i * this.scale, this.canvas.height);
				this.context.stroke();
				this.context.moveTo(0, j * this.scale);
				this.context.lineTo(this.canvas.width, j * this.scale);
				this.context.stroke();
			}
		}
	}

	init(snake) {
		this.create_food(snake.tail);
		snake.show(this.context, this.scale);
	}
	
	update(snake) {
		// console.log(snake.tail)
		if (snake.eat(this.food))
			this.create_food(snake.tail);
		
		snake.clear(this.context, this.scale);
		snake.update(this.canvas.width / this.scale, this.canvas.height / this.scale);
		snake.show(this.context, this.scale);
	}

}