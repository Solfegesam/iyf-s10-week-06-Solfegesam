let allUsers = [];

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}

function displayUsers(users) {
    const container = document.getElementById("users");

    container.innerHTML = users.map(user => `
        <div class="user">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </div>
    `).join("");
}

async function init() {
    allUsers = await fetchUsers();
    displayUsers(allUsers);

    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();

        const filtered = allUsers.filter(user =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );

        displayUsers(filtered);
    });
}

init();
