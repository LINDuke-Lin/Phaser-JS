# Phaser3 js 遊戲測試



### 筆記

1. 建立畫布
- 於`<bod>`加入div

``` 
 <div id="app"></div>
```

2. 建立場景

```javascript
   let scene = new Phaser.Scene('Game');

   let config = {
        type: Phaser.AUTO,	// 會使用 WebGL 或 Canvas API，AUTO 是讓 Phaser 決定
        width: 640,
        height: 320,
        scene			// 等同於 scene: scene
    }
```

3. 啟動遊戲

```javascript
 let game = new Phaser.Game(config)
```