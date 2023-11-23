package com.icesi.library.DTO;

import com.icesi.library.model.Author;
import com.icesi.library.model.Book;

public class MapperDTO {

    public static AuthorDTO authorToDTO(Author author){
        AuthorDTO authorDTO = new AuthorDTO(author.getName(), author.getNationality(), author.getBooks());
        return authorDTO;
    }

    public static BookDTO bookToDTO(Book book){
        BookDTO bookDTO = new BookDTO(book.getTitle(), book.getPublicationDate(), book.getAuthorID_1());
        return bookDTO;
    }
}
