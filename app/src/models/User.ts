import {Education} from '../types/Education';
import {Gender} from '../types/Gender';
import {IUser} from './interfaces/IUser';

class User implements IUser {
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

  constructor(data: IUser) {
    this.id = data.id;
    this.name = data.name;
    this.lastName = data.lastName;
    this.surname = data.surname;
    this.patronymic = data.patronymic;
    this.age = data.age;
    this.avatar = data.avatar;
    this.gender = data.gender;
    this.education = data.education;
    this.verified = data.verified;
    this.phone = data.phone;
    this.email = data.email;
    this.isVerifiedEmail = data.isVerifiedEmail;
    this.birthCityId = data.birthCityId;
    this.currentCityId = data.currentCityId;
    this.helpNeeded = data.helpNeeded;
    this.helpOffer = data.helpOffer;
    this.areasOfInterest = data.areasOfInterest;
    this.career = data.career;
  }

  static getUserByApi(data: any) {
    return new User({
      id: data.id,
      name: data.name,
      lastName: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      age: data.avatar,
      avatar: data.name,
      gender: data.gender,
      education: data.name,
      verified: data.verified,
      phone: data.phone,
      email: data.email,
      isVerifiedEmail: data.email_verified_at,
      birthCityId: data.birth_city_id,
      currentCityId: data.current_city_id,
      helpNeeded: data.help_needed,
      helpOffer: data.help_offer,
      areasOfInterest: data.areas_of_interest,
      career: data.career,
    });
  }

  get fullName() {
    return `${this.name} ${this.lastName || ''}`;
  }
}

export default User;
