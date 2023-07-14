import httpStatus from 'http-status';
import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import hotelsService from '@/services/hotels-service';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const hotels = await hotelsService.getHotels(userId);
  return res.status(httpStatus.OK).send(hotels);
}

export async function getHotelsWithRooms(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { hotelId } = req.params;

  if (!hotelId) return res.sendStatus(httpStatus.BAD_REQUEST);
  const numberIdHotel = Number(hotelId);
  if (isNaN(numberIdHotel)) return res.sendStatus(httpStatus.BAD_REQUEST);

  const hotels = await hotelsService.getHotelsWithRooms(userId, Number(hotelId));

  return res.status(httpStatus.OK).send(hotels);
}
