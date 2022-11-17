package com.example.Grupo4.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

  private final String KEY = "SECRET";

  public String extractUserName(String token) {
    return extractClaimUserName(token);
  }

  public Date extractExpiration(String token) {
    return extractClaimDate(token);
  }

  public Date extractClaimDate(String token) {
    Claims claims = extractAllClaims(token);
    return claims.getExpiration();
  }

  public String extractClaimUserName(String token) {
    Claims claims = extractAllClaims(token);
    return claims.getSubject();
  }

  private Claims extractAllClaims(String token) {
    return Jwts.parser().setSigningKey(KEY).parseClaimsJws(token).getBody();
  }

  public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    return createToken(claims, userDetails.getUsername());
  }

  private String createToken(Map<String, Object> claims, String subject) {
    return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 + 60 * 10))
        .signWith(SignatureAlgorithm.HS256, KEY).compact();
  }

  public Boolean validateToken(String token, UserDetails userDetails) {
    final String username = extractUserName(token);
    return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
  }

  private boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

}