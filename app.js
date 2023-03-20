const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const anwserSpan = document.querySelector(".result");

form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;

    const userAnwers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check anwers
    userAnwers.forEach((a,i) => {
        if(a === correctAnswers[i]){
                score += 25;
            }
    });

    anwserSpan.children[0].children[0].children[0].textContent=`${score}%`;
    anwserSpan.classList.remove("d-none");

});