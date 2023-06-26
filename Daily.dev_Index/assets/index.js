// var Tag = 'http://localhost:3000/Tag';

// fetch(Tag)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(tags) {
//         console.log(tags)
//     })


var tagAPI = 'http://localhost:3000/Tag'

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









// fetch(tagAPI) 
//     .then(response => response.json())
//     .then(function(Tags){
//         var htmls = Tags.map(function (Tag) {
//             return `
//             <button >
//                 <div class="avatarTag"></div>
//                 <div class="tittleTag">${Tag.title}</div>
//                 <div class="timeTag"></div>
//                 <div class="imageTag">${Tag.picture}</div>
//             </button>`;
//         });

//         var html = htmls.join('');
//         document.getElementById('listTags').innerHTML = html
//     })
//     .catch(function(err){
//         alert('error')
// })


