let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

    gallery.innerHTML = ' ';
    
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(cats => {
            console.log("nombre de chats :", cats.length, "chats", cats);
            let i = 0;
            while (i < cats.length) {
                let img = document.createElement('img');
                img.src = cats[i].url;
                // img.src = "https://cdn2.thecatapi.com/images/584.gif";
                img.alt = "texte alternatif";
                gallery.appendChild(img);
                ++i;
            }
        });

});