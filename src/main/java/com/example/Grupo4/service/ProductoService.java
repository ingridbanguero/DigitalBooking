package com.example.Grupo4.service;

import com.example.Grupo4.model.Producto;
import com.example.Grupo4.model.Reserva;
import com.example.Grupo4.repository.IProductoRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

  private final IProductoRepository repository;
  private final ReservaService reservaService;

  public ProductoService(IProductoRepository productoRepository, ReservaService reservaService) {
    this.repository = productoRepository;
    this.reservaService = reservaService;
  }

  public Producto crearProducto(Producto c) {
    return repository.save(c);
  }

  public Optional<Producto> consultarProducto(Integer id) {
    return repository.findById(id);
  }

  public Collection<Producto> consultarTodosLosProductos() {
    return repository.findAll();
  }

  public Collection<Producto> filtrarProductosPorCiudad(Integer id) {
    Collection<Producto> allProducts = repository.findAll();
    Collection<Producto> productosFiltrados = new ArrayList<>();

    for (Producto producto : allProducts) {
      if (producto.getCiudad().getId().equals(id)) {
        productosFiltrados.add(producto);
      }      
    }
    return productosFiltrados;
  }


  public Producto modificarProducto(Producto p) {
    return repository.save(p);
  }

  public void eliminarProducto(Integer id) {
    repository.deleteById(id);
  }

  public Collection<Producto> filtrarPorFechasYCiudad(Integer idCiudad, LocalDate fechaInicio, LocalDate fechaFinal){
    Collection<Producto> productosPorCiudad = this.filtrarProductosPorCiudad(idCiudad);
    Collection<Reserva> reservasPorFechas = reservaService.filtrarReservasPorFechas(fechaInicio, fechaFinal);    
    Collection<Producto> productosFiltrados = new ArrayList<>();

    for(Producto producto: productosPorCiudad){
      for(Reserva reserva: reservasPorFechas){
        if(producto.getId().equals(reserva.getProducto().getId())){          
          productosFiltrados.add(producto);                    
        }
      }
    }
    productosPorCiudad.removeAll(productosFiltrados);
    return productosPorCiudad;
  }


}
