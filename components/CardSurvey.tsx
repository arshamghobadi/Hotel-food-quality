'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { survaySchema } from '@/validation/auth';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
type Input = z.infer<typeof survaySchema>;

const CardSurvey = () => {
  const form = useForm<Input>({
    resolver: zodResolver(survaySchema),
    defaultValues: {
      name: '',
      room: '',
      food: '',
      quality: '',
    },
  });

  function onSubmit(data: Input) {
    console.log(data);
  }
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Food Name</CardTitle>
          <CardDescription>Please complete the survey</CardDescription>
          <Image
            priority
            src="/image/homepagepic.jpg"
            alt="food pic"
            width={300}
            height={150}
          />
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="room"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Room number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="food"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Food" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>quality</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent id="quality" position="popper">
                          <SelectItem value="bad">Bad</SelectItem>
                          <SelectItem value="okey">Okey</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardSurvey;