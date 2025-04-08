// domain/entities/Session.ts
export class Session {
  constructor(
    public userId: number,
    public state: string,
    public data: object
  ) {}
}
