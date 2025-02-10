//Create an Prisma entity through which we can interface with our Postgresql database
//import prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); //initialise the prisma for all the functionalities

export default prisma