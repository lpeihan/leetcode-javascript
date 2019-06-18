export default class HashTable {
  constructor() {
    this.store = [];
    this.count = 0;
    this.limit = 7;
  }

  // 判断是否为质数
  _isPrime(num) {
    const tmp = Math.sqrt(num) | 0; // 开根号取整

    for (let i = 2; i <= tmp; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  _getPrime(num) {
    while (this._isPrime(num) === false) {
      num++;
    }
    return num;
  }

  // 哈希函数
  hashFunc(str, limit) {
    let hashCode = 0;

    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    hashCode = hashCode % limit;

    return hashCode;
  }

  set(key, val) {
    const index = this.hashFunc(key, this.limit);

    if (!this.store[index]) {
      this.store[index] = [];
    }

    let bucket = this.store[index];

    let flag = false;

    // 如果 key 已经存在，就覆盖原来的值
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];

      if (tuple[0] === key) {
        flag = true;
        tuple[1] = val;
      }
    }

    // 如果 key 不存在，就添加新值
    if (flag === false) {
      this.count++;
      bucket.push([key, val]);

      // 0.75 为装填因子，大于0.75就要扩容
      if (this.count > this.limit * 0.75) {
        const prime = this._getPrime(this.limit * 2);
        this.resize(prime);
      }
    }

    return val;
  }

  get(key) {
    const index = this.hashFunc(key, this.limit);

    let bucket = this.store[index] || [];

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];

      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return undefined;
  }

  delete(key) {
    const index = this.hashFunc(key, this.limit);

    let bucket = this.store[index] || [];

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        if (this.limit > 7 && this.count < this.limit * 0.25) {
          const num = (this.limit / 2) | 0;
          const prime = this._getPrime(num);
          this.resize(prime);
        }
      }
    }

    return true;
  }

  get size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  resize(limit) {
    const originalStore = this.store;

    this.limit = limit;
    this.count = 0;
    this.store = [];

    for (let i = 0; i < originalStore.length; i++) {
      const bucket = originalStore[i] || [];

      for (let j = 0; j < bucket.length; j++) {
        const tuple = bucket[j];

        this.set(tuple[0], tuple[1]);
      }
    }
  }
}
