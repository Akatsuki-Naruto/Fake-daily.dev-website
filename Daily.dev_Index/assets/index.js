
var tagAPI = 'https://my-json-server.typicode.com/Akatsuki-Naruto/My-JSON-Server/Tag'

function start() {
    getTags(function (Tag) {
        renderTags(Tag)
    });
}

start();

// Functions

function getTags(callback) {
    fetch(tagAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderTags(Tag) {
    var listTagBlock = document.querySelector('#listTags');
    var htmls = Tag.map(function(Tag) {
        return `
        <button class="tag${Tag.id} buttonTag">
            <img class="avatarTag" src="${Tag.avatar}" alt="">
            <div class="titleTag">${Tag.title}</div>
            <div class="timeTag"></div>
            <img class="imageTag" src="${Tag.picture}" alt="">
        </button>`;
        
    });
    listTagBlock.innerHTML = htmls.join('');
}
