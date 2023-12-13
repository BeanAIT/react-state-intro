import { useState } from "react";

function Pocitadlo() {

    const [pocet, nastavPocet] = useState(20)
    const [viditelnost, nastavViditelnost] = useState(true)
    const [viditelnostObrazku, nastavViditelnostObrazku] = useState(false)

    return (
        <>
            { viditelnost && 
                <div>
                    <h2 style={{ color: "red", fontSize: pocet }}>Font size: {pocet}</h2>
                    <button onClick={() => nastavPocet(pocet + 1)}>Přidej</button>
                    <button onClick={() => nastavPocet(pocet - 1)}>Odeber</button>
                </div>
            }
            {!viditelnost && <button onClick={() => nastavViditelnost(true)}>Zobrazit</button>}
            {/* viditelnost == false &&  <button onClick={() => nastavViditelnost(true)}>Zobrazit</button>} */}
            {viditelnost && <button onClick={() => nastavViditelnost(false)}>Skrýt</button>}
            <br/>
            <br/>
            <br/>
            <button onClick={() => nastavViditelnostObrazku(!viditelnostObrazku)}>Zobrazit / skrýt vtip</button>
            <br/>
            <br/>
            {viditelnostObrazku &&
                <img src="joke.jpg"/>
            }
        </>
    );
}

export default Pocitadlo;