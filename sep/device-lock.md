# Device Lock
Device Lock is a feature that locks the file being encrypted to the current PC. This is achieved through the use of an appended secret key to the end of your chosen password. This is separated from the password by the diameter sign, `⌀`.

## Reasoning
This means that if a file is accidently shared with someone, the password chosen isn't the only thing protecting the file.

## Limitations
This does not, however, protect from someone with access to the secret keys database on the user's PC. The only thing protecting the user's file in this case is their chosen password for their file. Unless the [password library](/sep/password-library#Limitations) is used, then the master password chosen will be protecting all the user's files with passwords stored there.
