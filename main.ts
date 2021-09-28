let count = 0
let start = 0
let stop = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    count = 0
    start = 1
    stop = 0
})
input.onButtonPressed(Button.B, function () {
    start = 0
    stop = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    start = 0
    count = 0
})
basic.forever(function () {
    if (stop == 1) {
        count = 0
    } else {
        count += 1
        basic.pause(2500)
        basic.showNumber(count)
    }
})
