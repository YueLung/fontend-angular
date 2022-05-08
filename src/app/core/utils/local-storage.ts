export class LocalStorage {

  static getUserName() {
    return localStorage.getItem('userName');
  }

  static removeUserName() {
    localStorage.removeItem('userName');
  }
}



