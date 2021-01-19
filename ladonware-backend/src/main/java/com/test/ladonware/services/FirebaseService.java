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
	private String bucketName = "ladonwareStorage";

	/*
	 * Initialize firebase StorageOptions and uploads the file to the firebase storage service
	 * @Param MultipartFile
	 * */
	public String[] uploadFile(MultipartFile multipartFile) {

		firebaseInit();

		File file;
		try {
			file = convertMultiPartToFile(multipartFile);
			Path filePath = file.toPath();
			String objectName = generateFileName(multipartFile);

			Storage storage = storageOptions.getService();

			BlobId blobId = BlobId.of(bucketName, objectName);
			BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
			Blob blob = storage.create(blobInfo, Files.readAllBytes(filePath));

			System.out.println("File " + filePath + " uploaded to bucket " + bucketName + " as " + objectName);
			return new String[] { "fileUrl", objectName };

		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}

	}

	/*
	 * Converts the multipartfile to a fileOutputStream in order to be uploaded
	 * @Param MultipartFile
	 * */
	private File convertMultiPartToFile(MultipartFile file) throws IOException {
		File convertedFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
		FileOutputStream fos = new FileOutputStream(convertedFile);
		fos.write(file.getBytes());
		fos.close();
		return convertedFile;
	}

	/*
	 * Generates the name of the file
	 * @Param MultipartFile
	 * 
	 * */
	private String generateFileName(MultipartFile multiPart) {
		return new Date().getTime() + "-" + Objects.requireNonNull(multiPart.getOriginalFilename()).replace(" ", "_");
	}

	/*
	 * Initialize the firebase storage service
	 * */
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
