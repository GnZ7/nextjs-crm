import {PrismaClient} from '@prisma/client'

//Generar el cliente de prisma en Singleton para no crear multiples clientes en cada reload

declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = db