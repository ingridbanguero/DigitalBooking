package com.example.Grupo4.model;

import javax.persistence.*;

import lombok.*;


@Entity
@Table(name="imagenes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Imagen {

  @Id
  @GeneratedValue(strategy =  GenerationType.SEQUENCE)
  private Integer id;

  private String titulo; 

  private String imagenUrl; 

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = “producto_id”)
  private Producto producto;
    
}
