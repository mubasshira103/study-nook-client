'use client';

import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const { data, error } = await authClient.signIn.email({
        email, // required
        password, // required
        rememberMe: true,
      });

      if (data) {
        toast.success('Welcome back 👋', { position: 'top-center' });
        setTimeout(() => {
          router.push('/');
        }, 800);
      }

      if (error) {
        toast.warn(error.message, { position: 'top-center' });
      }
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full my-10 max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Welcome Back 👋</h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Login to continue your learning journey
        </p>

        <Form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
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
            <Input placeholder="john@example.com" name="email" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return 'Minimum 8 characters';
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" name="password" />
            <FieldError />
          </TextField>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <Button
            isDisabled={loading}
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-2"
          >
            {loading ? 'Login...' : 'Login'}
          </Button>

          <Button
            onClick={handleGoogleLogin}
            variant="secondary"
            className="w-full flex items-center justify-center gap-2 border hover:bg-gray-50 transition"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              width={60}
              height={40}
              className="w-5 h-5"
            />
            Continue with Google
          </Button>

          <p className="text-sm text-center mt-2">
            Don’t have an account?{' '}
            <Link href={'/register'}>
              {' '}
              <span className="text-blue-600 cursor-pointer hover:underline">Sign up</span>
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
