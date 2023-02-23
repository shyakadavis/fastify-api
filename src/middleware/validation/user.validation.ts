import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }),
  age: z.number({
    required_error: 'Age is required',
    invalid_type_error: 'Age must be a number',
  }),
  role: z.enum(['ADMIN', 'USER']),
  emailUpdates: z.boolean(),
});

const updateUserSchema = z.object({
  ...createUserSchema.shape,
  // don't include the email field in the update schema
  email: z.string().optional(),
});

export type createUserInput = z.infer<typeof createUserSchema>;
export type updateUserInput = z.infer<typeof updateUserSchema>;
