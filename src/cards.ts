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
  { id: 8, number: 8, suit: Suits.Heart },
  { id: 9, number: 9, suit: Suits.Heart },
  { id: 10, number: 10, suit: Suits.Heart },
  { id: 11, number: 11, suit: Suits.Heart },
  { id: 12, number: 12, suit: Suits.Heart },
  { id: 13, number: 13, suit: Suits.Heart },

  { id: 14, number: 1, suit: Suits.Heart },
  { id: 15, number: 2, suit: Suits.Heart },
  { id: 16, number: 3, suit: Suits.Heart },
  { id: 17, number: 4, suit: Suits.Heart },
  { id: 18, number: 5, suit: Suits.Heart },
  { id: 19, number: 6, suit: Suits.Heart },
  { id: 20, number: 7, suit: Suits.Heart },
  { id: 21, number: 8, suit: Suits.Heart },
  { id: 22, number: 9, suit: Suits.Heart },
  { id: 21, number: 10, suit: Suits.Heart },
  { id: 22, number: 11, suit: Suits.Heart },
  { id: 23, number: 12, suit: Suits.Heart },
  { id: 24, number: 13, suit: Suits.Heart },

  { id: 25, number: 1, suit: Suits.Spades },
  { id: 26, number: 2, suit: Suits.Spades },
  { id: 27, number: 3, suit: Suits.Spades },
  { id: 28, number: 4, suit: Suits.Spades },
  { id: 29, number: 5, suit: Suits.Spades },
  { id: 30, number: 6, suit: Suits.Spades },
  { id: 31, number: 7, suit: Suits.Spades },
  { id: 32, number: 8, suit: Suits.Spades },
  { id: 33, number: 9, suit: Suits.Spades },
  { id: 34, number: 10, suit: Suits.Spades },
  { id: 35, number: 11, suit: Suits.Spades },
  { id: 36, number: 12, suit: Suits.Spades },
  { id: 37, number: 13, suit: Suits.Spades },

  { id: 38, number: 1, suit: Suits.Spades },
  { id: 39, number: 2, suit: Suits.Spades },
  { id: 40, number: 3, suit: Suits.Spades },
  { id: 41, number: 4, suit: Suits.Spades },
  { id: 42, number: 5, suit: Suits.Spades },
  { id: 43, number: 6, suit: Suits.Spades },
  { id: 44, number: 7, suit: Suits.Spades },
  { id: 45, number: 8, suit: Suits.Spades },
  { id: 46, number: 9, suit: Suits.Spades },
  { id: 47, number: 10, suit: Suits.Spades },
  { id: 48, number: 11, suit: Suits.Spades },
  { id: 49, number: 12, suit: Suits.Spades },
  { id: 50, number: 13, suit: Suits.Spades },
];
