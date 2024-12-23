import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dto/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUserById(req: Request, res: Response) {
  res.send({});
}

export function createUser(
  req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response<User>
) {
  // req.costumField
  //   req.session
  //   req.user
  res.status(201).send({
    id: 1,
    username: "teto",
    email: "teto@mail.com",
  });
}
