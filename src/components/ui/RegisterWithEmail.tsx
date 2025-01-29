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

export default function RegisterWithEmail() {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
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
        <h4>Create Account</h4>
        <p>It&apos;s free and easy</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage style={{ fontSize: "12px" }} />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage style={{ fontSize: "12px" }} />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-top space-x-2 py-4">
                  <FormControl>
                    <Input
                      type="checkbox"
                      {...field}
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4"
                    />
                  </FormControl>
                  <FormLabel>
                    By creating an account means you agree to the{" "}
                    <a
                      href="/#"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      Terms and Conditions
                    </a>
                    , and our{" "}
                    <a
                      href="/#"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      Privacy Policy
                    </a>
                  </FormLabel>
                  <FormMessage style={{ fontSize: "12px" }} />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full mb-2">
            Sign up
          </Button>
        </form>
      </Form>
      <div>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login" className="text-primary-500">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}
