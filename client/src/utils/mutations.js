import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
        token
    }
    }
`;

export const ADD_USER = gql`
    mutation addUser($email: String, $username: String, $password: String) {
    addUser(email: $email, username: $username, password: $password) {
        token
        user {
        _id
        bookCount
        }
    }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookInfo: BookInput) {
    saveBook(bookInfo: $bookInfo) {
        _id
        email
        username
        savedBooks {
            bookId
            authors
            title
            description
            image
            link}
    }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID) {
    removeBook(bookId: $bookId) {
        _id
        bookCount
        email
        username
    }
    }
`;