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

	@Autowired
	private FirebaseService firebaseService;

	/*
	 * Edits or creates a product
	 * 
	 * @Param Product
	 */
	public Product createOrEditProduct(Product product) {

		Product savedProduct = dao.save(product);
		if (savedProduct != null) {
			return savedProduct;
		} else {
			return null;
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
	public boolean deleteProduct(String id, String fileName) {

		if (firebaseService.deleteFile(fileName)) {
			try {
				dao.deleteById(id);
				return true;
			} catch (Exception e) {
				System.out.println("Error deleting product: " + e.getMessage());
				return false;
			}
		} else {
			return false;
		}

	}
}
