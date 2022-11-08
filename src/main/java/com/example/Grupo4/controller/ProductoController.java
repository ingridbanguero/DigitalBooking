package com.example.Grupo4.controller;

import com.example.Grupo4.model.Producto;
import com.example.Grupo4.service.ProductoService;
import java.util.Collection;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class ProductoController {

  private final ProductoService service;

  public ProductoController(ProductoService service) {
    this.service = service;
  }

  @Transactional
  @PostMapping
  public ResponseEntity<Producto> crear(@RequestBody Producto producto) {
    return new ResponseEntity<>(service.crearProducto(producto), HttpStatus.CREATED);
  }

  @GetMapping
  public ResponseEntity<Collection<Producto>> consultarTodos() {
    return ResponseEntity.ok(service.consultarTodosLosProductos());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Producto>> consultar(@PathVariable Integer id) {
    if (service.consultarProducto(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(service.consultarProducto(id));
    }
  }

  @PutMapping
  public ResponseEntity<Producto> modificar(@RequestBody Producto producto) {
    if (service.consultarProducto(producto.getId()).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(service.modificarProducto(producto));
    }
  }
}
