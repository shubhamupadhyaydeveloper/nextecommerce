import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingBag, ShoppingBagIcon } from "lucide-react";

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
    <div className="flex flex-col gap-2 mb-2 mt-2 items-center transition-all hover:translate-y-1">
      <Link href={"/product/1"}>
        <Image
          loading="lazy"
          src={imageLink}
          width={300}
          height={200}
          alt="image"
          className="rounded-md xl:w-[15vw] 2xl:w-[13vw]"
        />
      </Link>
      <div className="flex flex-col w-[30vw] xl:w-[15vw] 2xl:w-[13vw] items-center md:items-start">
        <h3 className="font-bold text-sm md:text-md">{title}</h3>
        <div className="flex flex-row items-center">
          <Rating
            readOnly={true}
            style={{ maxWidth: 110 }}
            value={rating}
            itemStyles={myStyles}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-1">
          <h2 className="font-bold mt-1">₹ {price}</h2>
          <Button variant="outline"><ShoppingBagIcon/></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
