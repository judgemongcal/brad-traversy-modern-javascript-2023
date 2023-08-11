const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);


function submitForm(e) {
    e.preventDefault();

    const selectedOption = document.querySelector("input[name='poll-option']:checked");

    if (!selectedOption) {
        alert('Please select an option.');
        return;
    };

    let voteCount = poll.get(selectedOption.value);
    poll.set(selectedOption.value, ++voteCount );

    displyResults();

    // Disable form Fields after submit

    document.querySelector('#poll-form').querySelectorAll('input, button')
    .forEach((el) => el.setAttribute('disabled', true));
};

function displyResults() {
    const results = document.querySelector('#results');
    results.innerHTML = '';
    for(let [option, votes] of poll){
        const optionEl = document.createElement('div');
        optionEl.classList.add('border-bottom', 'p-2', 'd-flex', 'justify-content-between');
        optionEl.innerHTML = `<strong>${option} : </strong> ${votes} Votes`;
        results.appendChild(optionEl);
    };
};

document.querySelector('#poll-form').addEventListener('submit', submitForm);

