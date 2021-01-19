package com.test.ladonware.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.ladonware.dao.IProductDAO;

@Service
public class ProductService {

	@Autowired
	private IProductDAO dao;
}
