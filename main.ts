let sprite2: Sprite = null
let y = 0
let i = 0
let sprite: Sprite;
let x: number;
let top_sprite: Sprite;
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
    sprite.setPosition(16 + i * 18, 10)
    i += 1
}
i = 0
while (i < 5) {
    sprite = sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.Player)
    sprite.setPosition(148, 16 + i * 16)
    i += 1
}
i = 0
while (i < 5) {
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
    sprite.setPosition(16 + i * 15, 35 + i * 15)
    // Moving diagonally
    sprite.setScale(0.6, ScaleAnchor.Middle)
    i += 1
}
while (y < 3) {
    x = 0
    while (x < 3) {
        sprite = sprites.create(img`
            ..............bbbbbbb...........
            ...........bb66663333baa........
            .........bb3367776333663aa......
            ........b33333888333389633aa....
            .......b3333333333333389633aa...
            ......b34443333333333338633bae..
            .....b3455433333333334443333ae..
            ....b33322333dddd3333455233daee.
            ...b3d333333dd3bbbb33322333dabe.
            ..b3d333333d3bb33bb33333333da4e.
            ..bd33333333b33aab3333333223a4ee
            .b3d3663333b33aab33366332442b4ee
            .bd3b983333a3aa3333387633ee3b4ee
            .bd6983333baaa333333387633bb4bee
            b3d6833333bba333333333863ba44ebe
            bdd3333333bb3333333333333a44bebe
            add666633333322333366333ba44bbbe
            ad67776333332442336983d3a444b4e.
            add888b333333ee3369833d3a44b44e.
            add333333333333336833d3a444b4e..
            a3dd3333344433333dddd3a444b44e..
            ab33ddd325543333dd33aa444b44e...
            .eabb3dd32233333baaa4444b44e....
            .ebabb3d333d33baa444443b44e.....
            ..ebaab3ddd3aaa4444433b44e......
            ..eebbaab33a44444333b444e.......
            ...eeebbaab444b333b4444e........
            ....ebeeebbbbbbbb4444ee.........
            .....eebbbb44444444ee...........
            .......eeebbb444eee.............
            ..........eeeeee................
            ................................
            `, SpriteKind.Player)
        sprite.setPosition(80 + x * 17, 30 + y * 17)
        // Spacing out grid
        sprite.setScale(0.5, ScaleAnchor.Middle)
        x += 1
    }
    y += 1
}
y = 0
while (y < 1) {
    x = 0
    while (x < 3) {
        top_sprite = sprites.create(img`
            ......................bbb.......
            ....................bb333b......
            .................bbb333d33b.....
            ................bb333333d3a.....
            ..............bb33332eeeedba....
            ............bbb333323eee2e3a....
            ..........bbd333333e22222ed3a...
            .......bbbdd3333333e22222edda...
            ......bb3d333333333be222eb3d3a..
            ...bbb3dd33333333333beeeb33d3a..
            ..b3ddd33333333333333333333dda..
            bbddd3333333333333333333333dd3a.
            b33dddddd3333333333333333333d3a.
            bb3333333ddddd33333333333333dda.
            bbbbbbb333dd33dddddddddd3333ddba
            b55553bbbbbb3333dd33333ddd33dd3a
            b555555555553bbbbbbbb33333dddd3a
            bd555555555555555dddbaaaaab3d3ba
            bb55555555555555555dddddddbb33ba
            b3bb35555555555d5555d55dddddbbba
            b33333bbb355dd55555d555ddddddbba
            b5555d333333bbb35dddddd55ddddbba
            b5d555dd5553333bbbbb3ddddddddb3a
            b5d555555555555dd3333bbbbbb3db3a
            bd5d555555d55555dd555ddbbbbbbb3a
            bbb55dd555555555555555ddddddbb3a
            ...bbbbdd555ddd5555ddddddddddb3a
            .......bbbb555555d5ddd5ddddddb3a
            ...........bbbb55555555555dd533a
            ...............bbbbddd5d55d5b3ba
            ...................bbbbddddb3ba.
            .......................bbbaaaa..
            `, SpriteKind.Player)
        top_sprite.setPosition(100 + x * 19, 105)
        top_sprite.setScale(0.45, ScaleAnchor.Middle)
        x += 1
        sprite2 = sprites.create(img`
            ......................bbb.......
            ....................bb333b......
            .................bbb333d33b.....
            ................bb333333d3a.....
            ..............bb33332eeeedba....
            ............bbb333323eee2e3a....
            ..........bbd333333e22222ed3a...
            .......bbbdd3333333e22222edda...
            ......bb3d333333333be222eb3d3a..
            ...bbb3dd33333333333beeeb33d3a..
            ..b3ddd33333333333333333333dda..
            bbddd3333333333333333333333dd3a.
            b33dddddd3333333333333333333d3a.
            bb3333333ddddd33333333333333dda.
            bbbbbbb333dd33dddddddddd3333ddba
            b55553bbbbbb3333dd33333ddd33dd3a
            b555555555553bbbbbbbb33333dddd3a
            bd555555555555555dddbaaaaab3d3ba
            bb55555555555555555dddddddbb33ba
            b3bb35555555555d5555d55dddddbbba
            b33333bbb355dd55555d555ddddddbba
            b5555d333333bbb35dddddd55ddddbba
            b5d555dd5553333bbbbb3ddddddddb3a
            b5d555555555555dd3333bbbbbb3db3a
            bd5d555555d55555dd555ddbbbbbbb3a
            bbb55dd555555555555555ddddddbb3a
            ...bbbbdd555ddd5555ddddddddddb3a
            .......bbbb555555d5ddd5ddddddb3a
            ...........bbbb55555555555dd533a
            ...............bbbbddd5d55d5b3ba
            ...................bbbbddddb3ba.
            .......................bbbaaaa..
            `, SpriteKind.Player)
        sprite2.setPosition(119, 85)
        sprite2.x = 0.45
    }
    y += 1
}
