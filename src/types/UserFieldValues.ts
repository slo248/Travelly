import { FieldValues } from 'react-hook-form';

export interface UserFieldValues extends FieldValues {
  email: string;
  password: string;
}
