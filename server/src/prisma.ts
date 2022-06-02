import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //a cada query que for realizada no BD aparecerá no terminal
  log: ['query']
});