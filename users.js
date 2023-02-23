//--- Знаходимо кнопку

const button = document.querySelector('.button');

//--- Накидуєм подію на кнопку

button.addEventListener('click',clickHandler);

function clickHandler () {
        //--- Запит з Github
    let zapros = new XMLHttpRequest();

    zapros.open('GET','https://api.github.com/users');
    zapros.onload = () => {
        //     console.log(zapros.response);
        const usersRes = JSON.parse(zapros.response);
         console.log(usersRes);
        // --- Знаходимо дів

        const container = document.querySelector('.text');
        //--- Переберем масив з данними

        usersRes.forEach(element => {
            container.innerHTML += `<div>${element.login} - ${element.avatar_url}</div>`
        });
    }

    zapros.send();

}