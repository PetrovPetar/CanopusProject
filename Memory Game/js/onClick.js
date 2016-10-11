function draw() {
    let btn = document.getElementById('playBtn');
    btn.addEventListener('click', loading);

    function loading() {
        let ctx = document.getElementById('canvas').getContext('2d');

        ctx.fillStyle = 'blue';
        ctx.fillRect(100, 100, 410, 25);
        ctx.fillStyle = 'white';
        ctx.fillRect(105, 105, 400, 15);
        ctx.fillStyle = 'blue';

        let timer = setInterval(bit, 500);
        let progres = 0;

        function bit() {
            ctx.fillRect(107 + progres * 40, 107, 36, 11);
            progres++;
            if(progres == 10)clearInterval(timer);
        }
        requestAnimationFrame(loading);
    }
}