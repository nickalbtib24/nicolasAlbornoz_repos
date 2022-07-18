import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMetricDto {

    @IsNumber()
    @IsNotEmpty()
    coverage: number;

    @IsNumber()
    @IsNotEmpty()
    bugs: number;

    @IsNumber()
    @IsNotEmpty()
    vulnerabilities: number;

    @IsNumber()
    @IsNotEmpty()
    hotspot: number;

    @IsNumber()
    @IsNotEmpty()
    codeSmells: number;
}