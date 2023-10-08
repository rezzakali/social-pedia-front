import { Card, CardBody, Typography } from '@material-tailwind/react';

const Sponsored = () => {
  return (
    <Card className="w-72 dark:bg-lightDark dark:text-darkText">
      <CardBody className="p-3">
        <div className="flex items-center justify-between mb-1">
          <Typography variant="h6">Sponsored</Typography>
          <Typography>Created At</Typography>
        </div>
        <img
          src="https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=612x612&w=0&k=20&c=j3Vfpo81L5I2g0uJ5tArBC3l_fcPtPAcLzzT4pq5BLY="
          alt=""
          className="rounded"
        />
        <div className="flex items-center justify-between my-3 gap-2">
          <Typography variant="h6">Mika Cosmetics</Typography>
          <Typography variant="small">mikacosmetics.com</Typography>
        </div>
        <Typography className="text-justify">
          They encompass a wide range of items, including makeup, skincare
          products, fragrances, and hair care solutions.
        </Typography>
      </CardBody>
    </Card>
  );
};
export default Sponsored;
