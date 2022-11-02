package com.example.Grupo4.model;

import java.util.ArrayList;

import javax.persistence.*;
import lombok.*;

@Entity
@Table(name="ciudades")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Ciudad {

  @Id
  @GeneratedValue(strategy =  GenerationType.SEQUENCE)
  private Integer ciudad_id;

  private String nombre; 

  private String pais;   

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = “producto_id”)
  private ArrayList<Producto> productos;
}
