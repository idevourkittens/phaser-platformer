//@ts-check
import Phaser from "phaser";

export const TILE_SIZE = 18;
export const WIDTH = 500 * TILE_SIZE;
export const HEIGHT = 33 * TILE_SIZE;

export const COIN_COLLECTED_EVENT = "coin-collected";
export const events = new Phaser.Events.EventEmitter();

export const restartDialog = document.getElementById("restart-dialog");
export const restartButton = document.getElementById("restart-button");
export const scoreSpan = document.getElementById("score-span");

export const PLAYER_ANIMS = {
	idle: "idle",
	walk: "walk",
	run: "run",
	jump: "jump",
	cheer: "cheer",
	fall: "fall",
};