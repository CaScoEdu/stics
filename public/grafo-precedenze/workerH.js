onmessage = (event) => {
    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const { F, E, G } = event.data;
        const H = F + E + G;
        postMessage(H);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
