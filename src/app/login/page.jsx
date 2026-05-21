"use client";



import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

import { FaGoogle } from "react-icons/fa";


export default function LoginPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
     const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      
      
    });

    console.log({data, error});

    redirect("/");
    

  }
  

  return (
   <section className="py-30">
     <Card className="border border-orange-400 mx-auto max-w-full  md:w-125 py-10 text-black ">
      <h1 className="text-center text-2xl text-orange-600  font-bold mb-3">Log In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
       

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
          <Label className="text-orange-600">Email</Label>
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
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label className="text-orange-600">Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            className={
              "w-full rounded-lg bg-orange-600 text-lg mt-3 hover:bg-orange-400 hover:scale-[1.02]"
            }
          >
            
            Log In
          </Button>
        </div>
        <div className="flex items-center gap-3 my-4">
          <Separator className="flex-1 bg-gray-300 h-[1px]" />
          <span className="text-gray-400 text-xs uppercase">Or</span>
          <Separator className="flex-1 bg-gray-300 h-[1px]" />
        </div>
      </Form>
      <Button  className={"w-full gap-3 border-gray-500 rounded-full"} variant="outline">
        <FaGoogle />
        <p className="text-gray-700 font-bold">Continue With Google</p>
      </Button>
       <div className="flex justify-center items-center gap-2 mt-2">
        <p className="text-muted">Don't have an account?</p>
        <Link href={"/signup"} className=" font-medium text-orange-600">Register here</Link>
      </div>
    
    </Card>
   </section>
  );
}