import { ApplicationError } from '@/protocols';

export function cannotListHotelsError(): ApplicationError {
  return {
    name: 'CannotListHotelsError',
    message: 'Cannot list hotels!',
  };
}

export function cannotHotelsErrorId(): ApplicationError {
  return {
    name: 'CannotTicketHotelsError',
    message: 'Cannot ticket hotels!',
  };
}
