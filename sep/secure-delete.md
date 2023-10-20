# Secure Deletion in SEP

## Method Name: SecureDelete

### Summary:

This method securely deletes a file by overwriting it with random data multiple times, then renaming and finally deleting the file.

### Syntax:

```csharp
public static void SecureDelete(string filePath, int passes)
```

### Parameters:

- `filePath` (string): The path of the file to be securely deleted.
- `passes` (int): The number of times the file should be overwritten with random data.

### Description:

The `SecureDelete` method performs the following steps:

1. Checks if the file exists.
2. If it does, it sets the file’s attributes to normal in case it’s read-only.
3. Calculates the total number of sectors in the file.
4. Creates a dummy buffer the same size as the sector.
5. Creates a cryptographic Random Number Generator, which is used to fill the file with random data.
6. Opens a FileStream to the file.
7. Writes random data to each sector of the file for a specified number of passes.
8. After overwriting, it closes the FileStream.
9. As an extra measure, it calculates a random filename to rename the file to before deleting it.

If an exception occurs during reading or writing, it prints out an error message and closes all open streams.

### Returns

This method does not return a value.

### Exceptions:

This method catches and handles general `Exception`. If an exception is caught, an error message is printed to the console.

### Remarks:

This method should securely erase most files, making them unrecoverable with standard tools. However, please note that this might not work on all types of storage media due to hardware-level features such as wear-levelling on SSDs. Also, remember that this method can be time-consuming for large files or when a large number of passes is specified, as it needs to overwrite every single sector in the file multiple times.