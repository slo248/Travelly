import { UserFieldValues } from './UserFieldValues';

export interface UserType extends UserFieldValues {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}
