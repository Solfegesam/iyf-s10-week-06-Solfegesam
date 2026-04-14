const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const container = document.getElementById("users-container");

async function loadUsers() {
    try {
        showLoading();

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        displayUsers(users);

    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

function displayUsers(users) {
    container.innerHTML = users.map(user => `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <p>${user.company.name}</p>
            <p>${user.address.city}</p>
        </div>
    `).join("");
}

function showLoading() {
    loading.classList.remove("hidden");
    container.innerHTML = "";
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}

loadUsers();
