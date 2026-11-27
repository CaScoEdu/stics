onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const A = event.data;
        const C = A + 5;
        postMessage(C);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
