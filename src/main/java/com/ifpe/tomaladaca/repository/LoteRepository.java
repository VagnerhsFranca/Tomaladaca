package com.ifpe.tomaladaca.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifpe.tomaladaca.model.Lote;

@Repository
public interface LoteRepository extends JpaRepository<Lote, Integer> {

}
