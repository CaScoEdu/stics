onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const { B, C } = event.data;
        const D = B + C;
        postMessage(D);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
