import { Injectable } from '@nestjs/common';

type VerificationRepository = {
    id: number,
    state: number
};

@Injectable()
export class VerificationTypeService {
    private mockVerificationRepositories: VerificationRepository[];

    constructor() {
        this.mockVerificationRepositories = [];
    }

    createRepositoryVerificationType(id: number) {
        const verification = {
            id: id,
            state: Math.floor(Math.random() * (606 - 604 + 1) + 604)
        } as VerificationRepository
        this.mockVerificationRepositories.push(verification);
        return verification;
    }

    getRepositoriesVerificationType() {
        return this.mockVerificationRepositories;
    }

    getRepositoryVerificationType(id: number) {
        const verification = this.mockVerificationRepositories.filter((ver) => {
            if(ver.id === id) return true;
        });

        if (!verification.length) {
            return this.createRepositoryVerificationType(id);
        }
        console.log(verification);
        return verification;
    }
}
