let calScore = (question, questionScore, callback) => {
    let correctAnswerCount = question.filter((q) => callback(q.name, q.answer)).length;
    console.log('correctAnswerCount', correctAnswerCount);
    return correctAnswerCount * questionScore;
};

let calBlankFilling = () => {
    let questions = [{name: "q1", answer: '统一建模语言'}, {name: 'q2-1', answer: '封装性'}, {
        name: 'q2-2',
        answer: '继承性'
    }, {name: 'q2-3', answer: '多态性'}];
    let callbackFunc = (name, answer) => {
        let domelem = document.querySelector("input[name =" + name + "]");
        return domelem.value === answer;
    };
    return calScore(questions, 5, callbackFunc);

};


let calSingleChoice = () => {
    let questions = [{name: "s1", answer: 'b'}, {name: 's2', answer: 'a'}];
    let callbackFunc = (name, answer) => {
        console.log((document.querySelector("input[name =" + name + "]:checked")), name);
        let domelem = document.querySelector("input[name =" + name + "]:checked");
        return domelem.value === answer;
    };
    return calScore(questions, 10, callbackFunc);

};


let calculate = () => {
    let blankFilling, singleChoice, MultiChoice, trueorfalse, summary;
    blankFilling = calBlankFilling();
    singleChoice = calSingleChoice();
    MultiChoice = calMultiChoice();
    trueorfalse = calTrueorfalse();
    summary = calSummary();

    console.log(blankFilling + summary + singleChoice + MultiChoice + trueorfalse, 'total');
};

let calMultiChoice = () => {
    let questions = [{name: "m1", answer: ['a', 'b', 'd']}, {name: 'm2', answer: ['a', 'b', 'c']}];
    let callbackFunc = (name, answer) => {
        console.log((document.querySelector("input[name =" + name + "]:checked")), name);
        let domelem = document.querySelectorAll("input[name =" + name + "]:checked");
        let domelemValArr = [];
        domelem.forEach((p) => {
            domelemValArr.push(p.value);
        });

        console.log(domelemValArr, 'domelemValArr');
        return domelemValArr.join(',') === answer.join(',');
    };
    return calScore(questions, 10, callbackFunc);

};

let calTrueorfalse = () => {
    let questions = [{name: "tf1", answer: 't'}, {name: 'tf2', answer: 'f'}];
    let callbackFunc = (name, answer) => {
        console.log((document.querySelector("input[name =" + name + "]:checked")), name);
        let domelem = document.querySelector("input[name =" + name + "]:checked");
        return domelem.value === answer;
    };
    return calScore(questions, 10, callbackFunc);

};

let calSummary = () => {
    let questions = [{name: "sum1", answer: '模型是对现实世界的简化和抽象。'}];
    let callbackFunc = (name, answer) => {
        console.log((document.querySelector("textarea[name =" + name + "]")), name);
        let domelem = document.querySelector("textarea[name =" + name + "]");
        return domelem.value === answer;
    };
    return calScore(questions, 10, callbackFunc);

};