
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