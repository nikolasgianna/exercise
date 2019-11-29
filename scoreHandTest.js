QUnit.test( "BlackJack test", function( assert ) {
    assert.strictEqual(scoreHand([]), 0, 'Empty array');
    assert.strictEqual(scoreHand(['2','3']), 5, '2+3 = 5');
    assert.strictEqual(scoreHand(['2','3', 'K']), 15, '2+3+K = 15');
    assert.strictEqual(scoreHand(['A','2','3','A']), 17, 'A + 2 + 3 + A = 17');
    assert.strictEqual(scoreHand(['A','2','3','J', 'A']), 17, 'A + 2 + 3 + J + A = 17');
    assert.strictEqual(scoreHand(['A', 'A']), 12, 'A + A = 12');
    assert.strictEqual(scoreHand(['A', '9', 'A']), 21, 'A + 9 + A = Blackjack');
    assert.strictEqual(scoreHand(['5','9', 'Q']), 24, '5 + 9 + Q = 24');
});