package com.cocochi.menu.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "menu_categories")
public class MenuCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @OrderBy("id ASC")
    @JsonManagedReference
    private List<MenuItem> items;

    public MenuCategory() {}

    public Long getId()              { return id; }
    public String getName()          { return name; }
    public List<MenuItem> getItems() { return items; }
}
