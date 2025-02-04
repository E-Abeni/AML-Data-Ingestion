package com.aml.auth_service.repositories;

import com.aml.auth_service.model.KeyDb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface KeyDbRepository extends JpaRepository<KeyDb, Long>, PagingAndSortingRepository<KeyDb, Long> {
}
