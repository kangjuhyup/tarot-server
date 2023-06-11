export const numToType = (num: number) => {
  switch (num) {
    case 0:
      return '사랑';
    case 1:
      return '커리어';
    case 2:
      return '금전';
    case 3:
      return '건강';
  }
};

export const boolToForward = (isForword:boolean) => {
    if(isForword) return '정방향';
    return '역방향';
}

export const numToCard = (num: number) => {
  let cardName = `타로카드 ${num}번 `;
  switch (num) {
    case 0:
      return cardName + '바보';
    case 1:
      return cardName + '마법사';
    case 2:
      return cardName + '여사제';
    case 3:
      return cardName + '여황제';
    case 4:
      return cardName + '황제';
    case 5:
      return cardName + '교황';
    case 6:
      return cardName + '연인';
    case 7:
      return cardName + '전차';
    case 8:
      return cardName + '힘';
    case 9:
      return cardName + '은둔자';
    case 10:
      return cardName + '운명의 수레바퀴';
    case 11:
      return cardName + '정의';
    case 12:
      return cardName + '매달린 사람';
    case 13:
      return cardName + '죽음';
    case 14:
      return cardName + '절제';
    case 15:
      return cardName + '악마';
    case 16:
      return cardName + '탑';
    case 17:
      return cardName + '별';
    case 18:
      return cardName + '달';
    case 19:
      return cardName + '태양';
    case 20:
      return cardName + '심판';
    case 21:
      return cardName + '세계';
    case 22:
      return cardName + '지팡이(Suit of Wands).1 Ace of Wands';
    case 23:
      return cardName + '지팡이(Suit of Wands).2';
    case 24:
      return cardName + '지팡이(Suit of Wands).3';
    case 25:
      return cardName + '지팡이(Suit of Wands).4';
    case 26:
      return cardName + '지팡이(Suit of Wands).5';
    case 27:
      return cardName + '지팡이(Suit of Wands).6';
    case 28:
      return cardName + '지팡이(Suit of Wands).7';
    case 29:
      return cardName + '지팡이(Suit of Wands).8';
    case 30:
      return cardName + '지팡이(Suit of Wands).9';
    case 31:
      return cardName + '지팡이(Suit of Wands).10';
    case 32:
      return cardName + '지팡이(Suit of Wands).11 Page of Wands';
    case 33:
      return cardName + '지팡이(Suit of Wands).12 Night of Wands';
    case 34:
      return cardName + '지팡이(Suit of Wands).14 Queen of Wands';
    case 35:
      return cardName + '지팡이(Suit of Wands).15 King of Wands';
    case 36:
      return cardName + '컵(Suit of Cup).1 Ace of Cups';
    case 37:
      return cardName + '컵(Suit of Cup).2';
    case 38:
      return cardName + '컵(Suit of Cup).3';
    case 39:
      return cardName + '컵(Suit of Cup).4';
    case 40:
      return cardName + '컵(Suit of Cup).5';
    case 41:
      return cardName + '컵(Suit of Cup).6';
    case 42:
      return cardName + '컵(Suit of Cup).7';
    case 43:
      return cardName + '컵(Suit of Cup).8';
    case 44:
      return cardName + '컵(Suit of Cup).9';
    case 45:
      return cardName + '컵(Suit of Cup).10';
    case 46:
      return cardName + '컵(Suit of Cup).11 Page of Cups';
    case 47:
      return cardName + '컵(Suit of Cup).12 Knight of Cups';
    case 48:
      return cardName + '컵(Suit of Cup).13 Queen of Cups';
    case 49:
      return cardName + '컵(Suit of Cup).14 King of Cups';
    case 50:
      return cardName + '검(Suit of Swords).1 Ace of Swords';
    case 51:
      return cardName + '검(Suit of Swords).2';
    case 52:
      return cardName + '검(Suit of Swords).3';
    case 53:
      return cardName + '검(Suit of Swords).4';
    case 54:
      return cardName + '검(Suit of Swords).5';
    case 55:
      return cardName + '검(Suit of Swords).6';
    case 56:
      return cardName + '검(Suit of Swords).7';
    case 57:
      return cardName + '검(Suit of Swords).8';
    case 58:
      return cardName + '검(Suit of Swords).9';
    case 59:
      return cardName + '검(Suit of Swords).10';
    case 60:
      return cardName + '검(Suit of Swords).11 Page of Swords';
    case 61:
      return cardName + '검(Suit of Swords).12 Knight of Swords';
    case 62:
      return cardName + '검(Suit of Swords).13 Queen of Swords';
    case 63:
      return cardName + '검(Suit of Swords).14 King of Swords';
    case 64:
      return cardName + '펜타클(Suit of Pentacles).1 Ace of Pentacles';
    case 65:
      return cardName + '펜타클(Suit of Pentacles).2';
    case 66:
      return cardName + '펜타클(Suit of Pentacles).3';
    case 67:
      return cardName + '펜타클(Suit of Pentacles).4';
    case 68:
      return cardName + '펜타클(Suit of Pentacles).5';
    case 69:
      return cardName + '펜타클(Suit of Pentacles).6';
    case 70:
      return cardName + '펜타클(Suit of Pentacles).7';
    case 71:
      return cardName + '펜타클(Suit of Pentacles).8';
    case 72:
      return cardName + '펜타클(Suit of Pentacles).9';
    case 73:
      return cardName + '펜타클(Suit of Pentacles).10';
    case 74:
      return cardName + '펜타클(Suit of Pentacles).11 Page of Pentacles';
    case 75:
      return cardName + '펜타클(Suit of Pentacles).12 Knight of Pentacles';
    case 76:
      return cardName + '펜타클(Suit of Pentacles).13 Queen of Pentacles';
    case 77:
      return cardName + '펜타클(Suit of Pentacles).14 King of Pentacles';
  }
};
