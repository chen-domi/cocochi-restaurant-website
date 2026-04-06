package com.cocochi.menu.controller;

import com.cocochi.menu.model.MenuCategory;
import com.cocochi.menu.repository.MenuCategoryRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class MenuController {

    private final MenuCategoryRepository repo;

    public MenuController(MenuCategoryRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/categories")
    public List<MenuCategory> getCategories() {
        return repo.findAll();
    }
}
