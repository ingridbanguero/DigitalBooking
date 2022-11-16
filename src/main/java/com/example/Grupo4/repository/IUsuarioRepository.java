package com.example.Grupo4.repository;

import com.example.Grupo4.model.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Integer> {

  @Query("from Usuario u where u.email =:email")
  Optional<Usuario> getUserByEmail(@Param("email") String email);
}
