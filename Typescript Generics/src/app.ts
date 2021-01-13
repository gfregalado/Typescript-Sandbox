/* const names: Array<string> = [];

const promise: Promise<String> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done');
  }, 2000);
});
 */

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Gonçalo' }, { age: 28 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no value.';
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Gonçalo' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Gonçalo');
textStorage.addItem('Teresa');
console.log(textStorage.getItems());
textStorage.removeItem('Gonçalo');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

/* const objStorage = new DataStorage<object>();

const gonObj = { name: 'Gonçalo' }
const terObj = { name: 'Teresa' }

objStorage.addItem(gonObj);
objStorage.addItem(terObj);
 */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Gonçalo', 'Teresa'];
