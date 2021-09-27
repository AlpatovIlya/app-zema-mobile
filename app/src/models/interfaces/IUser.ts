import {Education} from '../../types/Education';
import {Gender} from '../../types/Gender';

export interface IUser {
  id: number;
  name: string;
  lastName: string | null;
  surname: string | null;
  patronymic: string | null;
  age: number;
  avatar: string | null;
  gender: Gender;
  education: Education;
  verified: boolean;
  phone: string;
  email: string;
  isVerifiedEmail: boolean;
  birthCityId: number | null;
  currentCityId: number | null;
  helpNeeded: string;
  helpOffer: string;
  areasOfInterest: string;
  career: string;
}
