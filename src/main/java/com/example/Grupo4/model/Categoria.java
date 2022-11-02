package com.example.Grupo4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="categorias")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Categoria {

  @Id
  @GeneratedValue(strategy =  GenerationType.SEQUENCE)
  private Integer id;

  private String titulo;
  private String descripcion;
  private String imagenUrl;

  @OneToMany(mappedBy = "categoria")
  @JsonIgnoreProperties("categoria")
  private List<Producto> productos;
}
