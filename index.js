const submitBtn = document.querySelector('.submit-classicsearch');
const feelingLuckyBtn = document.querySelector('.submit-randomsearch');

console.log(feelingLuckyBtn)

const searchURL = (searchedPhrase) => {
    window.location = "https://www.google.com/search?q=" + searchedPhrase;
};

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    let searchedPhrase = document.getElementById('searchedphrase').value;
    searchURL(searchedPhrase);
});

feelingLuckyBtn.addEventListener('click', e => {
    e.preventDefault();
    window.location = "https://www.google.com/doodles";
});