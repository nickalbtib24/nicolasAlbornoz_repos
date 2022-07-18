import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRepositoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    createTime: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}