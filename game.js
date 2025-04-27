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

// Загрузка спрайтов
function preload() {
    this.load.image("bitcoin", "assets/bitcoin.png");
    this.load.image("sec", "assets/sec.png");
}

// Создание объектов
function create() {
    this.player = this.add.sprite(100, 100, "bitcoin");
    this.sec = this.add.sprite(300, 300, "sec");
}

// Основной цикл
function update() {
    // Движение SEC (простейший AI)
    this.sec.x += 0.5;
}

const game = new Phaser.Game(config);
