class	Snake
{
	constructor(size, color, x, y) {
		this.x = x;
		this.y = y;
		this.x_speed = 0;
		this.y_speed = 0;
	}

	update() {
		this.x = this.x + this.x_speed;
		this.y = this.y + this.y_speed;
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