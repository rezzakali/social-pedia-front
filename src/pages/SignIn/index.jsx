import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PiEye, PiEyeSlash } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useSigninMutation } from '../../features/auth/authApi';

const index = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [signin, { data: response, isLoading, isSuccess, isError, error }] =
    useSigninMutation();

  const onSubmit = (data) => {
    signin(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success(response?.message);
      navigate('/home');
    }
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [response, isSuccess, isError, error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-96 m-auto dark:bg-lightDark dark:text-darkText shadow-none">
          <CardBody className="flex flex-col gap-3">
            <div>
              <Input
                type="email"
                label="Email"
                size="md"
                {...register('email', {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                required
                className="text-white"
              />
              {errors.email && (
                <span className="text-red-400">This field is required!</span>
              )}
            </div>
            <div>
              <Input
                type={showPassword ? 'text' : 'password'}
                label="Password"
                size="md"
                className="dark:text-white"
                {...register('password', {
                  required: true,
                  minLength: 6,
                })}
                required
                icon={
                  showPassword ? (
                    <PiEye
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <PiEyeSlash
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )
                }
              />
              {errors.password && (
                <span className="text-red-400">
                  Password must be 6 characters long!
                </span>
              )}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="outlined"
              type="submit"
              disabled={isLoading}
              fullWidth
              className="shadow-none hover:shadow-none dark:text-white"
            >
              {isLoading ? 'Loading...' : ' Sign In'}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link to="/signup" className="ml-1 font-bold">
                Sign up
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default index;
