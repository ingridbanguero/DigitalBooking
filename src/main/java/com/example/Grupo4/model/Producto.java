package com.example.Grupo4.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="productos")
public class Producto {

  @Id
  @GeneratedValue(strategy =  GenerationType.SEQUENCE)
  private Integer id;

  private String nombre;

  private String descripcion;

  @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
  private List<Imagen> imagenes;

  @ManyToMany
  @JoinTable(
      name = "producto",
      joinColumns = @JoinColumn(name = "producto_id"),
      inverseJoinColumns = @JoinColumn(name = "caracteristica_id"))
  private List<Caracteristica> caracteristicas;

  @ManyToOne
  @JoinColumn(name = "categoria_id")
  private Categoria categoria;

  @ManyToOne
  @JoinColumn(name = "ciudad_id")
  private Ciudad ciudad;
}
