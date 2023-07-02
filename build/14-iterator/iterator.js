"use strict";
class Item {
    constructor(id, date, title) {
        this.id = id;
        this.date = date;
        this.title = title;
    }
}
class ItemList {
    constructor() {
        this.items = [];
    }
    sortById() {
        this.items = this.items.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }
            else if (a.id = b.id) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    sortByData() {
        this.items = this.items.sort((a, b) => {
            if (a.date > b.date) {
                return 1;
            }
            else if (a.date = b.date) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem() {
        return this.items;
    }
    count() {
        return this.items.length;
    }
    getIteratorId() {
        return new IdItemIterator(this);
    }
    getIteratorDate() {
        return new DateItemIterator(this);
    }
}
class IdItemIterator {
    constructor(itemList) {
        this.position = 0;
        itemList.sortById();
        this.itemList = itemList;
    }
    current() {
        return this.itemList.getItem()[this.position];
    }
    next() {
        this.position += 1;
        return this.itemList.getItem()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.itemList.getItem()[this.position];
    }
    index() {
        return this.position;
    }
}
class DateItemIterator {
    constructor(itemList) {
        this.position = 0;
        itemList.sortByData();
        this.itemList = itemList;
    }
    current() {
        return this.itemList.getItem()[this.position];
    }
    next() {
        this.position += 1;
        return this.itemList.getItem()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.itemList.getItem()[this.position];
    }
    index() {
        return this.position;
    }
}
