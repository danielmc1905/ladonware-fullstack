package com.test.ladonware.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

		HashMap<String, Object> response = new HashMap<String, Object>();

		Product created = productService.createOrEditProduct(product);

		if (created != null) {
			response.put("product", created);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
	}

	/*
	 * Edits the product data based on the new data provided
	 * 
	 * @Param Product
	 */
	@PutMapping("/edit")
	public ResponseEntity<HashMap<String, Object>> editProduct(@RequestBody Product product) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		Product edited = productService.createOrEditProduct(product);

		if (edited != null) {
			response.put("product", edited);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
	}

	/*
	 * Retrieves all the registered products
	 * 
	 */
	@GetMapping("/")
	public List<Product> getAllProducts() {

		List<Product> productsList = productService.getAllProducts();

		return productsList;
	}

	/*
	 * Deletes a product by its id
	 * 
	 * @Param id
	 */
	@DeleteMapping("/{id}/{fileName}")
	public ResponseEntity<HashMap<String, Object>> deleteProductById(@PathVariable String id,
			@PathVariable String fileName) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		boolean deleted = productService.deleteProduct(id, fileName);

		if (deleted) {
			response.put("Message", "Product successfully deleted");
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}

	}

	/*
	 * Uploads a multipart file to the firebase storage service
	 */
	@PostMapping("/files")
	public ResponseEntity<HashMap<String, Object>> uploadImage(@RequestBody MultipartFile file) {

		HashMap<String, Object> response = new HashMap<String, Object>();
		String imageUrl = firebaseService.uploadFile(file);

		if (imageUrl != null) {

			response.put("imageUrl", imageUrl);

			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			response.put("Error", "File Not Found");
			return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		}

	}
}
