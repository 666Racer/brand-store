import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../redux/slices/productSlice";

const BasketInHeader = ({id, cardLink, img, title, price, quantity, shipping}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    
	return (
            <div className="" key={id}>
                <a href={cardLink}>
                    <div className="purchase">
                        <div className="purchase__productImg">
                            <img className="purchase__photo"src={img} alt="purchase photo"/>
                        </div>
                        <div className="purchase__info">
                            <h3 className="purchase__name">{title}</h3>
                            <img className="rate-stars" src="./img/stars_rate.png" alt="stars rate"/>
                            <p className="quantity-info">1 <span
                                    className="quantity-info"> x </span>
                                    $${price}
                            </p>
                            {/* <div class="total-sum ">
                                <p class="total-text ">TOTAL</p>
                                <p class="total-text ">${price * quantity + shipping}</p>
                            </div> */}
                        </div>
                        <form>
                            <button id={id} className="purchase__cancel" onClick={handleDelete}>
                                <img className="purchase__cancel__img" src="./img/cancel.png" alt="close"/>
                            </button>
                        </form>                    
                    </div>
                </a>
            </div>
	)
}

export default BasketInHeader;