import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
      ) {}
    
      @Get('me')
      public async getMine(@Req() req: Request) {
        const user = await this.usersService.getAuthenticatedUser();

        return await this.usersService.getUserById(user.id);
      }
}
