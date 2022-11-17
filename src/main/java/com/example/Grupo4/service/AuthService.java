package com.example.Grupo4.service;

import com.example.Grupo4.model.Usuario;
import com.example.Grupo4.repository.IUsuarioRepository;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {

  private final IUsuarioRepository repository;

  public AuthService(IUsuarioRepository repository) {
    this.repository = repository;
  }

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    Optional<Usuario> usuario = repository.getUserByEmail(email);

    Set<GrantedAuthority> autorizaciones = new HashSet<>();
    GrantedAuthority autorizacion = new SimpleGrantedAuthority(usuario.get().getRol().getNombre());
    autorizaciones.add(autorizacion);

    User userDetail = new User(
        usuario.get().getEmail(),
        usuario.get().getContrasenna(),
        true,
        true,
        true,
        true,
        autorizaciones);

    return userDetail;
  }
}
