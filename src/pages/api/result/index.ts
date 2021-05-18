import prisma from '../../../../lib/prisma'

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: any, res: any) {
  const result = await prisma.result.createMany({
    data: req.body,
    skipDuplicates: true
  })
  res.json(result)
}