import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTribeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    status: number;
}