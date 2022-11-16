package com.example.Grupo4.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "reservas")
public class Reserva {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String horaInicio;

  private String fechaInicio;

  private String fechaFinal;

  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "producto_id")
  private Producto producto;

  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "cliente_id")
  private Cliente cliente;
}
