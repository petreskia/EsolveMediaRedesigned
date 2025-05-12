import { v4 as uuidv4 } from "uuid";

export function withId<T extends object>(items: T[]): (T & { id: string })[] {
  return items.map((item) => ({
    ...item,
    id: uuidv4(),
  }));
}
