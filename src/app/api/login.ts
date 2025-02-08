import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  console.log('Environment Variables:', process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  // Use environment variables for authentication
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    setCookie({ res }, 'token', 'authenticated', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    res.status(200).end();
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}