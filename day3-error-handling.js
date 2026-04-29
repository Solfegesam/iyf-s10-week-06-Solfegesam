function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

async function fetchUserSafe(id) {
    try {
        const user = await getUser(id);
        console.log("User:", user);
    } catch (error) {
        console.log("Error occurred:", error);
        console.log("Returning default user...");

        return { id: 0, name: "Guest User" };
    }
}

fetchUserSafe(5);
