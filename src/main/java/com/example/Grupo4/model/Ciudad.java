package com.example.Grupo4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
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
  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  private Integer id;

  private String nombre; 

  private String pais;
}
