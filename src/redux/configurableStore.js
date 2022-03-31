/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers } from 'redux';
import categories from './categories/categories';
import books from './books/books';

const rootReducer = combineReducers({ categories, books });

export const store = createStore(rootReducer);
