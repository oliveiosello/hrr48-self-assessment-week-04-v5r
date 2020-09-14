## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
    - Plaintext password systems fail because anyone with access, or that gains access to the database in which the passwords are stored can read them.
    - Guards against failure aren't 100% effective, but access to the database can be restricted using more complex authenticatino, or choosing not to use plaintext is a good measure.
- Encrypted passwords
    - Encrypted password systems fail because they can be returned to their original state in the event that some has, or gains access to the encryption key.
    - Measures against failure include those listed for plaintext
- Hashed passwords
    - Hashed password systems can fail by use of rainbow table attacks and/or brute force.
    - Protecting against failure could include applying a salt.

