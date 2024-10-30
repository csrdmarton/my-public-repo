//class

class Book implements BookInterface {
  constructor(
    private _title: string,
    private _author: string,
    private _releaseDate: number
  ) {}

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }

  get releaseDate(): number {
    return this._releaseDate;
  }
}

//extended class
const LOTR: Book = new Book("The Return of the King", "J. R. R. Tolkien", 1970);

class ComicBook extends Book {
  constructor(
    _title: string,
    author: string,
    releaseDate: number,
    private isInStock: boolean
  ) {
    super(_title, author, releaseDate);
  }
  getStock() {
    return this.isInStock;
  }
  get stock(): boolean {
    return this.isInStock;
  }
}

const Batman: ComicBook = new ComicBook("Batman", "Marvelguy", 1990, true);
console.log(Batman);

//interface (only for objects)
export interface BookInterface {
  title: string;
  author: string;
  releaseDate: number;
}

//abstract class (csak leszármazni lehet belőle, példányosítani nem!)
abstract class Cat {
  constructor(public age: number) {}
}

class Leopard extends Cat {
  constructor(age: number, extinct: boolean) {
    super(age);
  }
}
