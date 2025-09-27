// Firebase upload utilities
import { storage } from '../firebase/config.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Upload a resume file to Firebase Storage
 * @param {File} file - The file to upload
 * @param {string} position - The position name to create a folder (optional)
 * @returns {Promise<string>} - Promise that resolves to the download URL
 */
export async function uploadResumeToFirebase(file, position = null) {
  try {
    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    // Create a sanitized folder name from position
    let folderPath = 'resumes';
    if (position) {
      // Sanitize position name for use as folder name
      const sanitizedPosition = position
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim('-'); // Remove leading/trailing hyphens
      
      folderPath = `resumes/${sanitizedPosition}`;
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().getTime();
    const fileName = `${folderPath}/${timestamp}_${file.name}`;
    
    // Create a reference to the file location in Firebase Storage
    const storageRef = ref(storage, fileName);
    
    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading resume to Firebase:', error);
    throw new Error('Failed to upload resume. Please try again.');
  }
}

/**
 * Upload any file to Firebase Storage with custom path
 * @param {File} file - The file to upload
 * @param {string} folderPath - The folder path in Firebase Storage (e.g., 'documents', 'images')
 * @returns {Promise<string>} - Promise that resolves to the download URL
 */
export async function uploadFileToFirebase(file, folderPath = 'uploads') {
  try {
    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().getTime();
    const fileName = `${folderPath}/${timestamp}_${file.name}`;
    
    // Create a reference to the file location in Firebase Storage
    const storageRef = ref(storage, fileName);
    
    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file to Firebase:', error);
    throw new Error('Failed to upload file. Please try again.');
  }
}