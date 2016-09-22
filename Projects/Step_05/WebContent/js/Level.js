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

Level.prototype.init = function() {

	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;

};

Level.prototype.preload = function() {

	this.load.pack("level", "assets/assets-pack.json");

};

Level.prototype.create = function() {

	this.scene = new Scene1(this.game);

	// set the physics properties of the collision sprites
	this.scene.fCollisionLayer.setAll("body.immovable", true);
	this.scene.fCollisionLayer.setAll("body.allowGravity", false);
	// hide all objects of the collision layer
	this.scene.fCollisionLayer.setAll("renderable", false);

};

Level.prototype.update = function() {

	this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);

};