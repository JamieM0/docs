# Lockers
### Summary:

The `Lockers` feature encrypts all files in a directory (locker) using the Rijndael symmetric encryption algorithm.

### Stored Information:

- `lockerID` (int): The ID of the locker in the SQLite database.
- `lockerName` (string): The friendly name of the locker.
- `lockerPath` (string): The path of the directory to be encrypted.
- `password` (string): The password used for encryption.
* `lockState` (bool): The current lock state of the locker.

### Description:

The `Lock` method performs the following steps:

1. Lists all files in the locker.
2. For each file in the locker, calls the `FileEncrypt` method with the file path, an output file path, and the password.

If an exception occurs during the encryption of any file, it prints out an error message and stops encryption.

### Exceptions:

This method catches and handles general `Exception`. If an exception is caught, an error message is printed to the console.

### Remarks:

This method overwrites any existing files with the same name as your output files. Also, it’s important to remember that this method will then call the `SecureDelete` function on the original files to ensure that they're unrecoverable. Always keep a backup of important documents and have a way of keeping your password secure.

A backup of the encrypted locker is stored in `%appdata%\sep\backupLockers` to prevent accidental deletion or overwritten contents when encrypted. This backup is overwritten with the latest _encrypted_ version of the data when the locker is unlocked.

## Benefits and Potential Downsides

**Benefits**:

- **Security**: Encrypting all files in a locker with the same password provides a convenient way to secure multiple files at once.
- **Ease of use**: Users only need to remember one password for all files in a locker.

**Potential Downsides**:

- **Single point of failure**: If the password is compromised, all files in the locker are at risk.
- **Password management**: The passwords and all locker info are currently stored in the `%appdata%\sep` folder in an SQLite database in plaintext. This could be a security risk if unauthorised users gain access to this database.

## Future Plans:
There are plans to change the way passwords and locker info are stored in the future. While this will enhance security, it may cause potential incompatibility with future versions of the program. Users should be aware of this and take necessary precautions when upgrading.