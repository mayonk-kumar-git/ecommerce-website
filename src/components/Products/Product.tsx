import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import ProductDatatype from "../../customDatatype/Product";
import Button from "../designLayouts/Button";

const Product: React.FC<ProductDatatype> = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id: string) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  const handleAddToCart = (props: any) => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.productName,
        quantity: 1,
        image: props.img,
        badge: props.badge,
        price: props.price,
        color: props.color,
      })
    );
  };
  return (
    <div className="w-full relative group">
      <div
        className="max-w-80 max-h-80 relative overflow-y-hidden cursor-pointer"
        onClick={handleProductDetails}
      >
        <div>
          <img className="w-full h-full" src={props.img} alt={`${_id} image`} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
          <div className="mt-[1rem]" onClick={() => handleAddToCart(props)}>
            <Button text="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
