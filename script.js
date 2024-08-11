document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const steps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const totalSteps = steps.length;
    let currentStep = 0;

    function updateProgress() {
        const progressWidth = (currentStep / (totalSteps - 1)) * 100;
        progress.style.height = `${progressWidth}%`;
        progress.style.width = `4px`; // Adjust to fixed width
    }

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('form-step-active', i === index);
        });
        progressSteps.forEach((step, i) => {
            step.classList.toggle('progress-step-active', i === index);
        });
        currentStep = index;
        updateProgress();
    }

    document.querySelectorAll('.btn-next').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentStep < totalSteps - 1) {
                showStep(currentStep + 1);
            }
        });
    });

    document.querySelectorAll('.btn-prev').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentStep > 0) {
                showStep(currentStep - 1);
            }
        });
    });

    // Initialize
    updateProgress();
});