package com.icesi.library.DTO;

import com.icesi.library.model.Book;
import jakarta.persistence.OneToMany;

import java.util.List;

public class AuthorDTO {

    private String name;
    private String nationality;
    private List<Book> books;

    public AuthorDTO(String name, String nationality, List<Book> books) {
        this.name = name;
        this.nationality = nationality;
        this.books = books;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
}
