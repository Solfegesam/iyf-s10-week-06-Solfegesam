function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage
async function run() {
    console.log("Start");

    await delay(2000);
    console.log("2 seconds passed");

    await delay(1000);
    console.log("3 seconds total");
}

run();
