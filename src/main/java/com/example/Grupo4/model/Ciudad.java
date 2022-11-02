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
  private Integer id;

  private String nombre; 

  private String pais;   
}
