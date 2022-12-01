package com.example.Grupo4.controller;

import com.example.Grupo4.model.Ciudad;
import com.example.Grupo4.service.CiudadService;
import java.util.Collection;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
@RequestMapping("/ciudades")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class CiudadController {

  private final CiudadService ciudadService;

  public CiudadController(CiudadService ciudadService) {
    this.ciudadService = ciudadService;
  }

  @PostMapping
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Ciudad> crear(@RequestBody Ciudad ciudad) {
    return new ResponseEntity<>(ciudadService.crearCiudad(ciudad), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Ciudad>> consultar(@PathVariable Integer id) {
    if (ciudadService.consultarCiudad(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(ciudadService.consultarCiudad(id));
    }
  }

  @GetMapping
  public ResponseEntity<Collection<Ciudad>> consultarTodas() {
    return ResponseEntity.ok(ciudadService.consultarTodasLasCiudades());
  }

  @PutMapping
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Ciudad> modificar(@RequestBody Ciudad odontologo) {
    if (ciudadService.consultarCiudad(odontologo.getId()).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(ciudadService.modificarCiudad(odontologo));
    }
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Ciudad> eliminar(@PathVariable Integer id) {
    if (ciudadService.consultarCiudad(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      ciudadService.eliminarCiudad(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }

}
