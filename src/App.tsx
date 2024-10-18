"use-client";

import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";
import "./app.css";
import { Card as CardType, defaultCards, Suits } from "./cards";
import { Button } from "./components";

enum BattleTurn {
  Player,
  Enemy,
}

const suitIcon: { [key in Suits]: string } = {
  heart: "♥",
  diamonds: "♦",
  spades: "♠",
  clubs: "♣",
};

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function EmptySlot({
  children,
  suit,
  onClick,
}: {
  children?: ReactNode;
  suit?: Suits;
  onClick?: () => void;
}) {
  return (
    <button
      onDrop={(e) => console.log(e)}
      onClick={onClick}
      className={`flex flex-col items-center justify-center text-2xl bg-slate-700 rounded-2xl w-16 h-24 ${
        Boolean(suit) && "bg-orange-400"
      }`}
    >
      <div>{suit && suitIcon[suit]}</div>

      <div className="">{children}</div>
    </button>
  );
}

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  suit: Suits;
}

const cardColor = {
  [Suits.Heart]: "bg-red-500",
  [Suits.Spades]: "bg-black",
  [Suits.Diamonds]: "bg-pink-500",
  [Suits.Clubs]: "bg-slate-500",
};

function Card({ children, suit, ...rest }: CardProps) {
  return (
    <button
      draggable
      {...rest}
      className={`flex flex-col items-center justify-center text-2xl  rounded-2xl w-16 h-24 ${cardColor[suit]}`}
    >
      <div>{suitIcon[suit]}</div>

      <div className="">{children}</div>
    </button>
  );
}

function Status({ children, suit }: { children: ReactNode; suit: Suits }) {
  return (
    <div
      className={`flex gap-2 items-center justify-center border-2 border-gray-500 text-lg rounded-lg py-2 px-3 ${cardColor[suit]}`}
    >
      <div>{suitIcon[suit]}</div>

      <div className="">{children}</div>
    </div>
  );
}

