input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (names_of_the_week[my_index]))
    my_index += 1
})
input.onButtonPressed(Button.B, function () {
    my_index += -1
    serial.writeLine("" + (names_of_the_week[my_index]))
})
let my_index = 0
let names_of_the_week: string[] = []
names_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
my_index = 0
serial.writeValue("lenght of Array", names_of_the_week.length)
basic.forever(function () {
    if (my_index > names_of_the_week.length - 1) {
        my_index = 0
    }
    if (my_index < 0) {
        my_index = 0
    }
})
