radio.onReceivedNumber(function (receivedNumber) {
    if (myGuess == receivedNumber) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        radio.sendNumber(3)
        myGuess = 9
    } else if (myGuess == 0 && receivedNumber == 1) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(4)
        myGuess = 9
    } else if (myGuess == 0 && receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(5)
        myGuess = 9
    } else if (myGuess == 1 && receivedNumber == 0) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(5)
        myGuess = 9
    } else if (myGuess == 1 && receivedNumber == 2) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(4)
        myGuess = 9
    } else if (myGuess == 2 && receivedNumber == 0) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(4)
        myGuess = 9
    } else if (myGuess == 2 && receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(5)
        myGuess = 9
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        myGuess = 9
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Yes)
        myGuess = 9
    } else if (receivedNumber == 5) {
        basic.showIcon(IconNames.No)
        myGuess = 9
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(0)
    myGuess = 0
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(1)
    myGuess = 1
    basic.showLeds(`
        . # . . .
        # # . . .
        # # # # .
        # # . . .
        . # . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    radio.sendNumber(2)
    myGuess = 2
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # . .
        # . # . .
        `)
})
let myGuess = 0
radio.setGroup(777)
