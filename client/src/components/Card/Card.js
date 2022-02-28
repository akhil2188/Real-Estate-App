import React from 'react';
import "./Card.css";

const Card = ({listingData}) => {
    
    return (
        <div className="card">
            <div className="card__body">
                <div className="card__image"><img alt='hero' src={listingData.media.main_image ? listingData.media.main_image : listingData.media.large_image_list }/></div>
                <div className='top_content'>
                    <p className='status-block'>{listingData.listing_details.status}</p>
                    <p className='status-block'>{listingData.open_houses ? listingData.open_houses[0].start_time : null}</p>
                    <p className='newDev-block'>{listingData.features.new_development === true ? 'New Development' : null}</p>
                </div>
                <div className='bottom_content'>
                    <p>{listingData.location.address_with_unit}</p>
                    <p>
                        <span>{`$`}{listingData.listing_details.current_price}{`/mo  `}</span>
                        <span>{listingData.unit_details.beds}{`BD | `}</span>
                        <span>{listingData.unit_details.full_baths}{`BA | `}</span>
                        <span>{listingData.unit_details.sqft}{`FT2 `}</span>
                    </p>
                    <p>
                        <span>{listingData.location.place}{` `}</span>
                        <span>{listingData.unit_details.property_type}</span>
                    </p>
                </div>
                <div className='floor-plan'>
                    <div>{listingData.media.main_floor_plan}</div>
                </div>
            </div>

        </div>
    )
      
    
  }

  export default Card;

   