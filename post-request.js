async function createPost(title, body, userId) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, body, userId })
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        return await response.json();

    } catch (error) {
        console.error("Error:", error);
    }
}

// Usage
(async () => {
    const post = await createPost("My Title", "My content", 1);
    console.log("Created Post:", post);
})();
