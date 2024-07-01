document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const usernameElement = document.getElementById("username");
    const avatarElement = document.getElementById("avatar");
    const reposElement = document.getElementById("repos");
    const followersElement = document.getElementById("followers");
    const followingElement = document.getElementById("following");
    const linkElement = document.getElementById("link");

    fetch("https://api.github.com/users/jeanalves00")
        .then((response) => response.json())
        .then((data) => {
            nameElement.innerText = data.name;
            usernameElement.innerText = data.login;
            avatarElement.src = data.avatar_url;
            reposElement.innerText = data.public_repos;
            followersElement.innerText = data.followers;
            followingElement.innerText = data.following;
            linkElement.href = data.html_url;
        });
})