onmessage = (event) => {
    
    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const H = event.data;
        const I = 8 + H;
        postMessage(I);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};
