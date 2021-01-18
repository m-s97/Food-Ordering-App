package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.model.Restaurant;


@RepositoryRestResource(collectionResourceRel="restaurants",path="restaurants")
public interface ResOperation  extends JpaRepository<Restaurant,Integer>{

}
