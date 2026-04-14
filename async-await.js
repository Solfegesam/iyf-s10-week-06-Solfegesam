function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "John" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ]);
        }, 1000);
    });
}

function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Great post!" },
                { id: 2, text: "Very helpful!" }
            ]);
        }, 1000);
    });
}

// Async/Await version
async function loadData() {
    try {
        const user = await getUser();
        console.log("User:", user);

        const posts = await getPosts(user.id);
        console.log("Posts:", posts);

        const comments = await getComments(posts[0].id);
        console.log("Comments:", comments);

    } catch (error) {
        console.error("Error:", error);
    }
}

// Run
loadData();
