// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const app = new Vue({
    el : '#root',
    data:{
        lista:[
            {
                text:'fare la spesa',
                done:false
            },
            {
                text:'cucinare il ragù',
                done:true
            },
            {
                text:'tagliare l erba',
                done:false
            }
        ],
        inputValue:"",
        done = false
    },
    methods:{
        addLista: function(){
            if(this.inputValue != ""){
                this.lista.push({
                    text:this.inputValue,
                    done=false
                });
                
                this.inputValue ="";
            }
        },
        removeLista:function(index){
            this.lista.splice(index,1);
        }
    }
});