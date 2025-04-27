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
this.anims.create({
    key: "chomp",
    frames: this.anims.generateFrameNumbers("bitcoin", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});
player.play("chomp");

this.anims.create({
    key: "chomp",
    frames: this.anims.generateFrameNumbers("bitcoin", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});
player.play("chomp");

function create() {
    // Добавляем спрайты
    player = this.add.sprite(400, 300, "bitcoin");
    this.sec = this.add.sprite(200, 200, "sec");

    // Включаем управление клавиатурой
    cursors = this.input.keyboard.createCursorKeys();
}

function create() {
    // Создаем спрайт игрока (уже есть у тебя)
    player = this.add.sprite(400, 300, "bitcoin");

    // --- НОВЫЙ КОД: Настройка анимации ---
    this.anims.create({
        key: "chomp", // Название анимации
        frames: [
            { key: "bitcoin", frame: 0 }, // Кадр 1: рот закрыт
            { key: "bitcoin", frame: 1 }, // Кадр 2: рот полуоткрыт
            { key: "bitcoin", frame: 2 }  // Кадр 3: рот открыт
        ],
        frameRate: 10, // Скорость (кадров в секунду)
        repeat: -1     // Бесконечный повтор
    });

    // Запускаем анимацию
    player.play("chomp");
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
