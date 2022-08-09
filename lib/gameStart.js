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
    this.load.image("bg", "./assets/backgrounds/bg_1.webp");
    this.load.image("start1", "./assets/others/start/start1.png");
    this.load.image("gameName", "./assets/others/gameName/alpacaSceneName.png");
  }

  /**
   * 生成物件
   */
  create() {
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    let gameName = this.add.sprite(width, height - 50, "gameName", 0);

    this.start1 = this.add
      .sprite(width, height + 50, "start1", 0)
      .setInteractive();

    this.start1.on("pointerdown", () => {
      this.startGame();
    });
  }

  /**
   * 更新畫面
   */
  update() {}

  /**
   * 場景跳轉
   */
  startGame() {
    game.scene.start("alpacaScene");
  }
}
