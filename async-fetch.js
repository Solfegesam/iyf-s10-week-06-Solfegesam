async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

// Usage
(async () => {
    const user = await getUser(1);
    console.log("User:", user);
})();
