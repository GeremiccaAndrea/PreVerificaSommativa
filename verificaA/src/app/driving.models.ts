export class Driving {
    tipo : string;
    descrizione : string;
    tariffa : string;
    valutazione : number;
    
    constructor(tipo:string, descrizione:string, tariffa:string, valutazione:number) {
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.tariffa = tariffa;
        this.valutazione = valutazione
    }
}
