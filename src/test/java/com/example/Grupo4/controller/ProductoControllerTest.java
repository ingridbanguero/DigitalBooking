package com.example.Grupo4.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.Grupo4.model.Caracteristica;
import com.example.Grupo4.model.Categoria;
import com.example.Grupo4.model.Ciudad;
import com.example.Grupo4.model.Imagen;
import com.example.Grupo4.model.Politica;
import com.example.Grupo4.model.Producto;
import com.example.Grupo4.service.ProductoService;



class ProductoControllerTest {

    @Test
    void testConsultarProducto() {
      //Crea un mock del servicio
      ProductoService serviceMock = mock(ProductoService.class);

      // Crea un mock de Ciudad para usar en las pruebas
      Ciudad ciudad = mock(Ciudad.class);

      // Crea un mock de Producto para usar en las pruebas
      Politica politica = mock(Politica.class);

      // Crea un mock de Producto para usar en las pruebas
      Categoria categoria = mock(Categoria.class);
  
      //Configura el mock para que devuelva una Producto cuando se llame al método consultarProducto()
      Optional<Producto> producto = Optional.of(new Producto(1, "test", "test", List.of(new Imagen()), List.of(new Caracteristica()), politica, categoria, ciudad));
      when(serviceMock.consultarProducto(1)).thenReturn(producto);
  
      //Crea una instancia del controlador asignandole el mock del servicio
      ProductoController controller = new ProductoController(serviceMock);
  
      //Ejecuta la prueba
      ResponseEntity<Optional<Producto>> response = controller.consultar(1);
  
      //Verifica que la respuesta del controlador sea correcta
      assertEquals(HttpStatus.OK, response.getStatusCode());
      assertEquals(producto, response.getBody());
    }
}
