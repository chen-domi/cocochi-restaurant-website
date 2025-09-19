package com.cocochi.cocochi_api.controller;

import com.cocochi.cocochi_api.model.MenuItem;
import com.cocochi.cocochi_api.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {
    
    @Autowired
    private MenuRepository menuRepository;
    
    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }
    
    @GetMapping("/{category}")
    public List<MenuItem> getMenuByCategory(@PathVariable String category) {
        return menuRepository.findByCategory(category);
    }
}