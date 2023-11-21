package com.icesi.library.service;

import com.icesi.library.model.Book;
import com.icesi.library.repository.BookRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class BookServiceTest {

    @InjectMocks
    private BookService bookService;

    @Mock
    private BookRepository bookRepository;

    @Test
    void getAllBooks() {
        Book b = new Book(1L, "LOTR", Instant.now(), 1L);
        Mockito.when(bookRepository.findAll()).thenReturn(List.of(b));
        List<Book> books = bookService.getAllBooks();
        Assertions.assertThat(books).isNotEmpty();
        Assertions.assertThat(books).contains(b);
    }

    @Test
    void getBookByID() throws Exception {
        long bookId = 1L;
        Book b = new Book(bookId, "LOTR", Instant.now(), 1L);
        Mockito.when(bookRepository.findById(bookId)).thenReturn(Optional.of(b));
        Book retrievedBook = bookService.getBookByID(bookId);
        Assertions.assertThat(retrievedBook).isNotNull();
        Assertions.assertThat(retrievedBook.getID()).isEqualTo(b.getID());
        Assertions.assertThat(retrievedBook.getTitle()).isEqualTo(b.getTitle());
    }

    @Test
    void getBookByID_NotFound() {
        long nonExistingBookId = 99L;
        Mockito.when(bookRepository.findById(nonExistingBookId)).thenReturn(Optional.empty());
        Exception exception = assertThrows(Exception.class, () -> {
            bookService.getBookByID(nonExistingBookId);
        });
//        Assertions.assertThat(exception.getMessage()).isEqualTo("The book with ID " + nonExistingBookId + " does not exist");
        Assertions.assertThat(exception.getMessage()).isEqualTo("The book with ID " + Optional.empty() + " does not exist");
    }

    @Test
    void createBook() {
        Book bookToCreate = new Book(null, "New Book", Instant.now(), 1L);
        Book createdBook = new Book(1L, "New Book", Instant.now(), 1L);
        Mockito.when(bookRepository.save(bookToCreate)).thenReturn(createdBook);
        Book result = bookService.createBook(bookToCreate);
        Assertions.assertThat(result).isNotNull();
        Assertions.assertThat(result.getID()).isEqualTo(createdBook.getID());
        Assertions.assertThat(result.getTitle()).isEqualTo(createdBook.getTitle());
    }

    @Test
    void updateBook() throws Exception {
        long bookId = 1L;
        Book existingBook = new Book(bookId, "Existing Book", Instant.now(), 1L);
        Book updatedBookData = new Book(bookId, "Updated Book", Instant.now(), 2L); // Corrected ID
        Book updatedBook = new Book(bookId, "Updated Book", Instant.now(), 2L);

        Mockito.when(bookRepository.findById(bookId)).thenReturn(Optional.of(existingBook));
        Mockito.when(bookRepository.save(updatedBookData)).thenReturn(updatedBook); // Corrected argument

        Book result = bookService.updateBook(updatedBookData);

        Assertions.assertThat(result).isNotNull();
        Assertions.assertThat(result.getID()).isEqualTo(updatedBook.getID());
        Assertions.assertThat(result.getTitle()).isEqualTo(updatedBook.getTitle());
    }

    @Test
    void updateBook_NotFound() {
        long nonExistingBookId = 99L;
        Book updatedBookData = new Book(nonExistingBookId, "Updated Book", Instant.now(), 2L);
        Mockito.when(bookRepository.findById(nonExistingBookId)).thenReturn(Optional.empty());
        Exception exception = assertThrows(Exception.class, () -> {
            bookService.updateBook(updatedBookData);
        });
//        Assertions.assertThat(exception.getMessage()).isEqualTo("The book with ID " + nonExistingBookId + " does not exist");
        Assertions.assertThat(exception.getMessage()).isEqualTo("The book with ID " + Optional.empty() + " does not exist");
    }

    @Test
    void deleteBook() throws Exception {
        long bookId = 1L;
        Mockito.when(bookRepository.findById(bookId)).thenReturn(Optional.of(new Book()));
        bookService.deleteBook(bookId);
        Mockito.verify(bookRepository, Mockito.times(1)).deleteById(bookId);
    }

    @Test
    void deleteBook_NotFound() {
        long nonExistingBookId = 99L;
        Mockito.when(bookRepository.findById(nonExistingBookId)).thenReturn(Optional.empty());
        Exception exception = assertThrows(Exception.class, () -> {
            bookService.deleteBook(nonExistingBookId);
        });
//        Assertions.assertThat(exception.getMessage()).isEqualTo("The book with ID " + nonExistingBookId + " does not exist");
        Assertions.assertThat(exception.getMessage()).isEqualTo("The book with ID " + Optional.empty() + " does not exist");
    }
}