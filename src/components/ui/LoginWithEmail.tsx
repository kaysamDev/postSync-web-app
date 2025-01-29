import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../../UserSchema";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router-dom";

type FormData = z.infer<typeof formSchema>;

export default function LoginWithEmail() {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    navigate("/otp");
  };

  return (
    <>
      <div className="text-center">
        <Avatar className="mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4>Welcome Back! Login to continue</h4>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage style={{ fontSize: "12px" }} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage style={{ fontSize: "12px" }} />
              </FormItem>
            )}
          />
          <p>
            <Link to="#" className="text-primary-500">
              Forgot password?
            </Link>
          </p>
          <Button type="submit" className="w-full my-2">
            Sign in
          </Button>
        </form>
      </Form>
      <div>
        <div>
          <p>
            Don&apos;t have an account?{" "}
            <span>
              <Link to="/register" className="text-primary-500">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
