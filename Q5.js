import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Define hardcoded data
const hardcodedReviewsByYear = {
  2011: [
    { reviewText: 'Great product, helped me a lot during the summer.' },
    { reviewText: 'Had some issues with delivery, but the product is solid.' },
    { reviewText: 'Not as expected, but decent for the price.' },
  ],
  2012: [
    { reviewText: 'Holmes filter was exactly like that that we have purchased in stores, but it is hard to find in the summer' },
    { reviewText: 'The filter fit right into my humidifier unit and it seems to work just fine.  I bought 3 of them and I am still only using the first one.  I use it almost every night and I would buy them again.  Thanks.' },
    // { reviewText: 'Not as expected, but decent for the price.' },
  ],
  2013: [
    { reviewText: 'Its exactly what I was looking for and unable to find locally.  The humidifier is still functioning properly so I want to continue using it.' },
    { reviewText: 'I chose this rating because this is the exact product I needed according to the humidifiers users guide. I was unable to locate one locally...not in hardware, home improvement, or pharmacy stores.' },
    { reviewText: "hese filters work just fine.  It doesnot take long before they suck the dirt outta the air and you gotta change them.  I would recommend buying 3-4 at a time.  I have to change the filter at least every month, fyi."},
  ],
  2014: [
    { reviewText: 'Excellent performance. It met all of our wishes. I thought it would be a difficult thing to get, but Amazon came thru again' },
    { reviewText: "This wicks very well.  We soaked it by immersing it fully in water first, then used it in the Holmes humidifier, and it's astonishing how fast the humidifier goes through a tank of water.  We make sure not to run the tank dry (so we don't dry out the filter and have to re-soak it).  I'll report back if it doesn't last as long as it should, but right now it's been working well for about a month."},
    { reviewText: 'I have had soem that were supposed to fit my humidifier and did not fit properly. This one did and worked well. Only wish the filters would last longer but none ever do' },
  ],
  // Add other years and reviews similarly
};

// Create a React component to render the data
const Q5 = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1000, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        
    <div>
      <h2>Reviews by Year</h2>
      {Object.entries(hardcodedReviewsByYear).map(([year, reviews]) => (
        <div key={year}>
          <h3>{year}</h3>
          {reviews.map((review, index) => (
            <p key={index}>{review.reviewText}</p>
          ))}
        </div>
      ))}

    </div>
    </Box>
    </Modal>
  );
};

export default Q5;
// To render the component, use it inside your App component or another component.