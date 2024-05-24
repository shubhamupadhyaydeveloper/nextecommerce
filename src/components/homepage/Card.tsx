import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { Button } from "../ui/button";

type Prop = {
  imageLink: string;
  title: string;
  price: number;
  rating: number;
};

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
};

const Card = ({ imageLink, title, price, rating }: Prop) => {
  return (
    <div className="flex flex-col gap-2 mb-2 mt-2 items-center">
      <Link href={"/verify-email"}>
        <Image
          src={imageLink}
          width={300}
          height={200}
          alt="image"
          className="rounded-md"
        />
      </Link>
      <div className="flex flex-col">
        <h3 className="font-bold text-sm mt-2">{title}</h3>
        <div className="flex flex-row items-center">
          <Rating
            readOnly={true}
            style={{ maxWidth: 110 }}
            value={rating}
            itemStyles={myStyles}
          />
          <div className={`flex text-sm relative right-${rating > 3 ? 8 : (rating < 3 ? 20 : 9)}`}>
            <h1 className="font-bold">{rating}</h1>
            <h1 className="font-light">/5</h1>
          </div>
        </div>
        <h2 className="font-bold mt-1">₹ {price}</h2>
        <Button className="w-[300px] mt-2">add to cart</Button>
      </div>
    </div>
  );
};

export default Card;
