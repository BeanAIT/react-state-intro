function CiselneTlacitko (props){
    let puvodniCislo = props.puvodniCislo;
        let cisloTlacitka= props.cislo;
        let vysledek = toString(puvodniCislo.concat(cisloTlacitka))
        function nastavCislo(){
            if (puvodniCislo == "0"){
                prop.klikFunkce(cisloTlacitka)
            } else {
                prop.klikFunkce(vysledek)
            }
        }
    return (
        
        
        
        <button onClick={() => nastavCislo()}>{props.cislo}</button>
        
   
   
    
    )
}
export default CiselneTlacitko;