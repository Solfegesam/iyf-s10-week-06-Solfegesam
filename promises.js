function getData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data loaded successfully");
            } else {
                reject("Error: Data failed to load");
            }
        }, 1000);
    });
}

// Using the Promise
getData(true)
    .then(result => {
        console.log("SUCCESS:", result);
    })
    .catch(error => {
        console.log("ERROR:", error);
    });
