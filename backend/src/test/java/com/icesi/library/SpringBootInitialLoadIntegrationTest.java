package com.icesi.library;

import com.icesi.library.repository.BookRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(MockitoExtension.class)
@Sql({"/schema.sql", "/data.sql"})
public class SpringBootInitialLoadIntegrationTest {

    @Mock
    private BookRepository bookRepository;


    /*@Test
    public void testLoadDataForTestClass() {
        //Assertions.assertThat(retrievedBook.getID()).isEqualTo(b.getID());
        Assertions.assertThat(bookRepository.findAll().size()).isEqualTo(10);
    }*/
}