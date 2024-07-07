import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileKey2 } from "lucide-react";
import Image from "next/image";

interface UserFormType {
  title: string;
  description: string;
  action: "login" | "signup";
}

export default function UserForm({ title, description, action }: UserFormType) {
  return (
    <Card className="mx-auto max-w-sm">
      <div className="-mt-8 border rounded-full flex justify-center mx-auto h-16 w-16 p-1 bg-muted">
        <Image src="/logo.png" width={64} height={64} alt={"app logo"} />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {action == "signup" && (
            <div className="grid gap-3">
              <Label htmlFor="email">Name</Label>
              <Input id="name" type="text" placeholder="Full Name" required />
            </div>
          )}
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" required />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {action == "login" && (
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm text-slate-500 hover:text-slate-300"
                >
                  Forgot your password?
                </Link>
              )}
            </div>
            <Input name="password" type="password" required />
          </div>

          {action == "signup" && (
            <Button variant={"secondary"} className="space-x-2">
              <FileKey2 className="h-4 w-4" />
              <span>Select master key file</span>
            </Button>
          )}

          <Button type="submit" className="w-full">
            {action == "login" ? "Login" : "Create Account"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {action == "login" ? `Don't have an account? ` : `Already have an account? `}
          <Link href={action == "login" ? "/signup" : "/"} className="underline underline-offset-4">
            {action == "login" ? `Sign up` : `Login`}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
