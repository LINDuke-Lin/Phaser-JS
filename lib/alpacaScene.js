/**
 * 草泥馬變身噴火場景
 */
class alpacaScene extends Phaser.Scene {
  constructor() {
    super({ key: "alpacaScene" });
  }

  /**
   * 載入素材
   */
  preload() {
    // 載入素材
    // bg1 -> 圖片載入後的物件名稱(key)
    this.load.image("bg1", "./assets/backgrounds/bg_1.webp");
    this.load.image("planet1", "./assets/backgrounds/planet.png");
    this.load.image("player1", "./assets/roles/alpaca.png");
    this.load.image("player2", "./assets/roles/pinkAlpaca.png");
    this.load.audio("music1", "./assets/music/crrect_answer3.mp3");

    //載入技能,使用迴圈載入
    for (let i = 1; i < 9; i++) {
      this.load.image("file" + i, `./assets/skills/fire/file-${i}.png`);
    }
  }

  /**
   * 生成物件
   */
  create() {
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg1");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    // 2. 角色
    this.player = this.add.sprite(450, 105, "player1");

    // 3. 行星
    this.planet1 = this.add.sprite(-100, 40, "planet1");

    // 4. 音樂
    this.music = this.sound.add("music1", {
      volume: 0.2, //音量
      loop: true, // 是否輪播
    });

    this.music.play();

    // 5. 技能
    this.file = this.add.sprite(360, 65, "file1");
    this.file.alpha = 0; //透明度設為0
  }

  /**
   * 初始化
   */
  init() {
    // 設定 行星 的速度
    this.planet1Speed = 3;
    //草泥馬陣列
    this.allPlayer = ["player1", "player2"];
    //計算時間軸
    this.index = 0;
    //噴火
    this.fileArr = [
      "file1",
      "file2",
      "file3",
      "file4",
      "file5",
      "file6",
      "file7",
      "file8",
    ];
  }

  /**
   * 更新畫面
   */
  update() {
    // 行星出現
    if (this.index < 50) this.planet1.x += this.planet1Speed;

    //草泥馬變身
    if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
      this.player.setTexture(this.allPlayer[this.index % 2]);

    //草尼馬噴火
    if (this.index > 200) {
      if (this.input.activePointer.isDown) {
        this.file.alpha = 100; //透明度設為100
        this.file.setTexture(this.fileArr[this.index % 8]);
      } else {
        this.file.alpha = 0; //透明度設為0
      }
    }

    this.index++;
  }
}
