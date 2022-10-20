package com.example.Grupo4.service;

import com.example.Grupo4.model.Categoria;
import com.example.Grupo4.repository.ICategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {

  private ICategoriaRepository categoriaRepository;

  @Autowired
  public void setRepository(ICategoriaRepository categoriaRepository) {
    this.categoriaRepository = categoriaRepository;
  }

  public Categoria crearCategoria(Categoria c){
    return categoriaRepository.save(c);
  }
}
