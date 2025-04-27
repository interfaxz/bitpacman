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
    // Загружаем спрайт-лист для анимации Pacman
    // Предполагается, что у вас есть файл с несколькими кадрами
    this.load.spritesheet("bitcoin", "assets/bitcoin_sheet.png", {
        frameWidth: 32,  // Ширина одного кадра
        frameHeight: 32, // Высота одного кадра
        endFrame: 3      // Количество кадров
    });
    
    this.load.image("sec", "assets/sec.png");
}

function create() {
    // Создаем спрайт игрока
    player = this.add.sprite(400, 300, "bitcoin");
    
    // Создаем анимацию
    this.anims.create({
        key: "chomp",
        frames: this.anims.generateFrameNumbers("bitcoin", { 
            start: 0, 
            end: 3 
        }),
        frameRate: 10,
        repeat: -1
    });
    
    // Запускаем анимацию
    player.play("chomp");

    // Создаем призрака
    this.sec = this.add.sprite(200, 200, "sec");

    // Включаем управление клавиатурой
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Движение игрока
    if (cursors.left.isDown) {
        player.x -= 3;
        player.flipX = false; // Ориентация спрайта
    } else if (cursors.right.isDown) {
        player.x += 3;
        player.flipX = true;
    }
