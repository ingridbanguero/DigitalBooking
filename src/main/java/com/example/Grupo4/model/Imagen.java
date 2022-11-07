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
  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  private Integer id;

  private String titulo; 

  private String url;
    
}
