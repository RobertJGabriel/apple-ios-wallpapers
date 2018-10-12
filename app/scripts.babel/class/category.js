export default class Category {
  constructor(id, value) {
    this.id = id;
    this.url = `https://www.netflix.com/browse/genre/${id}`;
    this.value = value;
    this.favorite = localStorage.getItem(value.toLowerCase()) ? true : false // Check if its a favioute in the local storage
  }
}