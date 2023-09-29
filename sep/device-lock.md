# Device Lock
Device Lock (previously known as MFA/Authenticator Apps) is a feature that locks the file being encrypted to the current PC. This is achieved through the use of an appended secret key to the end of your chosen password. This is separated from the password by the diameter sign, `⌀`.

## Overview
The “Device Lock” feature enhances the security of your encrypted files by adding an additional layer of protection. This feature is designed to prevent unauthorized access to your files, even if someone else obtains your password.

## How It Works
When you encrypt a file with the “Device Lock” feature enabled, the program not only uses your password to encrypt the file, but also a randomly generated `secretKey`.

Because this key is unique to your device, even if someone else gets your password and encrypted file, they won’t be able to decrypt the file without access to the same device or secret key file.

## How to Use
When encrypting a file, you’ll have an option to enable the “Device Lock” feature. If you choose to enable it, you won't be able to transfer the file to another device, or move its secret key to another location easily.

When decrypting a file that was encrypted with this feature enabled, you’ll just need to provide your password, and the secret key will be used automatically, but you must also have access to the original device that was used during encryption.

## Important Notes
- If you lose access to your device (for example, if your device is damaged or lost), you might not be able to decrypt your files. It’s important to consider this risk and have a backup plan.
- This feature provides additional security, but it should be used as part of a comprehensive security plan. Always use strong, unique passwords and keep your devices secure.
- As with all security measures, this feature isn’t perfect. It’s always possible that a determined attacker could find a way around it. Stay informed about potential threats and keep your software up-to-date.

## Reasoning
This means that if a file is accidently shared with someone, the password chosen isn't the only thing protecting the file.

## Limitations
This does not, however, protect from someone with access to the secret keys database on the user's PC. The only thing protecting the user's file in this case is their chosen password for their file. Unless the [Password Library](/sep/password-library#Limitations) is used, then the master password chosen will be protecting all the user's files with passwords stored there.
