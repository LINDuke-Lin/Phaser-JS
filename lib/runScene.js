/**
 * 跑跑哥布林場景
 */
class runScene extends Phaser.Scene {
  constructor() {
    super({ key: "runScene" });
  }

  /**
   * get random
   * @returns 1~3
   */
  #getRandom() {
    let res = Math.floor(Math.random() * 4);

    if (res === 0) res += 1;

    console.log("速度 : " + res);
    return res;
  }

  /**
   * 加載資源
   */
  preload() {
    this.load.image("bg1", "./img/background.webp");
    this.load.image("bg2", "./img/background2.webp");

    for (let i = 1; i < 8; i++) {
      this.load.image("player" + i, `./img/Goblin/frame-1${i + 1}.gif`);
      this.load.image("player1" + i, `./img/Goblin1/frame-1${i + 1}.gif`);
    }
  }

  /**
   * 建立資源
   */
  create() {
    let bg = this.add.sprite(0, 0, "bg2");

    //取得寬高
    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    bg.setPosition(width / 2, height / 2);

    this.player = this.add.sprite(50, 223, "player1");
    this.player2 = this.add.sprite(50, 123, "player11");
    //this.player.setAngle(20)
  }

  /**
   * 初始化
   */
  init() {
    // 設定 player 的速度
    this.playerSpeed = this.#getRandom();
    this.player2Speed = this.#getRandom();
    this.index = 0;
    this.playerArr = [
      "player1",
      "player2",
      "player3",
      "player4",
      "player5",
      "player6",
    ];
    this.player2Arr = [
      "player11",
      "player12",
      "player13",
      "player14",
      "player15",
      "player16",
    ];
  }

  /**
   *  更新畫面
   */
  update() {
    if (this.input.activePointer.isDown) {
      this.player.x += this.playerSpeed;
      this.player.setTexture(this.playerArr[this.index % 6]);

      this.player2.x += this.player2Speed;
      this.player2.setTexture(this.player2Arr[this.index % 6]);
      this.index++;
    }
  }
}
