/**
 * 起始場景
 */
class gameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }

  //   /**
  //    * 初始化
  //    */
  //   init() {}

  /**
   * 載入素材
   */
  preload() {
    console.log("pl");
    this.load.image("bg", "./assets/backgrounds/bg_1.webp");
    //this.load.image("player", "./assets/roles/alpaca.png");

    this.load.spritesheet("man", "./assets/roles/test.png", {
      frameWidth: 39, // 每幀圖片的寬 240 / 3
      frameHeight: 54, // 高度
    });
  }

  /**
   * 生成物件
   */
  create() {
    console.log("cr");
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    //this.man = this.add.sprite(50, 255, "man", 0);

    // this.anims.create({
    //   key: "turn",
    //   frames: [{ key: "man", frame: 0 }],
    //   frameRate: 10,
    // });

    // this.anims.create({
    //   key: "right",
    //   frames: this.anims.generateFrameNumbers("man", { start: 1, end: 2 }),
    //   frameRate: 10,
    //   repeat: -1,
    // });

    this.man = this.add.sprite(50, 255, "man", 0).setInteractive();

    this.input.setDraggable(this.man);

    this.input.enabled = false;

    // 偵聽 drag
    this.input.on("drag", function (pointer, gameObj, dragX, dragY) {
      gameObj.x = dragX;
      gameObj.y = dragY;
      console.log(gameObj);
      console.log(dragX);
      console.log(dragY);
    });

    let keyObj = scene.input.keyboard.addKey("W"); // Get key object
    let isDown = keyObj.isDown;

    keyObj.on("down", function (event) {
      console.log("嗨");
    });
  }

  /**
   * 更新畫面
   */
  update() {
    // if (this.input.activePointer.isDown) {
    //   this.man.anims.play("right", true);
    // } else {
    //   this.man.anims.play("turn");
    // }
  }

  //   actionOnClick() {
  //     // background.visible = !background.visible;
  //   }
}
