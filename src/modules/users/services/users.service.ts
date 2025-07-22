import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { Role } from "src/common/enums/role.enum";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    public getUserById(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
    }

    public async getAuthenticatedUser() {
        let user = await this.usersRepository.findOneBy({ email: 'test@example.com' });

        if (!user) {
            user = new User;

            user.id = 1;
            user.email = 'test@example.com';
            user.name = 'Test User';
            user.role = Role.Customer;

            await this.usersRepository.save(user);
        }

        return user;
    }
}