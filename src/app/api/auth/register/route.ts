import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, password, name } = await req.json()
  const hashed = await bcrypt.hash(password, 10)

  const userExists = await prisma.user.findUnique({ where: { email } })
  if (userExists) {
    return new Response('Usuário já registrado', { status: 400 })
  }

  await prisma.user.create({
    data: { email, password: hashed, name }
  })

  return new Response('Registro feito com sucesso', { status: 201 })
}