package com.example.Grupo4.controller;

import com.example.Grupo4.model.Reserva;

import java.util.Collection;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Grupo4.service.ReservaService;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class ReservaController {

  private final ReservaService reservaService;

  public ReservaController(ReservaService reservaService) {
    this.reservaService = reservaService;
  }

  @PostMapping
  public ResponseEntity<Reserva> crear(@RequestBody Reserva reserva){
    return new ResponseEntity<>(reservaService.crearReserva(reserva), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Reserva>> consultar(@PathVariable Integer id){
    if (reservaService.consultarReserva(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(reservaService.consultarReserva(id));
    }
  }

  @GetMapping
  public ResponseEntity<Collection<Reserva>> consultarTodas(){
    return ResponseEntity.ok(reservaService.consultarTodasLasReservaes());
  }

  @PutMapping
  public ResponseEntity<Reserva> modificar(@RequestBody Reserva odontologo){
    if (reservaService.consultarReserva(odontologo.getId()).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      return ResponseEntity.ok(reservaService.modificarReserva(odontologo));
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Reserva> eliminar(@PathVariable Integer id){
    if (reservaService.consultarReserva(id).isEmpty()){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else{
      reservaService.eliminarReserva(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }
    
}
