import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { TproductSizes } from "@/types/model";

type Prop = {
  imageLink: string;
  title: string;
  price: number;
  rating: number;
  id : string,
  sizes? : TproductSizes[]
};

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
};

const Card = ({imageLink, title, price, rating, id,sizes}: Prop) => {
  return (
    <div className="flex flex-col gap-2 mb-2 mt-2 items-center transition-all hover:translate-y-1">
      <Link href={`/product/${id}`}>
        <Image
          loading="lazy"
          src={imageLink}
          width={300}
          height={200}
          alt="image"
          className="rounded-md xl:w-[15vw] 2xl:w-[13vw]"
        />
      </Link>
      <div className="flex flex-col max-w-[40vw] xl:w-[15vw] 2xl:w-[13vw] items-center md:items-start ga">
        <h3 className="font-bold text-sm md:text-md">{title}</h3>
        <div className="flex flex-row items-center">
          <Rating
            readOnly={true}
            style={{ maxWidth: 110 }}
            value={rating}
            itemStyles={myStyles}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-1 gap-5">
          <h2 className="font-bold mt-1">₹ {price}</h2>
           <div className="flex gap-1">
             {
               sizes?.map(item => (
                 item.quantity > 0 &&
                   <h3 key={item.quantity} className="border px-2">{item.size.substring(0,2)}</h3>
               ))
             }
           </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
