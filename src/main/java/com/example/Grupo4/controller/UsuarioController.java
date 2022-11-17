package com.example.Grupo4.controller;

import com.example.Grupo4.dto.AuthRequestDTO;
import com.example.Grupo4.dto.AuthResponseDTO;
import com.example.Grupo4.model.Usuario;
import com.example.Grupo4.service.UsuarioService;
import com.example.Grupo4.util.JwtUtil;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class UsuarioController {

  private final AuthenticationManager authenticationManager;

  private final UserDetailsService userDetailsService;

  private final JwtUtil jwtUtil;

  private final UsuarioService service;

  public UsuarioController(AuthenticationManager authenticationManager, UserDetailsService userDetailsService, JwtUtil jwtUtil,
                           UsuarioService service) {
    this.authenticationManager = authenticationManager;
    this.userDetailsService = userDetailsService;
    this.jwtUtil = jwtUtil;
    this.service = service;
  }

  @PostMapping
  public ResponseEntity<?> crear(@RequestBody Usuario usuario) {
    try {
      return new ResponseEntity<>(service.crearUsuario(usuario), HttpStatus.CREATED);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body("El email ya se encuentra registrado");
    }
  }

  @PostMapping("/auth")
  public ResponseEntity<?> generarToken(@RequestBody AuthRequestDTO authRequest) throws Exception {
    try {
      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getContrasenna()));
    } catch (BadCredentialsException e) {
      throw new Exception("Credenciales inválidas");
    }
    final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
    final String jwt = jwtUtil.generateToken(userDetails);

    return ResponseEntity.ok(new AuthResponseDTO((jwt)));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Usuario>> consultar(@PathVariable Integer id) {
    if (service.consultarUsuario(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(service.consultarUsuario(id));
    }
  }

  @PutMapping
  public ResponseEntity<Usuario> modificar(@RequestBody Usuario usuario) {
    if (service.consultarUsuario(usuario.getId()).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return ResponseEntity.ok(service.modificarUsuario(usuario));
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Usuario> eliminar(@PathVariable Integer id) {
    if (service.consultarUsuario(id).isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      service.eliminarUsuario(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  }
}
