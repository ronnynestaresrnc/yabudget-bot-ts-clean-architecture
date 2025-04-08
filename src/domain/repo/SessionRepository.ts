// domain/repo/SessionRepository.ts
import { Session } from "../entities/Session"; // La clase Session que representa la sesión

export interface SessionRepository {
  createSession(userId: number, state: string, data: object): Promise<void>;
  updateSessionState(
    userId: number,
    state: string,
    data: object
  ): Promise<void>;
  getSession(userId: number): Promise<Session | null>;
}
