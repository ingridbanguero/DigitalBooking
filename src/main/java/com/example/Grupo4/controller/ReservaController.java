package com.example.Grupo4.controller;

import com.example.Grupo4.dto.ReservaDTO;
import com.example.Grupo4.model.Reserva;
import com.example.Grupo4.service.ReservaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import java.util.Collection;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class ReservaController {

  private final ReservaService reservaService;

  public ReservaController(ReservaService reservaService) {
    this.reservaService = reservaService;
  }

  @PostMapping
  public ResponseEntity<Reserva> crear(@RequestBody Reserva reserva) {
    return new ResponseEntity<>(reservaService.crearReserva(reserva), HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<ReservaDTO> consultar(@PathVariable Integer id) {
    if (reservaService.consultarReserva(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      ObjectMapper mapper = new ObjectMapper();
      mapper.registerModule(new Jdk8Module());
      mapper.registerModule(new JavaTimeModule());
      return ResponseEntity.ok(mapper.convertValue(reservaService.consultarReserva(id), ReservaDTO.class));
    }
  }

  @GetMapping
  public ResponseEntity<Collection<Reserva>> consultarTodas() {
    return ResponseEntity.ok(reservaService.consultarTodasLasReservaes());
  }

  @PutMapping
  public ResponseEntity<Reserva> modificar(@RequestBody Reserva reserva) {
    if (reservaService.consultarReserva(reserva.getId()).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(reservaService.modificarReserva(reserva));
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Reserva> eliminar(@PathVariable Integer id) {
    if (reservaService.consultarReserva(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      reservaService.eliminarReserva(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }

  @GetMapping("/producto")
  public ResponseEntity<Collection<Reserva>> filtrarPorProducto(@RequestParam Integer id) {
    return ResponseEntity.ok(reservaService.filtrarReservaPorProducto(id));
  }

  @GetMapping("/usuario")
  public ResponseEntity<Collection<Reserva>> filtrarPorUsuario(@RequestParam Integer id) {
    return ResponseEntity.ok(reservaService.filtrarReservasPorUsuario(id));
  }


}
