'use client';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
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
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
type Input = z.infer<typeof survaySchema>;

const CardSurvey = () => {
  const [formStep, setFormStep] = useState(0);
  const router = useRouter();
  const { toast } = useToast();
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
    toast({
      title: 'Thanks for feedback',
    });
    router.refresh();
    form.reset();
    setFormStep(0);
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
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 relative overflow-x-hidden"
            >
              <motion.div
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                className={cn('', {
                  hidden: formStep !== 0,
                })}
              >
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
              </motion.div>
              <motion.div
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                className={cn('', {
                  hidden: formStep !== 1,
                })}
              >
                <FormField
                  control={form.control}
                  name="room"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Room number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Room number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                animate={{
                  translateX: `${200 - formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                className={cn('', {
                  hidden: formStep !== 2,
                })}
              >
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
              </motion.div>
              <motion.div
                animate={{
                  translateX: `${300 - formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                className={cn('', {
                  hidden: formStep !== 3,
                })}
              >
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
              </motion.div>
              <div className="flex items-center justify-between">
                <Button
                  className={cn('', {
                    hidden: formStep === 0,
                  })}
                  onClick={() => {
                    setFormStep(formStep - 1);
                  }}
                  type="button"
                >
                  back
                </Button>
                <Button
                  className={cn(`${formStep === 0 ? 'w-full' : ''}`, {
                    hidden: formStep === 3,
                  })}
                  onClick={() => {
                    form.trigger(['name', 'room', 'food', 'quality']);
                    const nameState = form.getFieldState('name');
                    const roomState = form.getFieldState('room');
                    const foodState = form.getFieldState('food');
                    const qualityState = form.getFieldState('quality');
                    if (
                      (formStep === 0 && nameState.invalid) ||
                      !nameState.isDirty
                    ) {
                      return;
                    } else if (formStep === 1 && roomState.invalid) {
                      return;
                    } else if (formStep === 2 && foodState.invalid) {
                      return;
                    } else if (formStep === 3 && qualityState.invalid) {
                      return;
                    }
                    setFormStep(formStep + 1);
                  }}
                  type="button"
                >
                  next
                </Button>
                <Button
                  className={cn('', {
                    hidden: formStep !== 3,
                  })}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardSurvey;
