import type { NextApiRequest, NextApiResponse } from 'next'

// This is a stub – replace with your user and ticket code DB logic
const isAdmin = (req: NextApiRequest) => {
  // Example: check session, JWT, or API key
  return req.headers['x-admin-key'] === process.env.ADMIN_KEY;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAdmin(req)) return res.status(403).json({ error: 'Not authorized' });

  const { userId, amount, ticketCode } = req.body;

  // TODO: Validate input, fetch user, fetch ticket code from DB
  // Example:
  // 1. Check that ticketCode exists, is unused, and assigned to this userId
  // 2. Add amount to user's balance
  // 3. Mark ticketCode as used

  // Simulate success:
  return res.status(200).json({ success: true, message: `Added ${amount} to user ${userId} (Ticket: ${ticketCode})` });
}
