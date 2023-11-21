package com.icesi.library.service;

import com.icesi.library.model.Author;
import com.icesi.library.model.Book;
import com.icesi.library.repository.AuthorRepository;
import com.icesi.library.repository.BookRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class AuthorServiceTest {

    @InjectMocks
    private AuthorService authorService;

    @Mock
    private AuthorRepository authorRepository;

    @Mock
    private BookRepository bookRepository;

    @Test
    void getAllAuthors() {
        Author author = new Author(1L, "John Doe", "US");
        Mockito.when(authorRepository.findAll()).thenReturn(List.of(author));
        List<Author> authors = authorService.getAllAuthors();
        Assertions.assertThat(authors).isNotEmpty();
        Assertions.assertThat(authors).contains(author);
    }

    @Test
    void getAuthorByID() throws Exception {
        long authorId = 1L;
        Author author = new Author(authorId, "John Doe", "US");
        Mockito.when(authorRepository.findById(authorId)).thenReturn(Optional.of(author));
        Author retrievedAuthor = authorService.getAuthorByID(authorId);
        Assertions.assertThat(retrievedAuthor).isNotNull();
        Assertions.assertThat(retrievedAuthor.getID()).isEqualTo(author.getID());
        Assertions.assertThat(retrievedAuthor.getName()).isEqualTo(author.getName());
    }

    @Test
    void getAuthorByID_NotFound() {
        long nonExistingAuthorId = 99L;
        Mockito.when(authorRepository.findById(nonExistingAuthorId)).thenReturn(Optional.empty());
        Exception exception = assertThrows(Exception.class, () -> {
            authorService.getAuthorByID(nonExistingAuthorId);
        });
        Assertions.assertThat(exception.getMessage()).isEqualTo("The author with ID 99 does not exist");
    }

    @Test
    void createAuthor() {
        Author authorToCreate = new Author(null, "New Author", "UK");
        Author createdAuthor = new Author(1L, "New Author", "UK");
        Mockito.when(authorRepository.save(authorToCreate)).thenReturn(createdAuthor);
        Author result = authorService.createAuthor(authorToCreate);
        Assertions.assertThat(result).isNotNull();
        Assertions.assertThat(result.getID()).isEqualTo(createdAuthor.getID());
        Assertions.assertThat(result.getName()).isEqualTo(createdAuthor.getName());
    }

    @Test
    void updateAuthor() throws Exception {
        long authorId = 1L;
        Author existingAuthor = new Author(authorId, "Existing Author", "US");
        Author updatedAuthorData = new Author(authorId, "Updated Author", "UK");  // Set the correct ID here
        Author updatedAuthor = new Author(authorId, "Updated Author", "UK");

        Mockito.when(authorRepository.findById(authorId)).thenReturn(Optional.of(existingAuthor));
        Mockito.when(authorRepository.save(Mockito.any(Author.class))).thenReturn(updatedAuthor);

        Author result = authorService.updateAuthor(updatedAuthorData);

        Assertions.assertThat(result).isNotNull();
        Assertions.assertThat(result.getID()).isEqualTo(updatedAuthor.getID());
        Assertions.assertThat(result.getName()).isEqualTo(updatedAuthor.getName());
    }


    @Test
    void updateAuthor_NotFound() {
        Author updatedAuthorData = new Author(99L, "Updated Author", "UK");
        Mockito.when(authorRepository.findById(99L)).thenReturn(Optional.empty());
        Exception exception = assertThrows(Exception.class, () -> {
            authorService.updateAuthor(updatedAuthorData);
        });
        Assertions.assertThat(exception.getMessage()).isEqualTo("The author with ID 99 does not exist");
    }

    @Test
    void deleteAuthor() throws Exception {
        long authorId = 1L;
        Mockito.when(authorRepository.findById(authorId)).thenReturn(Optional.of(new Author()));
        authorService.deleteAuthor(authorId);
        Mockito.verify(authorRepository, Mockito.times(1)).deleteById(authorId);
    }

    @Test
    void deleteAuthor_NotFound() {
        long nonExistingAuthorId = 99L;
        Mockito.when(authorRepository.findById(nonExistingAuthorId)).thenReturn(Optional.empty());
        Exception exception = assertThrows(Exception.class, () -> {
            authorService.deleteAuthor(nonExistingAuthorId);
        });
        Assertions.assertThat(exception.getMessage()).isEqualTo("The author with ID 99 does not exist");
    }

    @Test
    void getBooksByAuthor() {
        long authorId = 1L;
        Book book = new Book(1L, "Book Title", null, authorId);
        Mockito.when(bookRepository.findByAuthorID(authorId)).thenReturn(List.of(book));
        List<Book> books = authorService.getBooksByAuthor(authorId);
        Assertions.assertThat(books).isNotEmpty();
        Assertions.assertThat(books).contains(book);
    }

    // Additional helper methods for testing, if necessary...
}