import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../../../components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../../../../components/ui/input";
import Alert from "../../../../components/ui/Alert";
import { useNavigate } from "react-router-dom";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
});

type FormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const [isLinkSent, setIsLinkSent] = useState(false);

  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsLinkSent(true);
    navigate("/create-new-password");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center md:w-3/5 mx-auto">
      <div className="sr-only">
        <h1>PostSync | Forgot Password</h1>
      </div>
      {isLinkSent ? (
        <Alert
          title="Link Sent"
          message="We have sent a reset link to your email address"
        />
      ) : (
        <>
          <div className="w-12 h-12 mx-auto rounded-full bg-gray-500 mb-4"></div>
          <div className="flex flex-col gap-4 items-center">
            <div className="text-center">
              <h5>Forgot Password</h5>
              <p>Enter your Email Below, and we’ll send you a reset link</p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4 w-full"
              >
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
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}
