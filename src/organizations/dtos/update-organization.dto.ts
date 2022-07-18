import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrganizationDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    status: number;
}