function App() {
  const [battleTurn, setBattleTurn] = useState(BattleTurn.Player);
  const [turnBuy, setTurnBuy] = useState(true);
  const [deck, setDeck] = useState<CardType[]>(defaultCards);

  const [cards, setCards] = useState<CardType[]>([]);
  const [player, setPlayer] = useState({
    h: 27,
    d: 0,
    s: 0,
  });

  const [enemyCards, setEnemyCards] = useState<CardType[]>([]);
  const [enemy, setEnemy] = useState({
    h: 27,
    d: 0,
    s: 0,
  });

  const [triplets, setTriplets] = useState<CardType[]>([]);
  const [tripletsValues, setTripletsValues] = useState({
    h: 0,
    d: 0,
    s: 0,
  });

  const [trash, setTrash] = useState<CardType | null>(null);

  useEffect(() => {
    function resetDecks() {
      const newDeck = [...deck];
      const playerDeck: CardType[] = [];
      const enemyDeck: CardType[] = [];

      for (let i = 0; i < 9; i++) {
        const randomNum = getRandomIntInclusive(0, newDeck.length - 1);

        const card = newDeck[randomNum];
        const index = newDeck.indexOf(card);
        if (index !== -1) {
          const cardToAdd = newDeck.splice(index, 1);

          playerDeck.push(cardToAdd[0]);
        }
      }
      for (let i = 0; i < 9; i++) {
        const randomNum = getRandomIntInclusive(0, newDeck.length - 1);

        const card = newDeck[randomNum];
        const index = newDeck.indexOf(card);
        if (index !== -1) {
          const cardToAdd = newDeck.splice(index, 1);

          enemyDeck.push(cardToAdd[0]);
        }
      }

      setDeck(newDeck);
      setCards(playerDeck);
      setEnemyCards(enemyDeck);
    }

    resetDecks();
  }, []);

  useEffect(() => {
    const newTripletsValues = {
      h: 0,
      d: 0,
      s: 0,
    };

    triplets.forEach((card) => {
      const { number, suit } = card;

      if (suit === Suits.Heart) {
        newTripletsValues.h += number;
      }
      if (suit === Suits.Spades) {
        newTripletsValues.s += number;
      }
      if (suit === Suits.Diamonds) {
        newTripletsValues.d += number;
      }
    });

    setTripletsValues(newTripletsValues);
  }, [triplets.length]);

  function utilizeCard(
    card: CardType,
    setDeck: React.Dispatch<React.SetStateAction<CardType[]>>
  ) {
    if (triplets.length < 3) {
      setDeck((cur) => {
        const index = cur.indexOf(card);
        if (index !== -1) {
          cur.splice(index, 1);
        }

        return cur;
      });
      setTriplets((cur) => {
        return [...cur, card];
      });
    }
  }

  function renderCards(cardsToRender: CardType[]) {
    return (
      cardsToRender
        // .sort((a, b) => a.id - b.id)
        .map((card) => {
          const { id, number, suit } = card;

          return (
            <Card
              key={id}
              onClick={() => {
                battleTurn === BattleTurn.Player
                  ? utilizeCard(card, setCards)
                  : utilizeCard(card, setEnemyCards);
              }}
              suit={suit}
            >
              {number}
            </Card>
          );
        })
    );
  }

  return (
    <div className="flex flex-col gap-2 p-5 max-w-[800px] m-auto">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Status suit={Suits.Heart}>{player.h}</Status>
          <Status suit={Suits.Diamonds}>{player.d}</Status>
          <Status suit={Suits.Spades}>{player.s}</Status>
          <h2 className="flex items-center justify-center px-2 py-1 w-20 bg-blue-600 rounded-md">
            player 1
          </h2>
        </div>

        <span>vs</span>

        <div className="flex items-center gap-2">
          <h2 className="flex items-center justify-center px-2 py-1 w-20 bg-green-500 rounded-md">
            player 2
          </h2>

          <Status suit={Suits.Heart}>{enemy.h}</Status>
          <Status suit={Suits.Diamonds}>{enemy.d}</Status>
          <Status suit={Suits.Spades}>{enemy.s}</Status>
        </div>
      </div>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />

      <div className="flex gap-6 m-auto">
        <div className="flex flex-col items-center gap-1">
          <span>descarte</span>

          {trash ? (
            <EmptySlot
              onClick={() => {
                if (turnBuy) {
                  if (battleTurn === BattleTurn.Player) {
                    setCards((cur) => [...cur, trash]);
                  } else {
                    setEnemyCards((cur) => [...cur, trash]);
                  }

                  setTrash(null);
                  setTurnBuy(false);
                }
              }}
              key={trash.id}
              suit={trash.suit}
            >
              {trash.number}
            </EmptySlot>
          ) : (
            <EmptySlot />
          )}
        </div>

        <div className="flex flex-col items-center gap-1">
          <span>baralho</span>

          <Button
            disabled={!turnBuy}
            onClick={() => {
              function buyCard() {
                const randomNum = getRandomIntInclusive(1, deck.length);
                const card = deck[randomNum];

                if (card) {
                  setDeck((cur) => {
                    const index = cur.indexOf(card);
                    if (index !== -1) {
                      cur.splice(index, 1);
                    }

                    return cur;
                  });

                  if (battleTurn === BattleTurn.Player) {
                    setCards((cur) => [...cur, card]);
                  } else {
                    setEnemyCards((cur) => [...cur, card]);
                  }

                  setTurnBuy(false);
                } else {
                  buyCard();
                }
              }

              buyCard();
            }}
          >
            comprar
          </Button>
        </div>
      </div>

      <br />
      <br />
      <hr />

      <div className="flex items-start gap-2 p-3">
        {triplets.map((card) => {
          const { id, number, suit } = card;

          return (
            <EmptySlot
              key={id}
              suit={suit}
              onClick={() => {
                setTriplets((cur) => {
                  const index = cur.indexOf(card);
                  if (index !== -1) {
                    cur.splice(index, 1);
                  }

                  return cur;
                });

                if (battleTurn === BattleTurn.Player) {
                  setCards((cur) => {
                    return [...cur, card];
                  });
                } else {
                  setEnemyCards((cur) => {
                    return [...cur, card];
                  });
                }
              }}
            >
              {number}
            </EmptySlot>
          );
        })}

        {new Array(3 - triplets.length).fill(null).map(() => (
          <EmptySlot />
        ))}

        <div className="flex flex-col gap-4">
          <Button
            disabled={triplets.length < 3}
            onClick={() => {
              const { h, d, s } = tripletsValues;

              let isValidSuit = false;
              let isValidSameNumber = false;
              let isValidSequence = false;

              let suit: Suits | undefined = undefined;
              let num: number | undefined = undefined;

              isValidSuit = triplets.every((cur) => {
                if (!suit) {
                  suit = cur.suit;

                  return true;
                }

                return suit === cur.suit;
              });

              isValidSameNumber = triplets.every((cur) => {
                if (!num) {
                  num = cur.number;

                  return true;
                }

                return num === cur.number;
              });

              if (triplets[0].number + 1 === triplets[1].number) {
                if (triplets[1].number + 1 === triplets[2].number) {
                  isValidSequence = true;
                }
              }

              if (!isValidSequence) {
                if (triplets[0].number - 1 === triplets[1].number) {
                  if (triplets[1].number - 1 === triplets[2].number) {
                    isValidSequence = true;
                  }
                }
              }

              if (isValidSameNumber || (isValidSuit && isValidSequence)) {
                setTriplets([]);

                if (battleTurn === BattleTurn.Player) {
                  setPlayer((cur) => {
                    return {
                      d: cur.d + d,
                      h: cur.h + h,
                      s: cur.s + s,
                    };
                  });
                } else {
                  setEnemy((cur) => {
                    return {
                      d: cur.d + d,
                      h: cur.h + h,
                      s: cur.s + s,
                    };
                  });
                }
              } else {
                alert("combinação invalida");
              }
            }}
          >
            completar!
          </Button>

          <Button
            disabled={
              !(
                !turnBuy &&
                (triplets.length === 1 ||
                  (battleTurn === BattleTurn.Player
                    ? cards.length === 0
                    : enemyCards.length === 0))
              )
            }
            onClick={() => {
              if (triplets.length === 1) {
                const card = triplets[0];

                if (trash) {
                  setDeck((state) => [...state, trash]);
                }
                setTrash(card);
                setTriplets([]);
              } else {
                triplets.forEach((tripletCard) => {
                  setTriplets((cur) => {
                    const index = cur.indexOf(tripletCard);
                    if (index !== -1) {
                      cur.splice(index, 1);
                    }

                    return cur;
                  });

                  if (battleTurn === BattleTurn.Player) {
                    setCards((cur) => {
                      return [...cur, tripletCard];
                    });
                  } else {
                    setEnemyCards((cur) => {
                      return [...cur, tripletCard];
                    });
                  }
                });

                if (battleTurn === BattleTurn.Player) {
                  setEnemy((cur) => {
                    const { s } = player;
                    const damage = s - cur.d > 0 ? s - cur.d : 0;

                    return {
                      ...cur,
                      h: cur.h - damage,
                    };
                  });
                } else {
                  setPlayer((cur) => {
                    const { s } = enemy;
                    const damage = s - cur.d > 0 ? s - cur.d : 0;

                    return {
                      ...cur,
                      h: cur.h - damage,
                    };
                  });
                }
              }

              setTurnBuy(true);

              if (battleTurn === BattleTurn.Player) {
                setBattleTurn(BattleTurn.Enemy);
              } else {
                setBattleTurn(BattleTurn.Player);
              }
            }}
          >
            finalizar turno
          </Button>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2>pontos da combinação</h2>

          <div className="flex gap-2">
            <Status suit={Suits.Heart}>{tripletsValues.h}</Status>
            <Status suit={Suits.Diamonds}>{tripletsValues.d}</Status>
            <Status suit={Suits.Spades}>{tripletsValues.s}</Status>
          </div>
        </div>
      </div>

      {battleTurn === BattleTurn.Player ? (
        <h2 className="flex items-center justify-center px-2 py-1 w-20 bg-blue-600 rounded-md">
          player 1
        </h2>
      ) : (
        <h2 className="flex items-center justify-center px-2 py-1 w-20 bg-green-500 rounded-md">
          player 2
        </h2>
      )}

      <div className="flex gap-2 flex-wrap">
        {battleTurn === BattleTurn.Player
          ? renderCards(cards)
          : renderCards(enemyCards)}
      </div>
    </div>
  );
}

export default App;
