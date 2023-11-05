const args = process.argv.slice(2);

const timer = function(delay) {
    const seconds = delay * 1000; // convert seconds to milliseconds
    setTimeout(() => {
        process.stdout.write('\u0007');
    }, (seconds));
};

for (const arg of args) {
    const delay = parseFloat(arg);
    if(isNaN(delay) || delay <= 0 || null) {
        console.log('Invalid argument.')
    } else {
        timer(delay);
        process.stdout.write('timer set');
    }
};