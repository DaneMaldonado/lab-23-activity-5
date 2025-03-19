i = 0
while i < 5:
    sprite = sprites.create(img("""
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
        """),
        SpriteKind.player)
    sprite.set_position(16 + i * 17, 10)
    i += 1
i = 0
while i < 5:
    sprite = sprites.create(img("""
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
        """),
        SpriteKind.player)
    sprite.set_position(145, 16 + i * 16)
    i += 1
i = 0
while i < 5:
    sprite = sprites.create(img("""
            . . . . . . b b b b . . . . . . 
                    . . . . . . b 4 4 4 b . . . . . 
                    . . . . . . b b 4 4 4 b . . . . 
                    . . . . . b 4 b b b 4 4 b . . . 
                    . . . . b d 5 5 5 4 b 4 4 b . . 
                    . . . . b 3 2 3 5 5 4 e 4 4 b . 
                    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                    . . . b 5 3 2 3 5 5 5 5 e e e e 
                    . . b d 7 5 5 5 3 2 3 5 5 e e e 
                    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                    b d 3 2 d 5 5 5 d d d 4 4 . . . 
                    b 5 5 5 5 d d 4 4 4 4 . . . . . 
                    4 d d d 4 4 4 . . . . . . . . . 
                    4 4 4 4 . . . . . . . . . . . .
        """),
        SpriteKind.player)
    sprite.set_position(22 + i * 13, 36 + i * 13)
    i += 1
for y in range(3):
    for x in range(3):
        sprite = sprites.create(img("""
                . . . . . . b b b b a a . . . . 
                            . . . . b b d d d 3 3 3 a a . . 
                            . . . b d d d 3 3 3 3 3 3 a a . 
                            . . b d d 3 3 3 3 3 3 3 3 3 a . 
                            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
                            . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                            a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                            a a 3 3 3 d d d a a 4 4 4 e e . 
                            . e a a a a a a 4 4 4 4 e e . . 
                            . . e e b b 4 4 4 4 b e e . . . 
                            . . . e e e e e e e e . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            SpriteKind.player)
        sprite.set_position(92 + x * 14, 33 + y * 14)
        sprite.set_scale(0.8, ScaleAnchor.MIDDLE)
i = 0