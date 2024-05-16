import React, { Component } from "react";  
// material-ui 로부터 List 를 import
import {List, ListItem } from '@material-ui/core';
import BookListItem from "./BookListItem";


class BookList extends Component{
    render (){

        const books = this.props.books;
     // const {books} = this.props;

        return(
            <List>
                <ListItem> 
                   <BookListItem book={books[0]}/>
                </ListItem>
                <ListItem>
                   Item 02 
                </ListItem>
                <ListItem>
                   Item 03 
                </ListItem>
            </List>
        )
    }
}

export default BookList;