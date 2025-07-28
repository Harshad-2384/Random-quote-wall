document.addEventListener('DOMContentLoaded',() =>{
    const quotes =[
        {
            quote:"The only way to do great work is to love what you do.",
            author:"Steve Jobs"
        },
        {
            quote:"Innovation distinguishes between a leader and a follower.",
            author:"Steve Jobs"
        },
        {
            quote:"Strive not to be a success, but to be a value.",
            author:"Albert Einstein"
        },
        {
            quote:"The mind is everything. What you think you become.",
            author:"Buddha"
        },
        {
            quote:"Believe you can and you're halfway there. ",
            author:"Theodore Roosevelt"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            author: "Ralph Waldo Emerson"
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        },
        {
            quote: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky"
        }
    ];
    const quoteGrid = document.getElementById('quote-grid');

    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i=0;i<6; i++){
            color = color + letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    function createQuoteCard(quoteObj) {
        const card = document.createElement('div');
        card.classList.add('quote-card');
        card.style.backgroundColor = getRandomColor();

        const quoteParagraph = document.createElement('p');
        quoteParagraph.classList.add('quote');
        quoteParagraph.textContent= `"${quoteObj.quote}"`;

        const authorParagraph = document.createElement('p');
        authorParagraph.classList.add('author');
        authorParagraph.textContent = `- ${quoteObj.author}`;

        card.appendChild(quoteParagraph);
        card.appendChild(authorParagraph);
        quoteGrid.appendChild(card);
    }

    quotes.forEach(quote=>{
        createQuoteCard(quote);
    });
});