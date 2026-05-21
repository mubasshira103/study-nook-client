"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
import Image from "next/image";
import { authClient } from "../../lib/auth-client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";



const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const image = formData.get("url");
      const role = formData.get("role");

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
        role,
      });

      if (data) {
        toast.success("Account created successfully 🎉", {
          position: "top-center",
        });
        router.push("/");
      }

      if (error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md my-10 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">
          Create Your Account 🚀
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Join and start learning today
        </p>

        <Form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired>
            <Label>Name</Label>
            <Input placeholder="Write your name" name="name" />
            <FieldError />
          </TextField>

          <Select name="role" placeholder="Select your role">
            <Label>Role</Label>

            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="student" textValue="Student">
                  Student 🎓
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="instructor" textValue="Instructor">
                  Instructor 👨‍🏫
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="mentor" textValue="Mentor">
                  Mentor 🧠
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="developer" textValue="Developer">
                  Developer 💻
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="freelancer" textValue="Freelancer">
                  Freelancer 🌐
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="job-seeker" textValue="Job Seeker">
                  Job Seeker 🔍
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField isRequired type="url">
            <Label>Image URL</Label>
            <Input placeholder="Paste your image link" name="url" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
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
              if (value.length < 8) return "Minimum 8 characters";
              if (!/[A-Z]/.test(value)) return "Add one uppercase letter";
              if (!/[0-9]/.test(value)) return "Add one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" name="password" />
            <Description>
              At least 8 characters, 1 uppercase & 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-3 mt-2">
            <Button
              isDisabled={loading}
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>

            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50 transition cursor-pointer"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width={60}
            height={40}
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
