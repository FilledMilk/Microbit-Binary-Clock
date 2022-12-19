function showTenMinute () {
    tenMinute.setBrightness(brightVal)
    if (tenMinuteTime == 0) {
        tenMinute.clear()
        tenMinute.setPixelColor(2, zeroColor)
        tenMinute.setPixelColor(1, zeroColor)
        tenMinute.setPixelColor(0, zeroColor)
        tenMinute.show()
    } else if (tenMinuteTime == 1) {
        tenMinute.clear()
        tenMinute.setPixelColor(2, zeroColor)
        tenMinute.setPixelColor(1, zeroColor)
        tenMinute.setPixelColor(0, clockColor)
        tenMinute.show()
    } else if (tenMinuteTime == 2) {
        tenMinute.clear()
        tenMinute.setPixelColor(2, zeroColor)
        tenMinute.setPixelColor(1, clockColor)
        tenMinute.setPixelColor(0, zeroColor)
        tenMinute.show()
    } else if (tenMinuteTime == 3) {
        tenMinute.clear()
        tenMinute.setPixelColor(2, zeroColor)
        tenMinute.setPixelColor(1, clockColor)
        tenMinute.setPixelColor(0, clockColor)
        tenMinute.show()
    } else if (tenMinuteTime == 4) {
        tenMinute.clear()
        tenMinute.setPixelColor(2, clockColor)
        tenMinute.setPixelColor(1, zeroColor)
        tenMinute.setPixelColor(0, zeroColor)
        tenMinute.show()
    } else if (tenMinuteTime == 5) {
        tenMinute.clear()
        tenMinute.setPixelColor(2, clockColor)
        tenMinute.setPixelColor(1, zeroColor)
        tenMinute.setPixelColor(0, clockColor)
        tenMinute.show()
    }
}
// Done
function showUnitMinute () {
    unitMinute.setBrightness(brightVal)
    if (unitMinuteTime == 0) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, zeroColor)
        unitMinute.setPixelColor(2, zeroColor)
        unitMinute.setPixelColor(3, zeroColor)
        unitMinute.show()
    } else if (unitMinuteTime == 1) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, zeroColor)
        unitMinute.setPixelColor(2, zeroColor)
        unitMinute.setPixelColor(3, clockColor)
        unitMinute.show()
    } else if (unitHourTime == 2) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, zeroColor)
        unitMinute.setPixelColor(2, clockColor)
        unitMinute.setPixelColor(3, zeroColor)
        unitMinute.show()
    } else if (unitMinuteTime == 3) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, zeroColor)
        unitMinute.setPixelColor(2, clockColor)
        unitMinute.setPixelColor(3, clockColor)
        unitMinute.show()
    } else if (unitMinuteTime == 4) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, clockColor)
        unitMinute.setPixelColor(2, zeroColor)
        unitMinute.setPixelColor(3, zeroColor)
        unitMinute.show()
    } else if (unitMinuteTime == 5) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, clockColor)
        unitMinute.setPixelColor(2, zeroColor)
        unitMinute.setPixelColor(3, clockColor)
        unitMinute.show()
    } else if (unitMinuteTime == 6) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, clockColor)
        unitMinute.setPixelColor(2, clockColor)
        unitMinute.setPixelColor(3, zeroColor)
        unitMinute.show()
    } else if (unitMinuteTime == 7) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, zeroColor)
        unitMinute.setPixelColor(1, clockColor)
        unitMinute.setPixelColor(2, clockColor)
        unitMinute.setPixelColor(3, clockColor)
        unitMinute.show()
    } else if (unitMinuteTime == 8) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, clockColor)
        unitMinute.setPixelColor(1, zeroColor)
        unitMinute.setPixelColor(2, zeroColor)
        unitMinute.setPixelColor(3, zeroColor)
        unitMinute.show()
    } else if (unitMinuteTime == 9) {
        unitMinute.clear()
        unitMinute.setPixelColor(0, clockColor)
        unitMinute.setPixelColor(1, zeroColor)
        unitMinute.setPixelColor(2, zeroColor)
        unitMinute.setPixelColor(3, clockColor)
        unitMinute.show()
    }
}
input.onButtonPressed(Button.A, function () {
    if (brightVal > 0) {
        strip.setBrightness(brightVal)
        brightVal += -25
        if (brightVal < 0) {
            brightVal = 0
        }
    } else {
        brightVal = 255
    }
})
function getUnitSecondTime () {
    if (DS3231.second() < 10) {
        unitSecondTime = DS3231.second()
    } else {
        unitSecondTime = DS3231.second() % 10
    }
}
// Done
function showUnitSecond () {
    unitSecond.setBrightness(brightVal)
    if (unitSecondTime == 0) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, zeroColor)
        unitSecond.setPixelColor(2, zeroColor)
        unitSecond.setPixelColor(3, zeroColor)
        unitSecond.show()
    } else if (unitSecondTime == 1) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, zeroColor)
        unitSecond.setPixelColor(2, zeroColor)
        unitSecond.setPixelColor(3, clockColor)
        unitSecond.show()
    } else if (unitSecondTime == 2) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, zeroColor)
        unitSecond.setPixelColor(2, clockColor)
        unitSecond.setPixelColor(3, zeroColor)
        unitSecond.show()
    } else if (unitSecondTime == 3) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, zeroColor)
        unitSecond.setPixelColor(2, clockColor)
        unitSecond.setPixelColor(3, clockColor)
        unitSecond.show()
    } else if (unitSecondTime == 4) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, clockColor)
        unitSecond.setPixelColor(2, zeroColor)
        unitSecond.setPixelColor(3, zeroColor)
        unitSecond.show()
    } else if (unitSecondTime == 5) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, clockColor)
        unitSecond.setPixelColor(2, zeroColor)
        unitSecond.setPixelColor(3, clockColor)
        unitSecond.show()
    } else if (unitSecondTime == 6) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, clockColor)
        unitSecond.setPixelColor(2, clockColor)
        unitSecond.setPixelColor(3, zeroColor)
        unitSecond.show()
    } else if (unitSecondTime == 7) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, zeroColor)
        unitSecond.setPixelColor(1, clockColor)
        unitSecond.setPixelColor(2, clockColor)
        unitSecond.setPixelColor(3, clockColor)
        unitSecond.show()
    } else if (unitSecondTime == 8) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, clockColor)
        unitSecond.setPixelColor(1, zeroColor)
        unitSecond.setPixelColor(2, zeroColor)
        unitSecond.setPixelColor(3, zeroColor)
        unitSecond.show()
    } else if (unitSecondTime == 9) {
        unitSecond.clear()
        unitSecond.setPixelColor(0, clockColor)
        unitSecond.setPixelColor(1, zeroColor)
        unitSecond.setPixelColor(2, zeroColor)
        unitSecond.setPixelColor(3, clockColor)
        unitSecond.show()
    }
}
function getTenSecondTime () {
    if (DS3231.second() < 10) {
        tenSecondTime = 0
    } else {
        tenSecondTime = Math.trunc(DS3231.second() / 10)
    }
}
function getTenMinuteTime () {
    if (DS3231.minute() < 10) {
        tenMinuteTime = 0
    } else {
        tenMinuteTime = Math.trunc(DS3231.minute() / 10)
    }
}
function getTenHourTime () {
    if (dstState == 0) {
        if (DS3231.hour() < 10) {
            tenHourTime = 0
        } else {
            tenHourTime = Math.trunc(DS3231.hour() / 10)
        }
    } else if (dstState == 1) {
        if (DS3231.hour() - 1 < 10) {
            tenHourTime = 0
        } else {
            tenHourTime = Math.trunc((DS3231.hour() - 1) / 10)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (dstState == 0) {
        dstState = 1
        basic.showString("DST is On")
    } else if (dstState == 1) {
        dstState = 0
        basic.showString("DST is Off")
    }
})
input.onButtonPressed(Button.B, function () {
    if (colorIndex < oneColor.length) {
        clockColor = oneColor[colorIndex]
        colorIndex += 1
    } else {
        colorIndex = 0
    }
})
// Done
function showTenSecond () {
    tenSecond.setBrightness(brightVal)
    if (tenSecondTime == 0) {
        tenSecond.clear()
        tenSecond.setPixelColor(2, zeroColor)
        tenSecond.setPixelColor(1, zeroColor)
        tenSecond.setPixelColor(0, zeroColor)
        tenSecond.show()
    } else if (tenSecondTime == 1) {
        tenSecond.clear()
        tenSecond.setPixelColor(2, zeroColor)
        tenSecond.setPixelColor(1, zeroColor)
        tenSecond.setPixelColor(0, clockColor)
        tenSecond.show()
    } else if (tenSecondTime == 2) {
        tenSecond.clear()
        tenSecond.setPixelColor(2, zeroColor)
        tenSecond.setPixelColor(1, clockColor)
        tenSecond.setPixelColor(0, zeroColor)
        tenSecond.show()
    } else if (tenSecondTime == 3) {
        tenSecond.clear()
        tenSecond.setPixelColor(2, zeroColor)
        tenSecond.setPixelColor(1, clockColor)
        tenSecond.setPixelColor(0, clockColor)
        tenSecond.show()
    } else if (tenSecondTime == 4) {
        tenSecond.clear()
        tenSecond.setPixelColor(2, clockColor)
        tenSecond.setPixelColor(1, zeroColor)
        tenSecond.setPixelColor(0, zeroColor)
        tenSecond.show()
    } else if (tenSecondTime == 5) {
        tenSecond.clear()
        tenSecond.setPixelColor(2, clockColor)
        tenSecond.setPixelColor(1, zeroColor)
        tenSecond.setPixelColor(0, clockColor)
        tenSecond.show()
    }
}
function getUnitMinuteTime () {
    if (DS3231.minute() < 10) {
        unitMinuteTime = DS3231.minute()
    } else {
        unitMinuteTime = DS3231.minute() % 10
    }
}
function getUnitHourTime () {
    if (dstState == 0) {
        if (DS3231.hour() < 10) {
            unitHourTime = DS3231.hour()
        } else {
            unitHourTime = DS3231.hour() % 10
        }
    } else if (dstState == 1) {
        if (DS3231.hour() - 1 < 10) {
            unitHourTime = DS3231.hour() - 1
        } else {
            unitHourTime = (DS3231.hour() - 1) % 10
        }
    }
}
function showUnitHour () {
    unitHour.setBrightness(brightVal)
    if (unitHourTime == 0) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, zeroColor)
        unitHour.setPixelColor(2, zeroColor)
        unitHour.setPixelColor(3, zeroColor)
        unitHour.show()
    } else if (unitHourTime == 1) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, zeroColor)
        unitHour.setPixelColor(2, zeroColor)
        unitHour.setPixelColor(3, clockColor)
        unitHour.show()
    } else if (unitHourTime == 2) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, zeroColor)
        unitHour.setPixelColor(2, clockColor)
        unitHour.setPixelColor(3, zeroColor)
        unitHour.show()
    } else if (unitHourTime == 3) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, zeroColor)
        unitHour.setPixelColor(2, clockColor)
        unitHour.setPixelColor(3, clockColor)
        unitHour.show()
    } else if (unitHourTime == 4) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, clockColor)
        unitHour.setPixelColor(2, zeroColor)
        unitHour.setPixelColor(3, zeroColor)
        unitHour.show()
    } else if (unitHourTime == 5) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, clockColor)
        unitHour.setPixelColor(2, zeroColor)
        unitHour.setPixelColor(3, clockColor)
        unitHour.show()
    } else if (unitHourTime == 6) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, clockColor)
        unitHour.setPixelColor(2, clockColor)
        unitHour.setPixelColor(3, zeroColor)
        unitHour.show()
    } else if (unitHourTime == 7) {
        unitHour.clear()
        unitHour.setPixelColor(0, zeroColor)
        unitHour.setPixelColor(1, clockColor)
        unitHour.setPixelColor(2, clockColor)
        unitHour.setPixelColor(3, clockColor)
        unitHour.show()
    } else if (unitHourTime == 8) {
        unitHour.clear()
        unitHour.setPixelColor(0, clockColor)
        unitHour.setPixelColor(1, zeroColor)
        unitHour.setPixelColor(2, zeroColor)
        unitHour.setPixelColor(3, zeroColor)
        unitHour.show()
    } else if (unitHourTime == 9) {
        unitHour.clear()
        unitHour.setPixelColor(0, clockColor)
        unitHour.setPixelColor(1, zeroColor)
        unitHour.setPixelColor(2, zeroColor)
        unitHour.setPixelColor(3, clockColor)
        unitHour.show()
    }
}
function showTenHour () {
    tenHour.setBrightness(brightVal)
    if (tenHourTime == 2) {
        tenHour.clear()
        tenHour.setPixelColor(1, clockColor)
        tenHour.setPixelColor(0, zeroColor)
        tenHour.show()
    } else if (tenHourTime == 1) {
        tenHour.clear()
        tenHour.setPixelColor(1, zeroColor)
        tenHour.setPixelColor(0, clockColor)
        tenHour.show()
    } else if (tenHourTime == 0) {
        tenHour.clear()
        tenHour.setPixelColor(1, zeroColor)
        tenHour.setPixelColor(0, zeroColor)
        tenHour.show()
    }
}
// This block creates segments in a chain of LEDs for each "digit" in the clock. It then tturns on them all to show that the strip works, then clears it and, if necessary, sets the date and time.
let tenHourTime = 0
let tenSecondTime = 0
let unitSecondTime = 0
let unitHourTime = 0
let unitMinuteTime = 0
let tenMinuteTime = 0
let clockColor = 0
let colorIndex = 0
let oneColor: number[] = []
let zeroColor = 0
let unitSecond: neopixel.Strip = null
let tenSecond: neopixel.Strip = null
let unitMinute: neopixel.Strip = null
let tenMinute: neopixel.Strip = null
let unitHour: neopixel.Strip = null
let tenHour: neopixel.Strip = null
let strip: neopixel.Strip = null
let dstState = 0
let brightVal = 0
brightVal = 255
dstState = 0
strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
tenHour = strip.range(0, 2)
unitHour = strip.range(2, 4)
tenMinute = strip.range(6, 3)
unitMinute = strip.range(9, 4)
tenSecond = strip.range(13, 3)
unitSecond = strip.range(16, 4)
strip.setBrightness(brightVal)
strip.showRainbow(1, 360)
basic.pause(2000)
strip.clear()
zeroColor = neopixel.colors(NeoPixelColors.Green)
oneColor = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White)
]
colorIndex = 0
clockColor = oneColor[colorIndex]
// This block gets the value of each "digit" of the clock.
basic.forever(function () {
    getTenHourTime()
    getUnitHourTime()
    getTenMinuteTime()
    getUnitMinuteTime()
    getTenSecondTime()
    getUnitSecondTime()
})
// This block turns on the individual LEDs to represent each "digit."
basic.forever(function () {
    showTenHour()
    showUnitHour()
    showTenMinute()
    showUnitMinute()
    showTenSecond()
    showUnitSecond()
})
