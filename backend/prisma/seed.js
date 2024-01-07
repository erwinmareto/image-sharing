const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { username: 'alice' },
    update: {},
    create: {
      username: 'alice',
      password: 'prisma',
      Image: {
        create: {
          image: 'https://www.prisma.io/nextjs',
          caption: 'check out prisma with next js',
          category: 'TECH',
          Comment: {
            create: [
                {
                    comment: "wow this is totally a real comment",
                    userId: 1
                }
            ]
          }
        },
      },
    },
  })

  const bob = await prisma.user.upsert({
    where: { username: 'bob' },
    update: {},
    create: {
      username: 'bob',
      password: 'prisma',
      Image: {
        create: [
            {
              image: 'https://github.com/wihire/wihire-server/blob/develop/src/services/application.js',
              caption: 'the github link is for the final project',
              category: "EVENTS",
              Comment: {
                create: [
                    {
                        comment: "cool project brah",
                        userId: 1
                    },
                    {
                        comment: "thanks guys!",
                        userId: 2
                    },
                    {
                        comment: "sickkkk",
                        userId: 1
                    }
                ]
              }
            },
            {
              image: 'https://dbdiagram.io/d/image-sharing-6578557a56d8064ca0df927d',
              caption: 'mini project erd',
              category: "MEMES"
            },
            
        ],
      },
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
