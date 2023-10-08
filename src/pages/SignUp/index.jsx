import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PiEye, PiEyeSlash } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../features/auth/authApi';

const index = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [signup, { data: response, isLoading, isSuccess, isError, error }] =
    useSignupMutation();

  const onSubmit = (data) => {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      file,
      occupassion,
    } = data;
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('occupassion', occupassion);
    formData.append('location', location);
    formData.append('image', file[0]);

    signup(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success(response?.message);
      navigate('/');
    }
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [response, isSuccess, isError, error, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="lg:w-[40rem] md:w-[40rem] sm:w-full m-auto">
          <CardBody className="flex flex-col gap-3">
            <div className="w-full flex lg:flex-row md:flex-row sm:flex-col items-center justify-between gap-3">
              <div className="w-full">
                <Input
                  type="text"
                  label="First Name"
                  size="md"
                  {...register('firstname', {
                    required: true,
                    minLength: 3,
                  })}
                  required
                />
                {errors.firstname && (
                  <span className="text-red-400">This field is required!</span>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  label="Last Name"
                  size="md"
                  {...register('lastname', {
                    required: true,
                    minLength: 3,
                  })}
                  required
                />
                {errors.lastname && (
                  <span className="text-red-400">This field is required!</span>
                )}
              </div>
            </div>
            <div className="w-full flex lg:flex-row md:flex-row sm:flex-col items-center justify-between gap-3">
              <div className="w-full">
                <Input
                  type="email"
                  label="Email"
                  size="md"
                  {...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  required
                />
                {errors.email && (
                  <span className="text-red-400">This field is required!</span>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  label="Username"
                  size="md"
                  {...register('username', {
                    required: true,
                  })}
                  required
                />
                {errors.username && (
                  <span className="text-red-400">This field is required!</span>
                )}
              </div>
            </div>
            <div>
              <Input
                type="text"
                label="Occupassion"
                size="md"
                {...register('occupassion')}
              />
            </div>
            <div>
              <Input
                type="text"
                label="Location"
                size="md"
                {...register('location', {
                  required: true,
                })}
                required
              />
              {errors.location && (
                <span className="text-red-400">This field is required!</span>
              )}
            </div>
            <div>
              <Input
                type={showPassword ? 'text' : 'password'}
                label="Password"
                size="md"
                {...register('password', {
                  required: true,
                  min: 6,
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
            <div>
              <Input
                type="file"
                name="image"
                accept="image/jpeg, image/png, image/jpg"
                labelProps={{
                  className: 'hidden',
                }}
                className="border-none ring-1 ring-gray-400"
                {...register('file', {
                  required: true,
                })}
              />
              {errors.file && (
                <span className="text-red-400">Image is required!</span>
              )}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              type="submit"
              disabled={isLoading}
              fullWidth
            >
              {isLoading ? 'Loading...' : ' Sign Up'}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/" className="ml-1 font-bold">
                Sign In
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default index;
