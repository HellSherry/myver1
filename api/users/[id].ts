import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { id } = request.query
  return response.json({
    id,
    name: 'shanyue'
  })
}
