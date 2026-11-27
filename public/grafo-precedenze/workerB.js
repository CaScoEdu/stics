onmessage = (event) =>  {

    const TEMPO_ELABORAZIONE = 3000;

    const ELABORA = () => {
        const A = event.data;
        const B = A + 3;
        postMessage(B);
    }

    setTimeout(ELABORA, TEMPO_ELABORAZIONE);
};


