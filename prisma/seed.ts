import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: "bme19@example.com" },
      update: {},
      create: {
        email: "bme19@example.com",
        password: "VES19",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
