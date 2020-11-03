export class ApiService {
    _url = 'http://jsonplaceholder.typicode.com/users';

    async getUsers() {
        return (await fetch(this._url)).json();
    }

    async getUserById(id) {
        return (await fetch(`${this._url}/${id}`)).json();
    }
}
