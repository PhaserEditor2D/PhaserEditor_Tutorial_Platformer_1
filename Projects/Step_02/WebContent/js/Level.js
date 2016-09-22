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

	this.load.pack("level", "assets/assets-pack.json");

};

Level.prototype.create = function() {

	this.add.sprite(10, 10, "player");

};

Level.prototype.update = function() {
	// TODO: generated method.
};