'use client';

import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { Check } from '@gravity-ui/icons';
import {
   Button,
   Card,
   Description,
   FieldError,
   Form,
   Input,
   Label,
   TextField,
} from '@heroui/react';
import { GrGoogle } from 'react-icons/gr';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
   const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signIn.email({
         email: userData.email, // required
         password: userData.password, // required
         rememberMe: true,
         callbackURL: '/',
      });
      if (error) {
         toast.error(error.message);
      } else {
         toast.success('Successfully signed-in');
      }
   };
   const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
         provider: 'google',
      });
   };

   return (
      <div>
         <Card className=" border mx-auto w-125 py-10 mt-20 mb-10">
            <h1 className="text-center text-2xl font-bold">Sign In</h1>
            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
               <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return 'Please enter a valid email address';
                     }

                     return null;
                  }}
               >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
               </TextField>

               <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                     if (value.length < 8) {
                        return 'Password must be at least 8 characters';
                     }
                     if (!/[A-Z]/.test(value)) {
                        return 'Password must contain at least one uppercase letter';
                     }
                     if (!/[0-9]/.test(value)) {
                        return 'Password must contain at least one number';
                     }

                     return null;
                  }}
               >
                  <Label>Password</Label>
                  <Input placeholder="Enter your password" />
                  <Description>
                     Must be at least 8 characters with 1 uppercase and 1 number
                  </Description>
                  <FieldError />
               </TextField>

               <div className="flex gap-2">
                  <Button type="submit">
                     <Check />
                     Submit
                  </Button>
                  <Button type="reset" variant="secondary">
                     Reset
                  </Button>
               </div>
            </Form>
            <div className=" flex items-center gap-3">
               <div className="h-px flex-1 bg-gray-200" />
               <span className="text-sm text-gray-400">OR</span>
               <div className="h-px flex-1 bg-gray-200" />
            </div>
            <Button variant="outline" className={'w-full'} onClick={handleGoogleSignIn}>
               <GrGoogle /> Sign In With Google
            </Button>

            <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-400">
               Don&apos;t have an account?{' '}
               <Link
                  href="/auth/signUp"
                  className="text-primary font-semibold hover:underline hover:font-bold text-primary/80 transition-colors"
               >
                  Sign Up
               </Link>
            </p>
         </Card>
      </div>
   );
}
