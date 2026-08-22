'use client';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';

export default function SignUp() {
   const router = useRouter();
   const [password, setPassword] = useState('');

   const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signUp.email({
         name: userData.name,
         email: userData.email,
         password: userData.password,
         image: userData.image,
         autoSignIn: false,
      });

      if (error) {
         toast.error(error.message);
      } else {
         await authClient.signOut(); // prevent auto login
         toast.success('Registration successful. Please sign in.');
         router.push('/auth/signIn');
      }
   };

   const handleGoogleSignIn = async () => {
      await authClient.signIn.social({
         provider: 'google',
      });
   };

   return (
      <Card className="mx-auto mt-8 mb-5 w-125 max-h-[85vh] overflow-y-auto border py-6 pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full">
         <h1 className="text-center text-2xl font-bold">Sign Up</h1>

         <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
               <Label>Name</Label>
               <Input placeholder="Enter your name" />
               <FieldError />
            </TextField>

            <TextField isRequired name="image" type="text">
               <Label>Image URL</Label>
               <Input placeholder="Image URL" style={{ width: 'auto', height: 'auto' }} />
               <FieldError />
            </TextField>

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
               <Input
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
               </Description>
               <FieldError />
            </TextField>

            <TextField
               isRequired
               name="confirmPassword"
               type="password"
               validate={(value) => {
                  if (value !== password) {
                     return 'Passwords do not match';
                  }
                  return null;
               }}
            >
               <Label>Confirm Password</Label>
               <Input placeholder="Confirm your password" />
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

         <div className="flex items-center gap-3 mt-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
         </div>

         <Button variant="outline" className="w-full py-1 mt-3" onClick={handleGoogleSignIn}>
            <GrGoogle />
            Continue with Google
         </Button>

         <p className="mt-3 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/auth/signIn" className="font-medium text-primary hover:underline">
               Sign in
            </Link>
         </p>
      </Card>
   );
}
