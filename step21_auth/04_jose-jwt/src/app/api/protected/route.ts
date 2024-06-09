import { verifyJWT } from '@/utils/jwt';

export default async function handler({req, res}: any) {
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