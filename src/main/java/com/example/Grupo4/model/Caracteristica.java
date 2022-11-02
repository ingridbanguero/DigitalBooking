package com.example.Grupo4.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="caracteristicas")
public class Caracteristica {

  @Id
  @GeneratedValue(strategy =  GenerationType.SEQUENCE)
  private Integer id;

  private String nombre;

  private String icono;

  @ManyToMany(mappedBy = "caracteristicas")
  private List<Producto> productos;
}
