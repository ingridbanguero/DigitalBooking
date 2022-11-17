package com.example.Grupo4.service;

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
    
}
