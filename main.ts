controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rotate(playerSprite)
})
function rotate (mySprite: Sprite) {
    originalImageCopy = mySprite.image
    originalImageCopy.flipY()
    newSpriteImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    for (let x = 0; x <= imageWidth; x++) {
        for (let y = 0; y <= imageHeight; y++) {
            newSpriteImage.setPixel(y, x, originalImageCopy.getPixel(x, y))
        }
    }
    mySprite.setImage(newSpriteImage)
}
let newSpriteImage: Image = null
let originalImageCopy: Image = null
let playerSprite: Sprite = null
let imageHeight = 0
let imageWidth = 0
imageWidth = 16
imageHeight = 16
playerSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    3 3 3 5 5 5 5 5 5 5 5 5 5 3 3 3 
    3 3 3 5 5 5 5 5 5 5 5 5 f f 3 3 
    3 3 3 5 5 5 5 5 5 5 5 5 f f f 3 
    3 3 3 5 5 5 f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    3 3 3 5 5 5 f f f f f f f f f f 
    3 3 3 5 5 5 5 5 5 5 5 5 f f f 3 
    3 3 3 5 5 5 5 5 5 5 5 5 f f 3 3 
    3 3 3 5 5 5 5 5 5 5 5 5 5 3 3 3 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
