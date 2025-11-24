import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4">
      <Card className="w-full max-w-md bg-white dark:bg-neutral-800 border dark:border-neutral-700">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Login to continue
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input type="email" placeholder="Email" className="dark:bg-neutral-700 dark:text-white" />
          <Input type="password" placeholder="Password" className="dark:bg-neutral-700 dark:text-white" />
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Login</Button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 dark:text-blue-400 underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
