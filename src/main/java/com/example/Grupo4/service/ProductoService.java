package com.example.Grupo4.service;

import com.example.Grupo4.model.Producto;
import com.example.Grupo4.repository.IProductoRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

  private final IProductoRepository repository;  

  public ProductoService(IProductoRepository productoRepository) {
    this.repository = productoRepository;    
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

  public Collection<Producto> filtrarProductosPorCiudad(Integer id){
    Collection<Producto> allProducts = repository.findAll();
    Collection<Producto> productosFiltrados = new ArrayList<>();

    for (Producto producto : allProducts){
      if(producto.getCiudad().getId().equals(id)){
        productosFiltrados.add(producto);
      };
    }    
    return productosFiltrados;
  }


  public Producto modificarProducto(Producto p){
    return repository.save(p);
  }

}
