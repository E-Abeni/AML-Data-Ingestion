package com.aml.user_service.repositories;

import com.aml.user_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(path="user")
public interface UserRepository extends JpaRepository<User, Long>, PagingAndSortingRepository<User, Long> {
}

//, collectionResourceRel="Institutions", itemResourceRel = "Institution"