package com.example.Grupo4.controller;

import com.example.Grupo4.model.Categoria;
import com.example.Grupo4.service.CategoriaService;
import java.util.Collection;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class CategoriaController {

  private final CategoriaService service;

  public CategoriaController(CategoriaService categoriaService) {
    this.service = categoriaService;
  }

  @PostMapping
  public ResponseEntity<Categoria> crear(@RequestBody Categoria categoria){
    return new ResponseEntity<>(service.crearCategoria(categoria), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Categoria>> consultar(@PathVariable Integer id){
    if (service.consultarCategoria(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(service.consultarCategoria(id));
    }
  }

  @GetMapping
  public ResponseEntity<Collection<Categoria>> consultarTodas(){
    return ResponseEntity.ok(service.consultarTodasLasCategorias());
  }

  @PutMapping
  public ResponseEntity<Categoria> modificar(@RequestBody Categoria categoria){
    if (service.consultarCategoria(categoria.getId()).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(service.modificarCategoria(categoria));
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Categoria> eliminar(@PathVariable Integer id){
    if (service.consultarCategoria(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      service.eliminarCategoria(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }
}
