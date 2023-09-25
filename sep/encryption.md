# Encryption in SEP

## Method Name: FileEncrypt

### Summary:

This method encrypts a file using the Rijndael symmetric encryption algorithm.

### Syntax:

```csharp
public static void FileEncrypt(string inputFile, string outputFile, string password)
```

### Parameters:

- `inputFile` (string): The path of the file to be encrypted.
- `outputFile` (string): The path where the encrypted file will be saved.
- `password` (string): The password used for encryption.

### Description:

The `FileEncrypt` method performs the following steps:

1. Generates a random salt.
2. Creates an output file with the specified name.
3. Converts the password string to a byte array.
4. Sets up the Rijndael symmetric encryption algorithm with a key size of 256 bits, a block size of 128 bits, and PKCS7 padding.
5. Uses the `Rfc2898DeriveBytes` class to generate a key and an initialization vector (IV) for AES encryption from the password and the salt.
6. Sets the cipher mode to CFB (Cipher Feedback).
7. Writes the salt to the beginning of the output file.
8. Creates a `CryptoStream` that will write to the output file using the AES encryptor.
9. Opens the input file and creates a 1MB buffer.
10. Reads from the input file into the buffer, then writes from the buffer to the `CryptoStream`, effectively encrypting the file.

If an exception occurs during reading or writing, it prints out an error message and closes all open streams.

### Returns:

This method does not return a value.

### Exceptions:

This method catches and handles general `Exception`. If an exception is caught, an error message is printed to the console.

### Remarks:

This method overwrites any existing file with the same name as your output file. Also, it’s important to remember that encryption doesn’t inherently delete or modify your original file, so if you want to secure your data, you should delete the original file after encryption (and ensure it’s not recoverable).

## Further Information
**AES - Advanced Encryption Standard (AES)** or "Rijndael". With a key size of 256 bits, this can be considered _military-grade_ encryption.

Encrypt File Function:
1. **Generate Random Salt**: A random salt is generated for use in password hashing.

2. **Check for Password Library ID**: If the `currentID` contains a “⌀”, it extracts the password library ID.

3. **Create Output File Name**: Depending on whether Multi-Factor Authentication (MFA) is being used, it creates an output file name with different extensions. 
	If MFA is being used, the output file is created in the same directory as the input file with an extension of “.mfa” or “.lib” followed by the password library ID. 
	If MFA is not being used, the output file is created with an extension of “.aes” or “.lib” followed by the password library ID.

4. **Set Encryption Algorithm**: The Rijndael symmetric encryption algorithm (the algorithm behind AES) is set up with a key size of 256 bits, a block size of 128 bits, and PKCS7 padding.

5. **Generate Key and IV**: The password is hashed along with the salt to generate the key and initialization vector (IV) for the AES encryption.

6. **Write Salt to Output File**: The salt is written to the beginning of the output file.

7. **Encrypt File**: A buffer is created and data from the input file is read into this buffer, encrypted, and then written to the output file. This process continues until all data from the input file has been encrypted and written to the output file.

8. **Handle Errors and Clean Up**: Any errors that occur during the encryption process are caught and logged, and finally, all open streams are closed.
