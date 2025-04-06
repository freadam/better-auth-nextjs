"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Profile
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your personal information and how it appears to others.
        </p>
      </div>

      <Card className="border-gray-200 dark:border-gray-800 dark:bg-gray-950">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Profile Picture
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            This will be displayed on your profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
          <Avatar className="h-24 w-24 border border-gray-200 dark:border-gray-800">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
            <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-xl text-gray-800 dark:text-gray-200">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-2">
            <Button
              variant="outline"
              className="border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload new image
            </Button>
            <Button
              variant="ghost"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Remove
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 dark:border-gray-800 dark:bg-gray-950">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Personal Information
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Update your personal details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-gray-900 dark:text-gray-100"
              >
                First name
              </Label>
              <Input
                id="firstName"
                defaultValue="John"
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-gray-900 dark:text-gray-100"
              >
                Last name
              </Label>
              <Input
                id="lastName"
                defaultValue="Doe"
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900 dark:text-gray-100">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@example.com"
              disabled={!isEditing}
              className="border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-900 dark:text-gray-100">
              Phone number
            </Label>
            <Input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              disabled={!isEditing}
              className="border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2 border-t border-gray-100 dark:border-gray-800 px-6 py-4">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Save changes
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Edit profile
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
