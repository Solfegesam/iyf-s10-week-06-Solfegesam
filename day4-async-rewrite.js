function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
}

function processData(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + " → processed"), 1000);
    });
}

function saveData(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + " → saved"), 1000);
    });
}

async function run() {
    const data = await getData();
    const processed = await processData(data);
    const saved = await saveData(processed);

    console.log(saved);
}

run();
