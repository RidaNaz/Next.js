To implement ***authentication*** in Next.js, familiarize yourself with three foundational concepts:

* #### [Authentication](/step21_auth/01_authentication/README.md)
Verifies if the user is who they say they are. It requires the user to prove their identity with something they have, such as a username and password.

* #### [Session Management](/step21_auth/03_session-management/README.md)
Tracks the user's state (e.g. logged in) across multiple requests.

* #### [Authorization](/step21_auth/02_authorization/README.md)
Decides what parts of the application the user is allowed to access.

#### Note:
Popular libraries like `NextAuth.js` or` Auth0` provide built-in support for [JWT-based authentication](/step21_auth/04_jose-jwt/README.md). These libraries often handle JWT generation, signing, verification, and session management for you. So, you dont need to manually implement JWT (JSON Web Token) functionality.