class Card {
    constructor(suit, string, number) {
        this.suit = suit;
        this.string = string;
        this.number = number;
    }

    show() {
        console.log("Card Info:");
        console.log("Suit:", this.suit);
        console.log("String Value:", this.string);
        console.log("Numerical Value:", this.number);
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.create();
    }

    create() {
        this.cards.push(new Card('Hearts', 'Ace', 1));
        this.cards.push(new Card('Clubs', 'Ace', 1));
        this.cards.push(new Card('Diamonds', 'Ace', 1));
        this.cards.push(new Card('Spades', 'Ace', 1));
        this.cards.push(new Card('Hearts', 'Two', 2));
        this.cards.push(new Card('Clubs', 'Two', 2));
        this.cards.push(new Card('Diamonds', 'Two', 2));
        this.cards.push(new Card('Spades', 'Two', 2));
        this.cards.push(new Card('Hearts', 'Three', 3));
        this.cards.push(new Card('Clubs', 'Three', 3));
        this.cards.push(new Card('Diamonds', 'Three', 3));
        this.cards.push(new Card('Spades', 'Three', 3));
        this.cards.push(new Card('Hearts', 'Four', 4));
        this.cards.push(new Card('Clubs', 'Four', 4));
        this.cards.push(new Card('Diamonds', 'Four', 4));
        this.cards.push(new Card('Spades', 'Four', 4));
        this.cards.push(new Card('Hearts', 'Five', 5));
        this.cards.push(new Card('Clubs', 'Five', 5));
        this.cards.push(new Card('Diamonds', 'Five', 5));
        this.cards.push(new Card('Spades', 'Five', 5));
        this.cards.push(new Card('Hearts', 'Six', 6));
        this.cards.push(new Card('Clubs', 'Six', 6));
        this.cards.push(new Card('Diamonds', 'Six', 6));
        this.cards.push(new Card('Spades', 'Six', 6));
        this.cards.push(new Card('Hearts', 'Seven', 7));
        this.cards.push(new Card('Clubs', 'Seven', 7));
        this.cards.push(new Card('Diamonds', 'Seven', 7));
        this.cards.push(new Card('Spades', 'Seven', 7));
        this.cards.push(new Card('Hearts', 'Eight', 8));
        this.cards.push(new Card('Clubs', 'Eight', 8));
        this.cards.push(new Card('Diamonds', 'Eight', 8));
        this.cards.push(new Card('Spades', 'Eight', 8));
        this.cards.push(new Card('Hearts', 'Nine', 9));
        this.cards.push(new Card('Clubs', 'Nine', 9));
        this.cards.push(new Card('Diamonds', 'Nine', 9));
        this.cards.push(new Card('Spades', 'Nine', 9));
        this.cards.push(new Card('Hearts', 'Ten', 10));
        this.cards.push(new Card('Clubs', 'Ten', 10));
        this.cards.push(new Card('Diamonds', 'Ten', 10));
        this.cards.push(new Card('Spades', 'Ten', 10));
        this.cards.push(new Card('Hearts', 'Jack', 11));
        this.cards.push(new Card('Clubs', 'Jack', 11));
        this.cards.push(new Card('Diamonds', 'Jack', 11));
        this.cards.push(new Card('Spades', 'Jack', 11));
        this.cards.push(new Card('Hearts', 'Queen', 12));
        this.cards.push(new Card('Clubs', 'Queen', 12));
        this.cards.push(new Card('Diamonds', 'Queen', 12));
        this.cards.push(new Card('Spades', 'Queen', 12));
        this.cards.push(new Card('Hearts', 'King', 13));
        this.cards.push(new Card('Clubs', 'King', 13));
        this.cards.push(new Card('Diamonds', 'King', 13));
        this.cards.push(new Card('Spades', 'King', 13));
    }

    shuffle_cards() {
        let len = this.cards.length;
        while (len) {
			let index = Math.floor(Math.random() * len--); // returns a random number between 0 to cards length
			let temp = this.cards[len];
			this.cards[len] = this.cards[index];
			this.cards[index] = temp;
		}

		return this.cards;
    }

    reset() {
        this.cards = [];
        new Deck();
    }

    deal() {
        let len = this.cards.length;
        let random_pick = Math.floor(Math.random() * len--);

        console.log(this.cards[random_pick]);
        for (let i = 0; i < len; i++) {
            if (this.cards[i] === this.cards[random_pick]) {
                this.cards.splice(i, 1);
            }
        }
        return this.cards[random_pick];
    }
 }

let deck = new Deck();
deck.shuffle_cards();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
//deck.reset();
