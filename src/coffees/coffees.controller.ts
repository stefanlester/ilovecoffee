import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavours')
    findAll() {
        return 'This action returns all coffees';
    }
}
