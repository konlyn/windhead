import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return new Response('Usuário não encontrado', { status: 404 })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return new Response('Senha incorreta', { status: 401 })

  return new Response(`Bem-vindo, ${user.name || 'usuário'}!`, { status: 200 })
}