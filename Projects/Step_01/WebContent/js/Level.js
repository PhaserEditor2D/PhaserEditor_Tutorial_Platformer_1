/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Level.prototype = proto;
Level.prototype.constructor = Level;

Level.prototype.preload = function() {
	// TODO: generated method.
};

Level.prototype.create = function() {
	
	this.add.text(10, 10, "hello world!", {
		fill : "#fff"
	});
	
};

Level.prototype.update = function() {
	// TODO: generated method.
};