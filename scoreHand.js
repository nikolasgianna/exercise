// var App = {
    
    function scoreHand(cards) {

        var total = 0
        var acesNum = 0
        var nums = []
        const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  
        for (i = 0; i < cards.length; i++) {

            var curItem = parseInt(cards[i])
        
            if (curItem >= 2 && curItem <= 10) {
                nums.push(curItem)
            }
            else if (cards[i] === "K" || cards[i] === "Q" || cards[i] === "J") {
                nums.push(10)
            }
            else if (cards[i]=== "A") {
                acesNum++
            }
        }
        total = arrSum(nums)

        if (acesNum !== 0){
            total += --acesNum        
            if (total <= 10) total += 11
            else total++
        }
    return total
    }
// };

// console.log(App.scoreHand(["A", "4", "5", "A"])) //Should be 21
// console.log(App.scoreHand([ '9', 'A', '10', '7' ])) //Should be 27
// console.log(App.scoreHand([]))  //Should be 0
// console.log(App.scoreHand([ 'A', 'K', 'A', 'J' ]))
