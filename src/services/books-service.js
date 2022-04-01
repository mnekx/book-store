import http from '../http-common';

const getAll = () => http.get('/books');

const get = (id) => http.get(`/books/${id}`);

const create = (data) => http.post('/books', data);

const remove = (id) => http.delete(`/books/${id}`);

const BooksService = {
  getAll,
  get,
  create,
  remove,
};

export default BooksService;
