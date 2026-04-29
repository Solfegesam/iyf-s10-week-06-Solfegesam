function fakeFetch(name, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve(name);
        }, time);
    });
}

async function run() {
    console.log("Starting parallel requests...");

    const results = await Promise.allSettled([
        fakeFetch("API 1", 1000),
        fakeFetch("API 2", 2000),
        fakeFetch("API 3", 1500)
    ]);

    console.log("All done:");
    console.log(results);
}

run();
