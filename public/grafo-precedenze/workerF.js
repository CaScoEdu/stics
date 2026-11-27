onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const C = event.data;
        const F = 12 + C;
        postMessage(F);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
