let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-user-btn");

const users = [
    {
        name: 'feh',
        level: 22,
        guild: 'Drakay',
        avatar: 'imgs/feh.png'
    },
    {
        name: 'luna',
        level: 7,
        guild: 'Drakay',
        avatar: 'imgs/luna.png'
    },
    {
        name: 'kael',
        level: 15,
        guild: 'Drakay',
        avatar: 'imgs/kael.png'
    },
    {
        name: 'mira',
        level: 3,
        guild: 'Drakay',
        avatar: 'imgs/mira.png'
    },
    {
        name: 'thor',
        level: 19,
        guild: 'Drakay',
        avatar: 'imgs/thor.png'
    },
    {
        name: 'nina',
        level: 11,
        guild: 'Drakay',
        avatar: 'imgs/nina.png'
    },
    {
        name: 'zane',
        level: 5,
        guild: 'Drakay',
        avatar: 'imgs/zane.png'
    },
    {
        name: 'erik',
        level: 14,
        guild: 'Drakay',
        avatar: 'imgs/erik.png'
    },
    {
        name: 'sora',
        level: 9,
        guild: 'Drakay',
        avatar: 'imgs/sora.png'
    },
    {
        name: 'ryan',
        level: 17,
        guild: 'Drakay',
        avatar: 'imgs/ryan.png'
    }
];

let getUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];

    imgContainer.innerHTML = `<img src=${randomUser.avatar} alt="profile picture">`;
    details.innerHTML = `
      <h2>Name: ${randomUser.name} - Lv.${randomUser.level}</h2>
      <h3>Guild: ${randomUser.guild}</h3>`;
};

window.addEventListener("load", getUser);
getUserBtn.addEventListener("click", getUser);