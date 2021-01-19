package com.test.ladonware.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.test.ladonware.entities.Product;

@Repository
public interface IProductDAO extends MongoRepository<Product, String> {

}
