package com.example.Grupo4.controller;

import com.example.Grupo4.model.Categoria;
import com.example.Grupo4.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

  private CategoriaService categoriaService;

  @Autowired
  public void setService(CategoriaService categoriaService) {
    this.categoriaService = categoriaService;
  }

  @PostMapping
  public ResponseEntity<Categoria> crear(@RequestBody Categoria categoria){
    return new ResponseEntity<>(categoriaService.crearCategoria(categoria), HttpStatus.CREATED);
  }
}
