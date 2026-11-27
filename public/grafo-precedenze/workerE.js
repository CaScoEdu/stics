onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const { F, D, J } = event.data;
        const E = F + D + J;
        postMessage(E);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
