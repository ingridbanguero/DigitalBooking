package com.example.Grupo4.controller;

import com.example.Grupo4.model.Usuario;
import com.example.Grupo4.service.UsuarioService;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class UsuarioController {

  private final UsuarioService service;

  public UsuarioController(UsuarioService service) {
    this.service = service;
  }

  @PostMapping
  public ResponseEntity<Usuario> crear(@RequestBody Usuario usuario) {
    return new ResponseEntity<>(service.crearUsuario(usuario), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Usuario>> consultar(@PathVariable Integer id) {
    if (service.consultarUsuario(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(service.consultarUsuario(id));
    }
  }

  @PutMapping
  public ResponseEntity<Usuario> modificar(@RequestBody Usuario usuario) {
    if (service.consultarUsuario(usuario.getId()).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(service.modificarUsuario(usuario));
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Usuario> eliminar(@PathVariable Integer id) {
    if (service.consultarUsuario(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      service.eliminarUsuario(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }
}
