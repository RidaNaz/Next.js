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

#### 2.Create JWT Utilities
Create utility functions for creating and verifying JWTs.

> utils/jwt.ts
```ts
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const createJWT = async (payload) => {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);

  return token;
};

export const verifyJWT = async (token) => {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
```

#### 3. Create API Routes
Create API routes for login and protected content.

> src/app/api/login/route.ts
```ts
import { createJWT } from '../../utils/jwt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Example credential check
    if (username === 'user' && password === 'password') {
      const token = await createJWT({ username });
      return res.status(200).json({ token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.status(405).end();
}
```

> src/app/api/protected/route.ts
```ts
import { verifyJWT } from '../../utils/jwt';

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = await verifyJWT(token);
    res.status(200).json({ message: 'Protected content', payload });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

#### 4. Implement Middleware
Create a `middleware.ts` file at the root of your Next.js project. Use middleware to protect routes.

> src/middleware.ts
```ts
import { NextResponse } from 'next/server';
import { verifyJWT } from './utils/jwt';

export async function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const token = authHeader.split(' ')[1];

  try {
    await verifyJWT(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/protected/:path*'], // Protect all routes under /protected
};
```

#### 5. Create Protected Route
Create a protected route that requires authentication.

> src/app/page.tsx
```tsx
export default function ProtectedPage() {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>This content is protected and requires authentication.</p>
    </div>
  );
}
```

#### 6. Create Login Page
Create a simple login page to get the JWT token.

> src/app/login/page.tsx
```tsx
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token); // Store the token
      window.location.href = '/protected'; // Redirect to protected page
    } else {
      console.error(data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
```
