export default function Character(name, type) {
  if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
    throw new Error('в имени должно быть от 2 до 10 символов');
  }

  const units = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Undead: { attack: 25, defence: 25 },
    Zombie: { attack: 40, defence: 10 },
    Daemon: { attack: 10, defence: 40 },
  };

  if (!Object.keys(units).includes(type) || typeof type !== 'string') {
    throw new Error('тип персонажа должен быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = units[type].attack;
  this.defence = units[type].defence;
}
