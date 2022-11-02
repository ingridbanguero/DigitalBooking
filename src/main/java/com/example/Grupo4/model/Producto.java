package com.example.Grupo4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
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

  @Column(columnDefinition = "LONGTEXT")
  private String descripcion;

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "producto_id")
  private List<Imagen> imagenes;

  @ManyToMany(cascade = CascadeType.PERSIST)
  @JoinColumn(name = "caracteristica_id")
  private List<Caracteristica> caracteristicas;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "categoria_id")
  @JsonIgnoreProperties("productos")
  private Categoria categoria;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "ciudad_id")
  private Ciudad ciudad;
}
