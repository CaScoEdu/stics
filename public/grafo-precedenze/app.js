// Imposta il valore di A iniziale

let A, B, C, D, E, F, G, H, I, J;
const activeWorkers = new Set();

// Update the displayed result.
function updateResult(id, value) {
    document.getElementById(id).textContent = value;
}

function runWorker(file, input, onResult) {
    const worker = new Worker(file);
    activeWorkers.add(worker);
    worker.onmessage = (event) => {
        activeWorkers.delete(worker);
        worker.terminate();
        onResult(event.data);
    };
    worker.postMessage(input);
}

function calculateA() {
    runWorker('workerA.js', 25, (value) => {
        A = value;
        updateResult('resultA', A);
        calculateB();
        calculateC();
        calculateJ();
    });
}

function resetAndRecalculate() {
    activeWorkers.forEach((worker) => worker.terminate());
    activeWorkers.clear();
    A = B = C = D = E = F = G = H = I = J = undefined;

    'ABCDEFGHIJ'.split('').forEach((letter) => {
        updateResult(`result${letter}`, '--');
    });

    calculateA();
}

// B = A + 3
function calculateB() {
    runWorker('workerB.js', A, (value) => {
        B = value;
        updateResult('resultB', B);
        checkAndCalculateD();
    });
}

// C = A + 5
function calculateC() {
    runWorker('workerC.js', A, (value) => {
        C = value;
        updateResult('resultC', C);
        checkAndCalculateD();
        checkAndCalculateF();
    });
}

// D = B + C
function checkAndCalculateD() {
    if (B !== undefined && C !== undefined) {
        runWorker('workerD.js', { B, C }, (value) => {
            D = value;
            updateResult('resultD', D);
            checkAndCalculateE();
        });
    }
}

// E = F + D + J
function checkAndCalculateE() {
    if (F !== undefined && D !== undefined && J !== undefined) {
        runWorker('workerE.js', { F, D, J }, (value) => {
            E = value;
            updateResult('resultE', E);
            checkAndCalculateH();
        });
    }
}

// F = 12 + C
function checkAndCalculateF() {
    if (C !== undefined) {
        runWorker('workerF.js', C, (value) => {
            F = value;
            updateResult('resultF', F);
            checkAndCalculateE();
            checkAndCalculateH();
        });
    }
}

// G = 15 + J
function checkAndCalculateG() {
    if (J !== undefined) {
        runWorker('workerG.js', J, (value) => {
            G = value;
            updateResult('resultG', G);
            checkAndCalculateH();
        });
    }
}

// H = F + E + G
function checkAndCalculateH() {
    if (F !== undefined && E !== undefined && G !== undefined) {
        runWorker('workerH.js', { F, E, G }, (value) => {
            H = value;
            updateResult('resultH', H);
            checkAndCalculateI();
        });
    }
}

// I = 8 + H
function checkAndCalculateI() {
    if (H !== undefined) {
        runWorker('workerI.js', H, (value) => {
            I = value;
            updateResult('resultI', I);
        });
    }
}

// J = A + 17
function calculateJ() {
    runWorker('workerJ.js', A, (value) => {
        J = value;
        updateResult('resultJ', J);
        checkAndCalculateE();
        checkAndCalculateG();
    });
}

document.getElementById('resetButton').addEventListener('click', resetAndRecalculate);
calculateA();
