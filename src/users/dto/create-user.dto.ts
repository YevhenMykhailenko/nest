import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: 'Bvtqk gjkmpjdfntkz'})
    readonly email: string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    readonly password: string;
}