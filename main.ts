let sprite: Sprite = null
let i = 0
while (i < 5) {
    sprite = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.Player)
    sprite.setPosition(16 + i * 32, 40)
    i += 1
}
i = 0
while (i < 5) {
    sprite = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Player)
    sprite.setPosition(160, 16 + i * 32)
    i += 1
}
i = 0
while (i < 5) {
    sprite = sprites.create(img`
        ...........222222ee.............
        .........2233333bbeee...........
        .......2233d1111333bee..........
        ......23ddd111dd1d33eee.........
        .....23d1333d1d33d13bee.........
        ....23d133333d1d33313eee........
        ...2311333333ddd3333dbeee.......
        ..2313333333333ddd33d3e44e......
        ..21d3333333333ddd333db44ee.....
        .2313333333333dd33333db444ee....
        .2dd3333333333d333333d3b444e....
        2311d333333333d333333ddbb444e...
        2d131d33333333d333333d1b6644e...
        2d33dd33333333d333333d1b44444e..
        21333d3333333d3333333d1644664ee.
        21333d333333d33333333d16b64464be
        21333dddd33dd33333333d1646446b6e
        2133333dd11dd33333333d1644b6446e
        e133333d1d31d33333333d1b4446446e
        e1333331d3331333333331d6bb44b6e.
        e1333331dd331b3333333136bb6bb6e.
        e13333331dd1db33333331b6b66bbe..
        edd33333311db3333333dd6bb6bbe...
        e3d3333333d333333333136beebbe...
        .edd3333333d3333333ddbfeebbe....
        .e3dd33333dd3333333d3efeeee.....
        ..e3dd333d1333333dd3bfffff......
        ...e311111ddd333dddbffeef.......
        ....eed1d33d111113befeff........
        ......eeb333dd13beffff..........
        ........eeeefffffee.............
        ................................
        `, SpriteKind.Player)
    sprite.setPosition(i * 32, i * 32)
}
i = 0
for (let x = 0; x <= 2; x++) {
    let y = 0
    sprite = sprites.create(img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, SpriteKind.Player)
    sprite.setPosition(160 + x * 32, 120 + y * 32)
}
i = 0
while (i < 7) {
    sprite = sprites.create(img`
        ..............eeeeeee...........
        ............ee455662e2e.........
        ..........ee45556723e2688.......
        .........e46776677232e777668....
        ........e46745554772227776778...
        .......4448744444777766777678...
        ......4522e7777776777766676668..
        .....4523227766722e666eeeee888..
        ....455232e76672322e4555dddd48..
        ...44567777554623e455ddddddddd4.
        ...e66774554477e455dddd55554dd44
        ..e46777444677e55dd55555d55dddd4
        ..e5668677666e5dd555555555555dde
        .e45544e8776e5d555554555555555de
        .e554eeee66e5d5555d55555dddd54de
        .e55ee44fee5d5d555555d5d5dddddde
        e454eeeefe45d55555555555dd4ddde.
        e5e4eefffe5d55555555d5555dddde..
        e5ee4eeff45d555555555555dddde...
        e5eeeeffe5d55d555d5555d5ddde....
        e5ffefeee5d55545555555ddd4e.....
        e5ffffffe545555555d5d4ddee......
        e54efeff45d55d55555dddde........
        e5eeeffe5dd5555545dddee.........
        e4eeefff5d5555d55ddde...........
        e4efefff5d5d55555d4e............
        .e4efffe5d555555dee.............
        .e54eeee5d545dd4e...............
        ..e554ee5dddddee................
        ...ee5544dddee..................
        .....eeeeeee....................
        ................................
        `, SpriteKind.Player)
    if (i % 2 == 0) {
        sprite.setPosition(16 + i * 32, 200)
    } else {
        // Even positions on the top row
        sprite.setPosition(16 + i * 32, 240)
    }
}
