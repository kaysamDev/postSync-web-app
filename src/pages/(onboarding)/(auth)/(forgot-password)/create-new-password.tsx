import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../../components/ui/avatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { useState } from "react";
import Alert from "../../../../components/ui/Alert";

const CreateNewPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof CreateNewPasswordSchema>;

export default function CreateNewPassword() {
  const [isCreated, setIsCreated] = useState(false);
  // const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(CreateNewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsCreated(true);
  };

  return (
    <>
      {isCreated ? (
        <Alert
          title="New Password Create"
          message="Click the button below to go to your Homepage"
          buttonText="Homepage"
        />
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center md:w-3/5 mx-auto">
          <div className="text-center">
            <Avatar className="mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4>Create new Password</h4>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4 w-full"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your new password"
                        {...field}
                      />
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
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your new password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage style={{ fontSize: "12px" }} />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full my-2">
                Create
              </Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
}
