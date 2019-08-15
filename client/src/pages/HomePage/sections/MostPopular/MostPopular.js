import React, { Component } from 'react';
import "./MostPopular.css";

//import icon
import BookIcon from "./../../../../assets/icons/book-icon.svg";
//import component
import EachBook from "./EachBook/EachBook";

class MostPopular extends Component {
    render() {
        var mostPopularBooksList = (
            <div>
                <ul className="mostPopularBooksList">{this.props.books.map((book,index)=>{
                    return (
                        <EachBook
                            key={book._id}
                            img={book.coverURL}
                            bookName={book.bookName}
                            authorName={book.authorName}
                            downloadLink={book.downloadLink}
                        />
                    )
                })}</ul>
            </div>
        )
        return (
            <div className="Most-popular-section">
                <div className="Most-popular-section-container">
                    <p className="most-popular-book-section-icon-line"><img src={BookIcon} alt="book-icon" className="most-popular-book-section-icon"/></p>
                    <p className="most-popular-book-section-heading">Most Popular Books</p>
                    {mostPopularBooksList}
                </div>
            </div>
        );
    }
}

export default MostPopular;