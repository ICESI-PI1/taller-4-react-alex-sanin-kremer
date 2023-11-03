package com.icesi.library.controller;

import com.icesi.library.model.User;
import com.icesi.library.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/login")
public class LoginController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/create")
    public ResponseEntity createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/auth")
    public ResponseEntity login(@RequestBody User user) {
        try {
            userService.login(user);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
