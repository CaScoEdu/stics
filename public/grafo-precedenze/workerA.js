onmessage = (event) => {

    const TEMPO_ELABORAZIONE = 2000;

    const ELABORA = () => {
        const A = event.data;
        postMessage(A);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);  
};
