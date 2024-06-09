# JWT (JSON Web Token)

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. In Next.js applications, JWT is commonly used for:

- ***Authentication:*** Verifying the identity of users by generating and validating tokens.
- ***Authorization:*** Controlling access to resources and routes based on the user's role or permissions.

![App Screenshot](/step21_auth/04_jose-jwt/public/jwt.png)

By using JWT, Next.js applications can maintain secure, stateless sessions, improving performance and scalability.

### Structure of a JWT

![App Screenshot](/step21_auth/04_jose-jwt/public/jwt-structure.png)
In its compact form, JSON Web Tokens consist of three parts separated by dots (.):

![App Screenshot](https://cdn.auth0.com/content/jwt/encoded-jwt3.png)

- 1. ***Header:*** Contains metadata about the token, such as the type of token and the hashing algorithm used.
- 2. ***Payload:*** Contains the claims or the data you want to transmit, such as user information or expiration time.
- 3. ***Signature:*** Ensures the token hasn't been tampered with. It's created by taking the encoded header and payload, a secret, and the specified hashing algorithm.

- Therefore, a JWT typically looks like: `xxxxx.yyyyy.zzzzz`

- If you want to play with JWT and put these concepts into practice, you can use jwt.io Debugger to decode, verify, and generate JWTs.
![App Screenshot](https://cdn.auth0.com/website/jwt/introduction/debugger.png)

# Cryptography in JWT
- JWTs use cryptographic algorithms for signing (HMAC SHA256, RSA, ECDSA).
- Signing ensures the integrity and authenticity of the token.

#### Encoding/Decoding:

- JWT components *(header, payload, signature)* are `Base64Url` encoded.
- The encoded JWT is compact and URL-safe.
- Decoding involves `Base64Url` decoding the token's parts to verify and read the information.
- The encoding and decoding processes ensure that JWTs are compact and easily transmittable in HTTP environments.

### Cryptographic Aspects:
#### Signing:
JWTs are signed to ensure the integrity and authenticity of the claims. The signing process involves creating a digital signature using the specified algorithm (e.g., HMAC SHA256, RSA). This signature can be verified by the recipient to confirm that the token has not been tampered with and that it was issued by a trusted source.

#### Encryption (Optional):
While JWTs can be encrypted to ensure confidentiality. Encrypted tokens hide the claims from other parties, while signed tokens only ensure integrity and authenticity.

# JOSE Library
- The JOSE (JavaScript Object Signing and Encryption) library is used in Next.js to both generate and verify JWTs.
- It works with JSON Web Tokens (JWT) and other related standards such as JSON Web Encryption (JWE), JSON Web Signature (JWS), JSON Web Key (JWK), and more.

### Key Features of jose Library
- **JWT Signing and Verification:** Create and verify JSON Web Tokens.
- **JWE Encryption and Decryption:** Encrypt and decrypt tokens.
- **JWS Signing and Verification:** Sign and verify JSON Web Signatures.
- **JWK Management:** Work with JSON Web Keys for key management.
- **Support for Multiple Algorithms:** Supports various algorithms like HMAC, RSA, ECDSA, and others.

### Step by Step guide
#### 1. Install the jose Library

```bash
npm install jose
```