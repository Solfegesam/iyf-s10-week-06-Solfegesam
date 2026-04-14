// Fetch a single user
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Status:", response.status);
        console.log("OK:", response.ok);

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return response.json();
    })
    .then(data => {
        console.log("User:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
