function init() {
    let img1= new Image();
    img1.src = '.src/1minion.jpg';

    let img2= new Image();
    img2.src = '.src/2minion.jpg';

    let img3= new Image();
    img3.src = '.src/3minion.jpg';

    let img4= new Image();
    img4.src = '.src/4minion.jpg';

    draw();

    function draw() {
        let ctx = document.getElementById('canvas').getContext('2d');

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let x = 2 + col * 100;
                let y = 2 + row * 100;
                ctx.fillStyle="#00ff00";
                ctx.fillRect(x, y, 96, 96);
            }
        }

        ctx.drawImage(img1, 0, 0);
        ctx.drawImage(img2, 0, 100)
    }
}

init();
