import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const hardcodedReviewsByCategory = {
  'Refrigerator Parts & Accessories': [
    { reviewText: 'I needed this for my refrigerator and I wanted a good heavy duty extension cord to do the job.  This is a really nice heavy gauge, three prong extension cord.  I was impressed enough by it that I bought another one.' },
    { reviewText: "I purchased this cord based upon another review I read. Just wanted to leave a correction.The specifications are correct and the cord works perfectly.  Coleman Cable makes great products and I have purchased their stuff before.  A review suggested that the cord is Made in the USA.  Coleman Cable does make a lot of cabling products in the US, but the 6 foot cord I received from Amazon was Made in Indonesia." },
    { reviewText: "Amazon description says made in USA, but the 6' cord I got was made in Indonesia. That's disappointing.  I spent extra for this cord over other ones Amazon sells on the basis that it was made in the U.S." }
  ],
  'Humidifier Parts & Accessories': [
    { reviewText: "It's exactly what I was looking for and unable to find locally.  The humidifier is still functioning properly so I want to continue using it." },
    { reviewText: "This wicks very well.  We soaked it by immersing it fully in water first, then used it in the Holmes humidifier, and it's astonishing how fast the humidifier goes through a tank of water.  We make sure not to run the tank dry (so we don't dry out the filter and have to re-soak it).  I'll report back if it doesn't last as long as it should, but right now it's been working well for about a month."},
    { reviewText: "I have had soem that were supposed to fit my humidifier and did not fit properly. This one did and worked well. Only wish the filters would last longer but none ever do."}
    
  ],
  'Range Parts & Accessories': [
    { reviewText: 'Not much to say bout Leviton; they make good quality outlets. This 250 volt outlet is no exception. Works well.'},
    { reviewText: 'I bought the heat tamer for use with very low simmering such as oatmeal, rice, etc. I found that the lowest setting on my gas stove was too high and, particularly with the lid on, these tended to boil over, It works!!!!! I might have been better with a larger one but as I said, this works.'},
    { reviewText: 'I bought one of these for my electric stove about 1 1/2 years ago.  Kind of expensive for a piece of metal at the time, but it seemed to work OK for a while until I began noticing that my pots or pans did not set flat on the plate anymore.  Sure enough, the plate became noticeably warped with a hump in the middle.  It was after a year of usage and I didnt pursue a replacement or refund.  In the meantime I found in the bottom of my cabinet a round steel plate we must have purchased 20-30 years ago.  I have been using this old one under same conditions since with excellent results.'},
  ],
  'Dishwasher Parts & Accessories': [
    { reviewText: 'My husband runs the dishwasher at our house, and was not always available to tell me if the dishes were clean or dirty.  He pre-washes them all so clean, I could never tell by looking.  Now I know immediately when I can add the dirty dishes.  Our dishwasher does not have a metallic front, so the suction cup works well for us.  I ordered the indicator just a few days before Christmas with expedited shipping to a different address, and it arrived as specified on Christmas Eve.  I am happy to say that we now no longer have arguments over the dishwasher!' },
    { reviewText: "Weve had one of these over 9 years. It has worked great for us.Further in the past, we had a square magnetic style. After a household move, we discovered that the magnetic one would not work on the dishwasher in this house, because the door and other areas  of the dishwasher front have very little steel or other metal, to which a magnet could cling. Some kind of plastic laminate I guess. Our old magnetic sign-flag-indicator thing-ee just fell on the floor.So we bought this style, because it does not depend on a magnet. I was leery at first, worrying that the suction cup would fail quickly. The suction cup on this product has clung to the dishwasher door for 9 years. The door is opened and closed daily, yet it has never fallen off.However, this may not be a good choice for SOME dishwashers:(1) if the dishwasher door does not have a smooth surface -- some type of textured or bumpy surface the suction cup may not cling properly.(2) if the dishwasher door is BLACK, this item will be very hard to see. The colors of this item are NOT the black and white, which you might guess from the photo. There is no white area on this; the actual colors are black and CLEAR plastic. The word DIRTY is in clear plastic surrounded by black; and the word CLEAN is black surrounded by clear plastic. When placed against a BLACK dishwasher door, the clear plastic areas will just look black, such that the entire thing will look like a big round black button.It's easy to clean around it, by holding a damp cloth flatly and sliding it behind the circle.  We do not attempt to clean underneath the suction cup part, on a routine basis.  We have not removed or detached the suction cup in years.  If I were to do so daily, I'm guessing the suction cup might degrade quicker, maybe loose its' cling.The wheel spins easily -- no strength required.  The wheel does not spin too loosely when merely opening or closing the door, but if it did, it would be no problem to reset it.This appears to be the same Interdesign product number 25500, listed as Amazon ID B00004XSF9:InterDesign 255 00 Clean & Dirty Dishwasher IndicatorWe bought ours, which is the same Interdesign brand and style, at a local store, so unable to provide opinions on the sellers here.  A note for those new to Amazon:  There is a separate review-feedback section for each of the third-party Marketplace sellers.  Clickable links, to see those seller reviews, are in the upper right-hand quadrant of this product page, on or near the seller's company name." },
    { reviewText: "With 5 people in the house we really need something to cling to our dishwasher and let everyone know whether the dishes inside are 'dirty' or 'clean'.  Our dishwasher has a stainless steel finish, so a magnet will not work.  I thought this suction-cup thingie would work perfectly!  Afterall, the surface of the washer is as smooth as humanly possible and perfectly clean.  Wrong.  The suction cup would never stay on for more than 30 minutes before falling away.  After it fell for the second time, from a height of approximately 2 feet off a linoleum surface, the plastic disk (that has the words 'clean' and 'dirty' and that you rotate on the spindle) broke completely in two.  I glued it back together, but of course now it looks awful and in any event it still won't stick to anything without falling off within a few minutes.  Yeah, it's only $6 after shipping, but spare yourself that wasted $6 and buy something else." }
  ],
};

// Create a React component to render the data
const Q6  = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 1000, maxHeight: '80vh', bgcolor: 'background.paper', border: '2px solid #000',
        boxShadow: 24, p: 4, overflowY: 'auto' // Enables vertical scrolling
      }}>
        <h2>Reviews by Category</h2>
        {Object.entries(hardcodedReviewsByCategory).map(([category, reviews]) => (
          <div key={category}>
            <h3>{category}</h3>
            {reviews.map((review, index) => (
              <p key={index}>{review.reviewText}</p>
            ))}
          </div>
        ))}
      </Box>
    </Modal>
  );
};

export default Q6;