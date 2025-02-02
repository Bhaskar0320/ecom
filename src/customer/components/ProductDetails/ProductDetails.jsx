"use client";
import { Rating, Avatar, Box, Grid, LinearProgress } from "@mui/material";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
// import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import ProductReviewCard from "./ProductReviewCard";
// import { mens_kurta } from "../../../Data/mens_kurta";
import { mens_kurta } from "../../../Data/Men/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "₹996",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.jpg?s=612x612&w=0&k=20&c=VDC-wDCCWZlkkCdprMJMbQ1MnLxNcLm3UnvtjxYXvHk=",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.jpg?s=612x612&w=0&k=20&c=VDC-wDCCWZlkkCdprMJMbQ1MnLxNcLm3UnvtjxYXvHk=",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.jpg?s=612x612&w=0&k=20&c=VDC-wDCCWZlkkCdprMJMbQ1MnLxNcLm3UnvtjxYXvHk=",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.jpg?s=612x612&w=0&k=20&c=VDC-wDCCWZlkkCdprMJMbQ1MnLxNcLm3UnvtjxYXvHk=",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  // const {productId} = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((store) => store);

  // const handleAddToCart = () => {
  //   const data = { productId: params.productId, size: selectedSize};
  //   console.log("handle add to cart data" , data);
  //   dispatch(addItemToCart(data));
  //   navigate("/cart");
  // };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    const data = { productId: params.productId, size: selectedSize.name };
    console.log("handle add to cart data", data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductsById(data));
  }, [params.productId]);

  // console.log("size of product " + product?.size);
  console.log("printing product size", product.product?.sizes);
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* {{product.map((breadcrumb) => ( */}
            <li>
              <div className="flex items-center">
                <a
                  // href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {product.product?.topLavelCategory}
                  {product.product?.category?.parentCatrgory?.name}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            {/* ))} */}
            <li className="text-sm">
              <a
                // href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.product?.title}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-gidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.product?.imageUrl}
                alt={product.product?.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {/* {product.product?.map((image) => (  */}
              <div
                key={product.product?.id}
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
              >
                <img
                  alt={product.product?.title}
                  src={product.product?.imageUrl}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                key={product.product?.id}
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
              >
                <img
                  alt={product.product?.title}
                  src={product.product?.imageUrl}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                key={product.product?.id}
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
              >
                <img
                  alt={product.product?.title}
                  src={product.product?.imageUrl}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                key={product.product?.id}
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
              >
                <img
                  alt={product.product?.title}
                  src={product.product?.imageUrl}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* ))} */}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 text-left maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900 ">
                {product.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900 opacity-60 pt-1">
                {product.product?.title}
              </h1>
              {/* <h2>{product.product?.brand}</h2> */}
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-grey-900 mt-6">
                <p className="font-semibold">
                  ₹ {product.product?.discountedPrice}
                </p>
                <p className="opacity-50 line-through">
                  ₹ {product.product?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {product.product?.discountPersent}% Off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10" onsubmit={handleAddToCart}>
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup className="flex items-center space-x-3">
                      <Radio
                        key={product.product?.color}
                        value={product.product?.color}
                        aria-label={product.product?.color}
                        className={classNames(
                          "relative -m-0.0001 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                          style={{ backgroundColor: product.product?.color }} // Set background color dynamically
                        />
                      </Radio>
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize || ""}
                      onChange={setSelectedSize}
                      className="mt-4"
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      <div className="sr-only">Choose a size</div>

                      {/* <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10"
                      > */}
                      {product.product?.sizes?.map((size) => (
                        <Radio key={size.name} value={size}>
                          {({ checked }) => (
                            <div
                              key={size.name}
                              value={size.name}
                              disabled={size.quantity <= 0}
                              onClick={() => setSelectedSize(size.name)}
                              className={classNames(
                                size.quantity > 0
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                checked
                                  ? "border-indigo-500 ring-2 ring-indigo-500"
                                  : "border-transparent",
                                "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                              )}
                            >
                              {size.name}
                              {size.quantity > 0 ? (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    stroke="currentColor"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  >
                                    <line
                                      x1={0}
                                      x2={100}
                                      y1={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Radio>
                      ))}
                      {/* </div> */}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  onClick={handleAddToCart}
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <div>
                      <span>Hand cut and sewn locally</span>
                    </div>
                    <div>
                      <span>Dyed with our proprietary colors</span>
                    </div>
                    <div>
                      <span>Pre-washed & pre-shrunk</span>
                    </div>
                    <div>
                      <span>Ultra-soft 100% cotton</span>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {product.product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** rating and review section*/}
        <section>
          <h1 className="font-semibold text-lg pb-4 text-left">
            Recent Review & Rating
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-2">Products Rating</h1>
                <div className="flex itmes-center space-x-3">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60">6481 Ratings</p>
                </div>

                <Box className="mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                        className="yellow"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={18}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/**similar products */}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold text-left">Similar Products</h1>
          <div className="flex flex-wrap space-y-5">
            {mens_kurta.map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
