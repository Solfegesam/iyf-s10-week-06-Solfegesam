function task(name, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} done`);
            resolve(time);
        }, time);
    });
}

async function run() {
    const start = Date.now();

    await task("Task 1", 1000);
    await task("Task 2", 1500);
    await task("Task 3", 500);

    const total = Date.now() - start;
    console.log("Total time:", total, "ms");
}

run();
