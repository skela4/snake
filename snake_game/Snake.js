class	Snake
{
	constructor(size, color, x, y) {
		this.x = x;
		this.y = y;
		this.x_speed = 0;
		this.y_speed = 0;
	}

	eat(food) {
		
	}

	change_direction(direction) {
		if (direction == 37) {
			this.x_speed = -1;
			this.y_speed = 0;
		}
		else if (direction == 38) {
			this.y_speed = -1;
			this.x_speed = 0;
		}
		else if (direction == 39) {
			this.x_speed = 1;
			this.y_speed = 0;
		}
		else if (direction == 40) {
			this.y_speed = 1;
			this.x_speed = 0;
		}
	}

	update(width, height) {
		this.x = this.x + this.x_speed;
		this.y = this.y + this.y_speed;
		if (!(this.x >= 0 && this.x < width && this.y >= 0 && this.y < height)) {
			alert("game over");
		}
			
	}

	show(ctx, scale) {
		ctx.fillStyle = "green";
		ctx.fillRect(this.x * scale + 1, this.y * scale + 1, scale - 2, scale - 2);
		ctx.fill();
	}

	clear(ctx, scale) {
        ctx.clearRect(this.x * scale + 1, this.y * scale + 1, scale - 2, scale - 2);
	}
}