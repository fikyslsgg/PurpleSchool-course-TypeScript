class Item {
  id: number;
  date: Date;
  title: string;
  constructor(id: number, date: Date, title: string) {
    this.id = id;
    this.date = date;
    this.title = title;
  }
}

class ItemList {
  private items: Item[] = [];
  public sortById() {
    this.items = this.items.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id = b.id) {
        return 0;
      } else {
        return -1;
      }
    })
  }

  public sortByData() {
    this.items = this.items.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else if (a.date = b.date) {
        return 0;
      } else {
        return -1;
      }
    })
  }

  public addItem(item: Item, direction?: SortDirection) {
    this.items.push(item);
  }

  public getItem() {
    return this.items
  }

  public count() {
    return this.items.length;
  }

  public getIteratorId() {
    return new DateItemIterator(this);
  }

  public getIteratorDate() {
    return new DateItemIterator(this);
  }
}

interface IIterator<T> {
  current(): T | undefined;
  next(): T | undefined;
  prev(): T | undefined;
  index(): number;
}

type SortDirection = 'asc' | 'desc';

class TaskIterator implements IIterator<Item> {
  private position: number = 0;
  private itemList: ItemList;


  constructor(taskList: ItemList, key: keyof Item, direction?: SortDirection) {
    if (direction === 'asc') {
      taskList.sortById();
    } else if (direction === 'desc') {
      taskList.sortById();
      taskList.getItem().reverse();
    } else {
      taskList.sortById();
    }
    this.itemList = taskList;
  }

  current(): Item | undefined {
    return this.itemList.getItem()[this.position];
  }
  next(): Item | undefined {
    this.position += 1;
    return this.itemList.getItem()[this.position];
  }
  prev(): Item | undefined {
    this.position -= 1;
    return this.itemList.getItem()[this.position];
  }
  index(): number {
    return this.position;
  }
}

class DateItemIterator implements IIterator<Item> {
  private position: number = 0;
  private itemList: ItemList;
  constructor(itemList: ItemList, direction?: SortDirection) {
    if (direction === 'asc') {
      itemList.sortByData();
    } else if (direction === 'desc') {
      itemList.sortByData();
      itemList.getItem().reverse();
    } else {
      itemList.sortByData();
    }
    this.itemList = itemList;
  }
  current(): Item | undefined {
    return this.itemList.getItem()[this.position];
  }
  next(): Item | undefined {
    this.position += 1;
    return this.itemList.getItem()[this.position];
  }
  prev(): Item | undefined {
    this.position -= 1;
    return this.itemList.getItem()[this.position];
  }

  index(): number {
    return this.position;
  }
}