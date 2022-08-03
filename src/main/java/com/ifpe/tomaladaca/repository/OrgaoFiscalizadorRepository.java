package com.ifpe.tomaladaca.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifpe.tomaladaca.model.OrgaoFiscalizador;

@Repository
public interface OrgaoFiscalizadorRepository extends JpaRepository<OrgaoFiscalizador, Integer> {

}
