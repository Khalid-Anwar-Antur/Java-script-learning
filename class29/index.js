function highestScore(scores){
    let max = scores[0]
    for(var x=1; x<scores.length;x++){
        if(max< scores[x]){
            max= scores[x]
        }
    }
    return max
}
var scores =[21,36,5,8,98]
let maxScore = highestScore( scores)
document.write(maxScore)