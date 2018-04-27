let calScore = (question, questionScore, callback) => {
    let correctAnswerCount = question.filter((q) =>callback(q.name,q.answer)).length;
    return correctAnswerCount * questionScore;
};

let calSingleChioce = () => {
    let questions = [{name: "q1", answer: '统一建模语言'}, {name: 'q2-1', answer: '封装性'}, {
        name: 'q2-2',
        answer: '继承性'
    }, {name: 'q2-3', answer: '多态性'}];
    let callbackFunc = (name, answer) => {
        return document.querySelector("input[name =" + name + "]").value === answer;
    };
    return calScore(questions, 5, callbackFunc);

};

window.load = function () {
    document.getElementById('calScoreBtn').onclick = function () {
        calSingleChioce();
        alert('dfe');
    }

};
module.exports = calSingleChioce;