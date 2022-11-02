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
  private Integer imagen_id;

  private String titulo; 

  private String imagenUrl; 
    
}
