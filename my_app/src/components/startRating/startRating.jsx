import ReactStars from "react-rating-stars-component";
import React from "react";


class StarRating extends React.Component {

    render() {
        let rate = this. props.rate;
        
        let ratingChanged = (newRating) => {
            // console.log(newRating);
        };
        return (
            <div className="d-flex  align-items-center">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={ <i className="far fa-star"></i>}
                    halfIcon={ <i className="fa fa-star-half-alt"></i>}
                    fullIcon={ <i className="fa fa-star"></i>}
                    activeColor="#ffd700" />&nbsp;
                <span className="pt-1"> <b>{rate} of 5</b> </span>
            </div>
        )
    }
}
export default StarRating; 