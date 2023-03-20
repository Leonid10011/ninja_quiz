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
    // show result
    scrollTo(0,0);
    
    anwserSpan.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        anwserSpan.children[0].children[0].children[0].textContent=`${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output += 1;
        }
    },10);
});