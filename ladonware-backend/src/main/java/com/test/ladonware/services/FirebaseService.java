package com.test.ladonware.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Date;
import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

@Service
public class FirebaseService {

	private StorageOptions storageOptions;
	private String bucketName = "ladonware-6f358.appspot.com";

	/*
	 * Initialize firebase StorageOptions and uploads the file to the firebase
	 * storage service
	 * 
	 * @Param MultipartFile
	 */
	public String uploadFile(MultipartFile file) {

		firebaseInit();

		try {
			String objectName = generateFileName(file);

			Storage storage = storageOptions.getService();

			BlobId blobId = BlobId.of(bucketName, "products/" + objectName);
			BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
			storage.create(blobInfo, file.getBytes());

			String imageUrl = "https://storage.googleapis.com/" + bucketName + "/products/" + objectName;

			System.out.println("File uploaded to bucket " + bucketName + " as " + objectName);
			return imageUrl;

		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("File not found");
			return null;
		}

	}

	/*
	 * Generates the name of the file
	 * 
	 * @Param MultipartFile
	 * 
	 */
	private String generateFileName(MultipartFile multiPart) {
		return new Date().getTime() + "-" + Objects.requireNonNull(multiPart.getOriginalFilename()).replace(" ", "_");
	}

	/*
	 * Deletes a file from the firebase storage bucket
	 * 
	 * @Param MultipartFile
	 */
	public boolean deleteFile(String fileName) {

		firebaseInit();

		try {
			Storage storage = storageOptions.getService();
			BlobId blobId = BlobId.of(bucketName, "products/" + fileName);
			storage.delete(blobId);
			System.out.println("File " + fileName + " has been deleted from bucket " + bucketName);
			return true;
		} catch (Exception e) {
			System.out.println("Error deleting file: " + e.getMessage());
			return false;
		}

	}

	/*
	 * Initialize the firebase storage service
	 */
	public void firebaseInit() {
		FileInputStream serviceAccount;

		try {
			serviceAccount = new FileInputStream("./ladonware-6f358-firebase-adminsdk-8waz5-e0dc29a7da.json");

			this.storageOptions = StorageOptions.newBuilder().setProjectId("ladonware-6f358")
					.setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();

			System.out.println("Firebase storage Initialized");

		} catch (IOException e) {
			System.out.println("Cannot initialized firebase storage: " + e.getMessage());

		}
	}

}
