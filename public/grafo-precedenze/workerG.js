onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const J = event.data;
        const G = 15 + J;
        postMessage(G);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
