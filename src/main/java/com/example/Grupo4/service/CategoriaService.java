package com.example.Grupo4.service;

import com.example.Grupo4.model.Categoria;
import com.example.Grupo4.repository.ICategoriaRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {

  private final ICategoriaRepository repository;

  public CategoriaService(ICategoriaRepository categoriaRepository) {
    this.repository = categoriaRepository;
  }

  public Categoria crearCategoria(Categoria c){
    return repository.save(c);
  }
}
