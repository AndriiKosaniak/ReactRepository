export class ApiService {
    usersUrl = 'http://jsonplaceholder.typicode.com/users';
    postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

    async getUsers() {
        return (await fetch(this.usersUrl)).json();
    }

    async getUserById(id) {
        return (await fetch(`${this.usersUrl}/${id}`)).json();
    }
    async getPosts() {
        return (await fetch(this.postsUrl)).json();
    }

    async getPostById(id) {
        return (await fetch(`${this.postsUrl}/${id}`)).json();
    }
    async getComments() {
        return (await fetch(this.commentsUrl)).json();
    }

    async getCommentById(id) {
        return (await fetch(`${this.commentsUrl}/${id}`)).json();
    }
}
