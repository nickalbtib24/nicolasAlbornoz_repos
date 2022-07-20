import { Controller, Get } from '@nestjs/common';
import { VerificationTypeService } from './verification-type.service';

@Controller('verification-type')
export class VerificationTypeController {

    constructor(private verificationTypeService: VerificationTypeService) {}

    @Get()
    getRepositories() {
        return this.verificationTypeService.getRepositoriesVerificationType();
    }
}
