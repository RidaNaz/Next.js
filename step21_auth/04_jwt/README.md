# JWT (JSON Web Token)

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. In Next.js applications, JWT is commonly used for:

- ***Authentication:*** Verifying the identity of users by generating and validating tokens.
- ***Authorization:*** Controlling access to resources and routes based on the user's role or permissions.

![App Screenshot](/step21_auth/04_jwt/public/jwt.png)

By using JWT, Next.js applications can maintain secure, stateless sessions, improving performance and scalability.

### Structure of a JWT

![App Screenshot](/step21_auth/04_jwt/public/jwt-structure.png)

In its compact form, JSON Web Tokens consist of three parts separated by dots (.):

![App Screenshot](https://cdn.auth0.com/content/jwt/encoded-jwt3.png)

- ***Header:*** Contains metadata about the token, such as the type of token and the hashing algorithm used.
- ***Payload:*** Contains the claims or the data you want to transmit, such as user information or expiration time.
- ***Signature:*** Ensures the token hasn't been tampered with. It's created by taking the encoded header and payload, a secret, and the specified hashing algorithm.

- Therefore, a JWT typically looks like: `xxxxx.yyyyy.zzzzz`

- If you want to play with JWT and put these concepts into practice, you can use jwt.io Debugger to decode, verify, and generate JWTs.
![App Screenshot](https://cdn.auth0.com/website/jwt/introduction/debugger.png)