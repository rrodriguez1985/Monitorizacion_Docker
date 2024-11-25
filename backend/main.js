import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.product.create({
    data: {
      description: "Ejemplo de monitorización con Docker",
      name: "Docker para Novatos",
    },
  });

  console.log(result);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
