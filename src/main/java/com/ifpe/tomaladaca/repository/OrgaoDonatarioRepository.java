package com.ifpe.tomaladaca.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifpe.tomaladaca.model.OrgaoDonatario;

@Repository
public interface OrgaoDonatarioRepository extends JpaRepository<OrgaoDonatario, Integer> {

}
