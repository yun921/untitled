basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x + y, y)
            basic.pause(100)
        }
    }
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(-1 - x + y, y)
            basic.pause(100)
        }
    }
})
