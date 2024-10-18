export enum Suits {
  Heart = "heart",
  Clubs = "clubs",
  Diamonds = "diamonds",
  Spades = "spades",
}

export type Card = {
  id: number;
  number: number;
  suit: Suits;
};

export const defaultCards = [
  { id: 1, number: 1, suit: Suits.Heart },
  { id: 2, number: 2, suit: Suits.Heart },
  { id: 3, number: 3, suit: Suits.Heart },
  { id: 4, number: 4, suit: Suits.Heart },
  { id: 5, number: 5, suit: Suits.Heart },
  { id: 6, number: 6, suit: Suits.Heart },
  { id: 7, number: 7, suit: Suits.Heart },

  { id: 8, number: 1, suit: Suits.Heart },
  { id: 9, number: 2, suit: Suits.Heart },
  { id: 10, number: 3, suit: Suits.Heart },
  { id: 11, number: 4, suit: Suits.Heart },
  { id: 12, number: 5, suit: Suits.Heart },
  { id: 13, number: 6, suit: Suits.Heart },
  { id: 14, number: 7, suit: Suits.Heart },

  { id: 15, number: 1, suit: Suits.Spades },
  { id: 16, number: 2, suit: Suits.Spades },
  { id: 17, number: 3, suit: Suits.Spades },
  { id: 18, number: 4, suit: Suits.Spades },
  { id: 19, number: 5, suit: Suits.Spades },
  { id: 20, number: 6, suit: Suits.Spades },
  { id: 21, number: 7, suit: Suits.Spades },

  { id: 22, number: 1, suit: Suits.Spades },
  { id: 23, number: 2, suit: Suits.Spades },
  { id: 24, number: 3, suit: Suits.Spades },
  { id: 25, number: 4, suit: Suits.Spades },
  { id: 26, number: 5, suit: Suits.Spades },
  { id: 27, number: 6, suit: Suits.Spades },
  { id: 28, number: 7, suit: Suits.Spades },

  { id: 29, number: 1, suit: Suits.Diamonds },
  { id: 30, number: 2, suit: Suits.Diamonds },
  { id: 31, number: 3, suit: Suits.Diamonds },
  { id: 32, number: 4, suit: Suits.Diamonds },
  { id: 33, number: 5, suit: Suits.Diamonds },
  { id: 34, number: 6, suit: Suits.Diamonds },
  { id: 35, number: 7, suit: Suits.Diamonds },

  { id: 36, number: 1, suit: Suits.Clubs },
  { id: 37, number: 2, suit: Suits.Clubs },
  { id: 38, number: 3, suit: Suits.Clubs },
  { id: 39, number: 4, suit: Suits.Clubs },
  { id: 40, number: 5, suit: Suits.Clubs },
  { id: 41, number: 6, suit: Suits.Clubs },
  { id: 42, number: 7, suit: Suits.Clubs },
];
