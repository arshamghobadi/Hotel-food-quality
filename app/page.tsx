import Image from 'next/image';
import Link from 'next/link';
// shadcn ui
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { auth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { survaySchema } from '@/validation/auth';
import { z } from 'zod';

type Input = z.infer<typeof survaySchema>;
export default async function Home() {
  const { userId }: { userId: string | null } = auth();
  const form = useForm<Input>();
  return (
    <div>
      {userId && (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Food Name</CardTitle>
            <CardDescription>Please complete the survey</CardDescription>
            <Image
              src="/image/homepagepic.jpg"
              alt="food pic"
              width={300}
              height={150}
            />
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="room">Room number</Label>
                  <Input id="room" placeholder="Name of your Room number" />
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your Name" />
                  <Label htmlFor="food">Food</Label>
                  <Input id="food" placeholder="Name of the Food" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">quality</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Bad</SelectItem>
                      <SelectItem value="sveltekit">Okey</SelectItem>
                      <SelectItem value="astro">Good</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </Card>

        // <div
        //   className="flex flex-col justify-center items-center space-y-2
        //  text-lg"
        // >
        //   <h2>PLease inter your Room number</h2>
        //   <Input />
        //   <div className="flex space-x-4">
        //     <Button>Back</Button>
        //     <Button>Next</Button>
        //   </div>
        // </div>
      )}
      {!userId && (
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col justify-center items-center p-4 space-y-3">
            <h2 className=" text-lg font-bold">
              Welcome to Western Hotel quality Food
            </h2>
            <p className="text-sm">
              We value your feedback! Please take a moment to complete our
              survey and help us improve your experience. Please{' '}
              <Link className="text-blue-500" href="/sign-up">
                Sign-up
              </Link>
            </p>
          </div>
          <Image
            src="/image/homepagepic.jpg"
            width={800}
            height={600}
            alt="Homepagepic"
          />
        </div>
      )}
    </div>
  );
}
