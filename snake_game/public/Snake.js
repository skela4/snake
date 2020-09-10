class	Snake
{
	constructor(color, x, y) {
		this.color = color;
		this.x_speed = 0;
		this.y_speed = 0;
		this.direction = null;
		this.tail = [{x,y}];
	}

	change_direction(direction) {
		if (this.tail.length > 1) {
			if (this.direction == 37 && direction == 39)
				return (0);
			else if (this.direction == 39 && direction == 37)
				return (0);
			else if (this.direction == 38 && direction == 40)
				return (0);
			else if (this.direction == 40 && direction == 38)
				return (0);
		}
		this.direction = direction;
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
		return (1);
	}

	eat(food) {
		if (this.tail[0].x == food.x && this.tail[0].y == food.y) {
			this.tail.push(food);
			return (1);
		}
		return (0);
	}

	collide_tail() {
		for (let i = 1; i < this.tail.length; i++) {
			if (this.tail[i].x == this.tail[0].x && this.tail[i].y == this.tail[0].y)
				return (1);
		}
		return (0);
	}

	update(width, height) {
		let total = this.tail.length - 1;
		for (total; total > 0; total--) {
			this.tail[total].x = this.tail[total - 1].x;
			this.tail[total].y = this.tail[total - 1].y;
		}
		this.tail[0].x = this.tail[0].x + this.x_speed;
		this.tail[0].y = this.tail[0].y + this.y_speed;

		if ((!(this.tail[0].x >= 0 && this.tail[0].x < width
			&& this.tail[0].y >= 0 && this.tail[0].y < height)) || this.collide_tail()) {
				return (0);
		}
		return (1);
	}

	show(ctx, scale) {
		ctx.fillStyle = this.color;
		for (let i = 0; i < this.tail.length; i++) {
			const element = this.tail[i];
			ctx.fillRect(element.x * scale + 1, element.y * scale + 1, scale - 2, scale - 2);
		}
		ctx.fill();
	}

	clear(ctx, scale) {
		for (let i = 0; i < this.tail.length; i++) {
			const element = this.tail[i];
			ctx.clearRect(element.x * scale + 1, element.y * scale + 1, scale - 2, scale - 2);
		}
	}

	destroy(ctx, scale) {
		this.x_speed = 0;
		this.y_speed = 0;
		this.clear(ctx, scale);
	}
}