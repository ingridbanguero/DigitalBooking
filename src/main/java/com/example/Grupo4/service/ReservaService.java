package com.example.Grupo4.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.example.Grupo4.model.Reserva;
import com.example.Grupo4.repository.IReservaRepository;

@Service
public class ReservaService {

    private final IReservaRepository reservaRepository;

    public ReservaService(IReservaRepository reservaRepository) {
      this.reservaRepository = reservaRepository;
    }

    public Collection<Reserva> filtrarReservasPorFechas(LocalDate fechaInicio, LocalDate fechaFinal){
      return reservaRepository.entreFechas(fechaInicio, fechaFinal);
    }

  
    public Reserva crearReserva(Reserva reserva){
      return reservaRepository.save(reserva);
    }
  
    public Optional<Reserva> consultarReserva(Integer id){
      return reservaRepository.findById(id);
    }
  
    public Collection<Reserva> consultarTodasLasReservaes(){
      return reservaRepository.findAll();
    }
  
    public Reserva modificarReserva(Reserva o){
      return reservaRepository.save(o);
    }
  
    public void eliminarReserva(Integer id){
      reservaRepository.deleteById(id);
    }

    public Collection<Reserva> filtrarReservaPorProducto(Integer id){
      Collection<Reserva> todasLasReservas = reservaRepository.findAll();
      Collection<Reserva> revervasFiltradas = new ArrayList<>();
    
      for (Reserva reserva : todasLasReservas){
        if(reserva.getProducto().getId().equals(id)){
          revervasFiltradas.add(reserva);
        };
      }    
      return revervasFiltradas;
    }

    public Collection<Reserva> filtrarReservasPorUsuario(Integer id){
      Collection<Reserva> reservas = reservaRepository.findAll();
      Collection<Reserva> ReservasFiltradas = new ArrayList<>();
  
      for (Reserva Reserva : reservas){
        if(Reserva.getUsuario().getId().equals(id)){
          ReservasFiltradas.add(Reserva);
        };
      }    
      return ReservasFiltradas;
    }
    
}
