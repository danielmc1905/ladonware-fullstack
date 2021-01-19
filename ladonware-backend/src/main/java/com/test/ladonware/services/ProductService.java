package com.test.ladonware.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.ladonware.dao.IProductDAO;
import com.test.ladonware.entities.Product;

@Service
public class ProductService {

	@Autowired
	private IProductDAO dao;

	/*
	 * Edits or creates a product
	 * 
	 * @Param Product
	 */
	public boolean createOrEditProduct(Product product) {
		Product savedProduct = dao.save(product);
		if (savedProduct != null) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * Retrieves all the products list
	 */
	public List<Product> getAllProducts() {

		return dao.findAll();
	}

	/*
	 * Deletes a product by its id
	 * 
	 * @Param id
	 */
	public void deleteProduct(String id) {
		dao.deleteById(id);
	}
}
