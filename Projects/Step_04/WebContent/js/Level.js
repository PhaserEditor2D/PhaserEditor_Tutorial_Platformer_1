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

Level.prototype.init = function () {

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

};

Level.prototype.preload = function() {

	this.load.pack("level", "assets/assets-pack.json");

};

Level.prototype.create = function() {

	this.scene = new Scene1(this.game);

};

Level.prototype.update = function() {
	// TODO: generated method.
};