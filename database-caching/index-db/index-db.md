# IndexDB

- client side storage for data persistent
- key-value store (complex data structures like files, images, etc.)
- store data in object store
- create indexed for performance (search, sort, etc.)
- 100mbs of data, large data set
- async api - non blocking
- persist across browser sessions

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Dexie.js](https://dexie.org/docs/Tutorial/React)

## Usage

```js
// open database
const db = indexedDB.open('mydb', 1);

// create object store
db.onupgradeneeded = function(event) {
  const db = event.target.result;
  const store = db.createObjectStore('mystore', { keyPath: 'id' });
};

// on error
db.onerror = function(event) {
  console.log('error', event.target.error);
};

// get request
const getRequest = db.transaction('mystore').objectStore('mystore').get('key');

// on success
getRequest.onsuccess = function(event) {
  console.log('data', event.target.result);
};

// transaction
const transaction = db.transaction('mystore', 'readwrite');

// add data
transaction.objectStore('mystore').
```

## when to use

- large data set
- offline data
- complex data structures
- async api
- data cache for performance
- lot of history data

## when not to use

- secure or sensitive data
- small data set
- sync api
