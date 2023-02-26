(() => {

    //--- Знаходимо кнопку
    const button = document.querySelector('.js-show-button');


    const fetchXHR = (method, url) => new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }
    
        xhr.onerror = () => {
            reject(xhr.response);
        }
    
        xhr.send();
    });

    const renderUsers =(userContainer, users) => {
        users.forEach(user => {
            userContainer.innerHTML += `
            <div class="user">
                <img class="user-avatar" src="${user.avatar_url}" alt="">
                <p class="user-login">${user.login}</p> 
            </div>`
        });
    }

    const clickHandler = () => {
        // --- Знаходимо дів 
        const container = document.querySelector('.js-container');
        fetchXHR('GET', 'https://api.github.com/users').then(
            users => renderUsers(container, users),
            error => console.error(error),
        )}

    button.addEventListener('click', clickHandler);


})();
