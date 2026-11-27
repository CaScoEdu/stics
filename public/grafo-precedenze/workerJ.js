onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const A = event.data;
        const J = A + 17;
        postMessage(J);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
