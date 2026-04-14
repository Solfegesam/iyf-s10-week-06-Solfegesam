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
                { id: 2, text: "Nice work!" }
            ]);
        }, 1000);
    });
}

// Promise chaining
getUser()
    .then(user => {
        console.log("User:", user);
        return getPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });
