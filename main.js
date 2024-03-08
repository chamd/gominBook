let isBookOpened = false;

function openBook() {
    if (!isBookOpened) {
        document.getElementById('book').style.left = `calc(50%)`;
        document.getElementById('bookWrap').classList.add('openBook');
        setTimeout(() => {
            document.getElementById('title').style.display = 'none';
            document.getElementById('subTitle').style.display = 'none';
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName('magicTextWrap')[i].style.display = 'none';
            }
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName('magicText')[i].style.display = 'none';
            }
        }, 350);
        isBookOpened = true;    
    } else {
        closeBook();
    }
}

function turnPage() {
    let rPage = Math.floor(Math.random() * 70) + 10;
    document.getElementsByClassName('bookPages')[0].classList.add('openBook');
    document.getElementsByClassName('bookPages')[0].style.zIndex = rPage + 11;
    setTimeout(() => {
        document.getElementsByClassName('bookPages')[0].innerHTML = '';
        document.getElementsByClassName('bookPages')[0].style.zIndex = 4;
    }, 350);
    setTimeout(() => {
        let index = rPage + 10;
        for (let i = 0; i < rPage; i++) {
            setTimeout(() => {
                let page = document.createElement('div');                
                page.classList.add('bookPages');
                if (i != rPage - 1) {
                    page.classList.add('openBook');
                    page.style.zIndex = index;
                }
                index --; 
                let r = Math.floor(Math.random() * answers.length);
                page.innerHTML = `<div class="result">${answers[r]}</div>`;
                document.getElementById('pages').appendChild(page);  
                setTimeout(() => {
                    if (i != rPage - 1) {
                        page.style.zIndex = i + 10;
                        page.innerHTML = `
                            <img src="imgs/mhssicon.png" width=50px style="transform: scaleX(-1); margin-top: 120px;">
                        `;
                        if (i == rPage - 2) {
                            page.innerHTML = `
                                <img src="imgs/mhssicon.png" width=50px style="transform: scaleX(-1); margin-top: 120px;">
                                <div class="turnPage" onclick="closeBook();"><ion-icon name="arrow-redo"></ion-icon></div>
                            `;
                        }
                    }
                }, 350);
            }, i * 50);
        }
    }, 50);
}

function closeBook() {
    document.getElementById('book').style.left = `calc(50% - 150px)`;
    document.getElementById('bookWrap').classList.add('closeBook');
    let pages = document.getElementsByClassName('bookPages');
    for (let i = 0; i < pages.length - 1; i++) {
        pages[i].classList.add('closeBook');        
    }
    setTimeout(() => {
        document.getElementById('title').style.display = 'block';
        document.getElementById('subTitle').style.display = 'block';
        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName('magicTextWrap')[i].style.display = 'block';
        }
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('magicText')[i].style.display = 'block';
        }

        for (let i = 0; i < pages.length - 1; i++) {
            pages[i].style.zIndex = '1';      
        }
    }, 350);
    setTimeout(() => {
        window.location.reload();
    }, 1200);
}