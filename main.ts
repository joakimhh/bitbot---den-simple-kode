input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Forward, 60, 2400)
    bitbot.rotatems(BBRobotDirection.Right, 30, 350)
    bitbot.goms(BBDirection.Forward, 60, 1200)
    bitbot.rotatems(BBRobotDirection.Right, 30, 350)
    bitbot.goms(BBDirection.Forward, 60, 1600)
    bitbot.rotatems(BBRobotDirection.Left, 30, 350)
    bitbot.goms(BBDirection.Forward, 60, 1600)
    bitbot.rotatems(BBRobotDirection.Right, 30, 150)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    bitbot.ledRainbow()
})
input.onButtonPressed(Button.B, function () {
    bitbot.setLedColor(0xFF0000)
})
bitbot.select_model(BBModel.XL)
basic.showIcon(IconNames.Happy)
