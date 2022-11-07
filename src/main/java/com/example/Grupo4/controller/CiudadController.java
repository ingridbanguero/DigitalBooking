package com.example.Grupo4.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Grupo4.model.Ciudad;
import com.example.Grupo4.service.CiudadService;

@RestController
@RequestMapping("/ciudades")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class CiudadController {

    private final CiudadService ciudadService;

  public CiudadController(CiudadService ciudadService) {
    this.ciudadService = ciudadService;
  }

  @PostMapping
  public ResponseEntity<Ciudad> crear(@RequestBody Ciudad ciudad){
    return new ResponseEntity<>(ciudadService.crearCiudad(ciudad), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Ciudad>> consultar(@PathVariable Integer id){
    if (ciudadService.consultarCiudad(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(ciudadService.consultarCiudad(id));
    }
  }

  @GetMapping
  public ResponseEntity<Collection<Ciudad>> consultarTodas(){
    return ResponseEntity.ok(ciudadService.consultarTodasLasCiudades());
  }

  @PutMapping
  public ResponseEntity<Ciudad> modificar(@RequestBody Ciudad odontologo){
    if (ciudadService.consultarCiudad(odontologo.getId()).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(ciudadService.modificarCiudad(odontologo));
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Ciudad> eliminar(@PathVariable Integer id){
    if (ciudadService.consultarCiudad(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      ciudadService.eliminarCiudad(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }
    
}
