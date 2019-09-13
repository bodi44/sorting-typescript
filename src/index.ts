import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const stringCharactersCollection = new CharactersCollection('Xaayb');
const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numbersCollection.sort();
stringCharactersCollection.sort();
linkedList.sort();

console.log('Sorted numbers: ', numbersCollection.data);
console.log('Sorted string characters: ', stringCharactersCollection.data);
console.log('Sorted LinkedList elements: ');
linkedList.print();
