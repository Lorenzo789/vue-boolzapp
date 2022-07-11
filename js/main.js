/**
 * popolare dinamicamente la parte sinistra della pagina
 * regolare il css della stessa
 * 
 * funzione per il click
 * 
 * fare lo stesso procedimento per la parte destra 
 * occuparsi della visualizzazione dei messaggi all'interno della chat
 * 
 * @keyUp qualcosa per il pulsante enter inserire nuovo messaggio verde
 * 
 * Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
 */


const root = new Vue(
    {
        el: '#root',
        data: 
        {           
            activeChat: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            newText: '',

            searchContact: '',

            dropDownIconClicked: false,

            dropDownIconIndex: 0,

            deleteMessage: false,
        },

        methods: 
        {
            selectDifferentChat: function(index){
                this.activeChat = index;
            },

            insertNewMessage: function (messageText, activeIndex) {
                const newMessage = {
                    date: '08/07/2022 12:38:00',
                    message: messageText,
                    status: 'sent'
                }
                this.contacts[activeIndex].messages.push(newMessage);

                this.newText= '';

                this.timeRespondIa(activeIndex);
            },

            messageIa: function (activeIndex) {
                const messageIa = {
                    date: '08/07/2022 15:38:00',
                    message: 'Yes Skarbrand My Lord!!',
                    status: 'received'
                }
                this.contacts[activeIndex].messages.push(messageIa);
            },

            timeRespondIa: function(activeIndex){
                setTimeout(() => {this.messageIa(activeIndex)}, 3000);
            },

            filterContact: function(){

                let index = 0
                
                while (index < this.contacts.length) {
                    
                    const inputContact = this.searchContact.toLowerCase();
                    
                    const contactName = this.contacts[index].name.toLowerCase();
                    
                    if (!contactName.includes(inputContact)) {
                        
                        this.contacts[index].visible = false;
                        
                    } else {
                        
                        this.contacts[index].visible = true;
                    };
                    
                    index++
                    
                }
                
                this.searchContact= '';
            },

            dropDownMenu: function(index){

                this.dropDownIconIndex = index;

                if (!this.dropDownIconClicked) {

                    this.dropDownIconClicked = true;

                  } else {

                    this.dropDownIconClicked = false;

                  }
            },

            deleteSelectedMessage: function(element, index){

                this.deleteMessage = true;

                console.log('ELIMINATO');

            }
        }
    }
);
