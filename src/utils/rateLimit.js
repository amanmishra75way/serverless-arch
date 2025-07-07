import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "10 s"),
});

export const config = {
  runtime: "edge",
};
