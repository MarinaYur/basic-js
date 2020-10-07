module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let answer = {};
    answer.turns = Math.pow(2, disksNumber) - 1;
    answer.seconds = answer.turns / (turnsSpeed / 3600);
return answer;

}
    // remove line with error and write your code here
