import faker from '@faker-js/faker';
import { prisma } from '@/config';

export async function createHotel() {
  return await prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.imageUrl(),
    },
  });
}

export async function createRoomWithHotelId(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.name.firstName(),
      capacity: faker.datatype.number(),
      hotelId,
    },
  });
}

export async function createHotelsData() {
  const hotel = await prisma.hotel.create({
    data: {
      name: faker.commerce.department(),
      image: faker.image.imageUrl(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    },
    include: {
      Rooms: true,
    },
  });
  return hotel;
}
export async function createTicketTypeData() {
  return prisma.ticketType.create({
    data: {
      name: faker.name.findName(),
      price: faker.datatype.number(),
      isRemote: false,
      includesHotel: true,
    },
  });
}
