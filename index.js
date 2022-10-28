const data = [
    {
        "index": "first",
        "title": "What is the past form of 'eat'?",
        "options": ["eat", "ate", "eaten", "have ate"],
        "answer": "ate"
    },
    {
        "index": "second",
        "title": "Which sentence is present continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I am eating rice"
    },
    {
        "index": "third",
        "title": "Which sentence is present perfect tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "index": "fourth",
        "title": "Which sentence is present perfect continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "index": "fifth",
        "title": "Which sentence is past continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I was eating rice"
    },
    {
        "index": "sixth",
        "title": "Which sentence is past perfect tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "index": "seventh",
        "title": "Which sentence is past perfect continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "index": "eighth",
        "title": "Which sentence is future continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will be eating rice"
    },
    {
        "index": "ninth",
        "title": "Which sentence is future perfect tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will have eaten rice"
    },
    {
        "index": "tenth",
        "title": "Which sentence is future perfect continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I will have been eating rice for 1 year"
        ],
        "answer": "I will have been eating rice for 1 year"
    }
]

const optionsDiv = document.getElementById('options')

let cardsContainer = document.getElementById('cards')

const elements = data.map((data, index) => {

    let html = `<h6 class="heading options-headings">${index + 1}. ${data.title}</h6>`;


    data.options.map((option, index) => {
        html += (
            `<input type="radio" id=${data.index + index} name=${data.index}>
        <label for=${data.index + index}>${option}</label>
        <br>`)
    })

    const card = `
    <div class="card item">
    <form class="options" action="#">
    ${html}
    </form>
</div>
    `;
    return card;
})

cardsContainer.innerHTML = elements.join("")

const getResult = () => {

    let answers = []
    const inputs = cardsContainer.querySelectorAll('input:checked')

    for (const input of inputs) {

        const label = cardsContainer.querySelector(`label[for=${input.id}]`);
        const index = input.id.replace(/[0-9]/g, '')

        answers.push({ index: index, input: label.innerHTML })

    }

    const result = answers.filter(answers => data.find(data => data.index === answers.index && data.answer === answers.input))
    sessionStorage.setItem('result', result.length)
    window.location.href = 'result.html'
}


function timer() {
    let min = 10
    var sec = 60
    var timer = setInterval(function () {

        document.getElementById('timer').innerHTML = `00:${min < 11 ? '0' : ''}${min > 0 ? min - 1 : 0}:${sec < 10 ? '0' : ''}${sec}`;

        sec > 0 && sec--

        if (sec === 0) {
            min = min - 1;
        }
        if (sec === 0 && min > 0) {
            sec = 60
        }
        if (min === 0 && sec === 0) {
            clearInterval(timer);
            window.location.href = 'timeout.html'
        }

    }, 1000);
}
timer()


document.getElementById("finish-button").addEventListener('click', () => {
    getResult()
})