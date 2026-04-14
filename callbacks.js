function loadUser(userId, callback) {
    setTimeout(() => {
        const user = {
            id: userId,
            name: "John Doe",
            email: "john@example.com"
        };

        callback(user);
    }, 1000);
}

// Usage
loadUser(1, function(user) {
    console.log("User loaded:", user);

    // Simulating another callback step
    function loadUserPosts(userId, callback) {
        setTimeout(() => {
            const posts = [
                { id: 1, title: "First Post" },
                { id: 2, title: "Second Post" }
            ];
            callback(posts);
        }, 1000);
    }

    loadUserPosts(user.id, function(posts) {
        console.log("Posts loaded:", posts);
    });
});
