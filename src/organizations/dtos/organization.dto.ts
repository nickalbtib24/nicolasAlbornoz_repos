import { Expose } from 'class-transformer';
export class OrganizationDto {
    
    @Expose()
    idOrganization: number;

    @Expose()
    name: string;

    @Expose()
    status: number;
}