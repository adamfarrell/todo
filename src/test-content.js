const db = {
  'molgress': {
    name: 'molgress',
    lists: [
      {
        name: 'Fruits',
        items: [
          { id: 1, text: 'Oranges', isComplete: false },
          { id: 2, text: 'Apples', isComplete: false },
          { id: 3, text: 'Red grapes', isComplete: false },
          { id: 4, text: 'Plums', isComplete: true }
        ]
      },
      {
        name: 'Games',
        items: [
          { id: 1, text: 'Outer Worlds', isComplete: true },
          { id: 2, text: 'Star Wars Jedi: Fallen Order', isComplete: false },
          { id: 3, text: 'The Last of Us 2', isComplete: false },
          { id: 4, text: 'Cyberpunk 2077', isComplete: false }
        ]
      },
      {
        name: 'Colors',
        items: [
          { id: 1, text: 'Blue', isComplete: false },
          { id: 2, text: 'Green', isComplete: false },
          { id: 3, text: 'Red', isComplete: false },
          { id: 4, text: 'Purple', isComplete: false }
        ]
      },
      {
        name: 'Numeros',
        items: [
          { id: 1, text: 'Uno', isComplete: false },
          { id: 2, text: 'Dos', isComplete: false },
          { id: 3, text: 'Tres', isComplete: false },
          { id: 4, text: 'Cuatro', isComplete: false }
        ]
      },
      {
        name: 'Pets',
        items: [
          { id: 1, text: 'Cats', isComplete: false },
          { id: 2, text: 'Rats', isComplete: false },
          { id: 3, text: 'Dogs', isComplete: false },
          { id: 4, text: 'Fish', isComplete: false }
        ]
      }
    ]
  }

}

export default db;