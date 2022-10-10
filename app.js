const faqs = document.querySelectorAll('.faq');
const faqAnswers = document.querySelectorAll('.faq_answer');

console.log(faqAnswers);

faqs.forEach(faq => {

    faq.addEventListener('click', () => {

        faqAnswers.forEach(faqAnswer => {
            if(faqAnswer.classList.contains('active')) {
                faqAnswer.classList.toggle('active');
            }
        })

        let faqSelected = faq.querySelector('.faq_answer');

        toggleDisplay(faqSelected);
        
        console.log(faqAnswers)
    })
})


function toggleDisplay(faqSelected) {
    faqSelected.classList.toggle('active');
}
