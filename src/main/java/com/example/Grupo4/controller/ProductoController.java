package com.example.Grupo4.controller;

import com.example.Grupo4.model.Ciudad;
import com.example.Grupo4.model.Producto;
import com.example.Grupo4.service.ProductoService;
import java.util.Collection;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class ProductoController {

  private final ProductoService service;

  public ProductoController(ProductoService service) {
    this.service = service;
  }

  @PostMapping
  public ResponseEntity<Producto> crear(@RequestBody Producto producto){
    return new ResponseEntity<>(service.crearProducto(producto), HttpStatus.CREATED);
  }

  @GetMapping
  public ResponseEntity<Collection<Producto>> consultarTodos(){
    return ResponseEntity.ok(service.consultarTodosLosProductos());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Producto>> consultar(@PathVariable Integer id){
    if (service.consultarProducto(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(service.consultarProducto(id));
    }
  }

  @GetMapping("/{ciudad}")
  public ResponseEntity<Collection<Producto>> filtrarPorCiudad(@PathVariable Ciudad ciudad){    
    return ResponseEntity.ok(service.filtrarProductosPorCiudad(ciudad));   
  }

  @PutMapping
  public ResponseEntity<Producto> modificar(@RequestBody Producto producto){
    if (service.consultarProducto(producto.getId()).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(service.modificarProducto(producto));
    }
  }
}
