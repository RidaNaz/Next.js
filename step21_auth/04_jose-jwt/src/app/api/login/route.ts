import { createJWT } from '@/utils/jwt';

export default async function handler({req, res}:any) {
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