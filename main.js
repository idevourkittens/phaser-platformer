import './style.css'
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super("main-scene");
   }
   preload() {
    this.load.atlas("robot", "robot.png", "robot.json");
  }
   create() {
    let height = this.scale.height;
    let width = this.scale.width;
    let plr = this.add.sprite(width/2,height/2,"robot")
   }
   update() {}
}

/**@type {Phaser.Types.Core.GameConfig} */
const config = {
  type: Phaser.WEBGL,
  width: 400,
  height: 400,
  scene: [MainScene]
};

const game = new Phaser.Game(config);
