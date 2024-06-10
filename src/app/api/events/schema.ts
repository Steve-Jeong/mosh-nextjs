import { z } from "zod";

const eventSchema = z.object({
    name: z.string().min(2),
    content: z.string()
  })
  
  export default eventSchema;