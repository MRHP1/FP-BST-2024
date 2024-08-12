const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.querySelector(".progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

/* Event Listener for Next Button. */
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

/* Event Listener for Back Button. */
prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

/* Updates Form Items */
function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active");
}

/* Updates Progress Bar */
function updateProgressbar() {
    progressSteps.forEach((progressStep, index) => {
        if (index <= formStepsNum) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    // Adjust the height of the progress bar
    const stepHeight = 100 / (progressSteps.length - 1);
    progress.style.height = stepHeight * formStepsNum + "%";
}

/* email warning */
document.getElementById('email').addEventListener('input', function () {
    var email = this.value;
    var emailError = document.getElementById('email-error');
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.match(pattern)) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }
});

