let clicks = 0;
let max_clicks = 0;
let reset_percent = 0;

function buttonClick() {
    clicks += 1;
    update();
}

function update() {
    if (clicks > max_clicks) {
        max_clicks = clicks
    }

    reset_percent = clicks
    document.getElementById('score').innerText = clicks
    reset();
}

function reset() {
    if (Math.random() < reset_percent / 100) {
        reset_percent = 0;
        clicks = 0;
        reset_anim();
        
    }
}

function reset_anim() {
    document.getElementById('cover').className = 'absolute bg-red-700 h-0 w-screen top-[-100%] transition-all duration-500 animation';
    
    const animated = document.getElementById('cover');

    animated.onanimationend = () => {
        document.getElementById('cover').className = 'absolute bg-red-700 h-0 w-screen hidden top-[-100%] transition-all duration-500';
        reset_end();
    };

}

function reset_end() {
    document.getElementById('max_score').innerText = max_clicks;
    update();
}