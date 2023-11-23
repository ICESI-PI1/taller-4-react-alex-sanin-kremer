package com.icesi.library.DTO;

import com.icesi.library.model.Author;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.Instant;

public class BookDTO {
    private String title;
    private Instant publicationDate;
    private Long authorID_1;

    public BookDTO(String title, Instant publicationDate, Long authorID_1) {
        this.title = title;
        this.publicationDate = publicationDate;
        this.authorID_1 = authorID_1;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Instant getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Instant publicationDate) {
        this.publicationDate = publicationDate;
    }

    public Long getAuthorID_1() {
        return authorID_1;
    }

    public void setAuthorID_1(Long authorID_1) {
        this.authorID_1 = authorID_1;
    }
}
