class	Game
{
	constructor() {
		this.scale = 20;
		this.canvas = document.createElement("canvas");
		this.canvas.width = 600;
		this.canvas.height = 600;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.create_map();
	}

	init(snake) {
		snake.show(this.context, this.scale);
	}
	
	update(snake) {
		this.update_snake(snake);
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

	update_snake(snake) {
		snake.clear(this.context, this.scale);
		snake.update();
		snake.show(this.context, this.scale);
	}
}