package com.test.ladonware.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.test.ladonware.entities.Product;
import com.test.ladonware.services.FirebaseService;
import com.test.ladonware.services.ProductService;

@RestController
@RequestMapping(path = "/v1/products")
@CrossOrigin(origins = "*")
public class ProductController {
	
	@Autowired
	FirebaseService firebaseService;
	
	@Autowired
	ProductService productService;

	/*
	 * Creates a new product based on the data provided
	 * 
	 * @Param Product
	 */
	@PostMapping("/add")
	public ResponseEntity<HashMap<String, Object>> createProduct(@RequestBody Product product) {

		return null;
	}

	/*
	 * Edits the product data based on the new data provided
	 * 
	 * @Param Product
	 */
	@PutMapping("/edit")
	public ResponseEntity<HashMap<String, Object>> editProduct(@RequestBody Product product) {

		return null;
	}

	/*
	 * Retrieves all the registered products
	 * 
	 */
	@GetMapping("/")
	public List<Product> getAllProducts() {

		return null;
	}

	/*
	 * Deletes a product by its id
	 * 
	 * @Param id
	 */
	@DeleteMapping("/{id}")
	public ResponseEntity<HashMap<String, Object>> deleteProductById(@PathVariable String id) {

		return null;
	}

	/*
	 * Uploads a multipart file to the firebase storage service
	 */
	@PostMapping("/files")
	public String uploadImage(@RequestBody MultipartFile file) {
		
		return firebaseService.uploadFile(file);
	}
}
