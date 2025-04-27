const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: "game"
};

let player;
let cursors;

function preload() {
    this.load.image("bitcoin", "assets/bitcoin.png");
    this.load.image("sec", "assets/sec.png");
}

function create() {
    // Добавляем спрайты
    player = this.add.sprite(400, 300, "bitcoin");
    this.sec = this.add.sprite(200, 200, "sec");

    // Включаем управление клавиатурой
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Движение игрока
    if (cursors.left.isDown) {
        player.x -= 3;
    } else if (cursors.right.isDown) {
        player.x += 3;
    }
    if (cursors.up.isDown) {
        player.y -= 3;
    } else if (cursors.down.isDown) {
        player.y += 3;
    }

    // Движение SEC (простой AI)
    this.sec.x += 0.5;
}

const game = new Phaser.Game(config);
