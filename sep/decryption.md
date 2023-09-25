# Decryption in SEP
## Method Name: FileDecrypt

### Summary:

This method decrypts a file that was previously encrypted using the Rijndael symmetric encryption algorithm.

### Syntax:

```csharp
public static void FileDecrypt(string inputFile, string outputFile, string password)
```

### Parameters:

- `inputFile` (string): The path of the encrypted file.
- `outputFile` (string): The path where the decrypted file will be saved.
- `password` (string): The password used for decryption.

### Description:

The `FileDecrypt` method performs the following steps:

1. Converts the password string to a byte array.
2. Creates a byte array for the salt.
3. Opens the encrypted file.
4. Reads the salt from the beginning of the file.
5. Sets up the Rijndael symmetric encryption algorithm with a key size of 256 bits, a block size of 128 bits, and PKCS7 padding.
6. Uses the `Rfc2898DeriveBytes` class to generate a key and an initialization vector (IV) for AES decryption from the password and the salt.
7. Sets the cipher mode to CFB (Cipher Feedback).
8. Creates a `CryptoStream` that reads from the encrypted file using the AES decryptor.
9. Creates a new file where it writes the decrypted data.
10. Reads from the `CryptoStream` into a buffer, then writes from the buffer to the output file, effectively decrypting the file.

If an exception occurs during reading or writing, it prints out an error message and closes all open streams.

### Returns:

This method does not return a value.

### Exceptions:

This method catches and handles `CryptographicException` and general `Exception`. If an exception is caught, an error message is printed to the console.

### Remarks:

This method assumes that the first 32 bytes of the encrypted file are the salt used during encryption. If this is not the case, or if a different encryption algorithm or parameters were used, this method might not work correctly.
