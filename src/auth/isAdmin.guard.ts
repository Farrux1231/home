import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class isAdminGuard implements CanActivate {
  constructor(private jwt:JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean{
    let request:Request = context.switchToHttp().getRequest()
    let token = request.headers.authorization?.split(" ")[1];
    try {
      if (!token) {
      throw "you must login to do the aperation";
    }

    let data = this.jwt.verify(token)
    if(!data){
      throw "notogri token"
    }
    if(data.role != "admin"){
        throw "sizga ruxsat yuq"
    }
    request["user"] = data.id;
    return true;
    } catch (error) {
      return error.message
    }
  }
}
