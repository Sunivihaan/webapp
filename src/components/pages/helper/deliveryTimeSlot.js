import React from 'react'

const DeliveryTimeSlot = ({ timeSlots }) => {
  return (
    <div>
      <p
        style={{
          fontWeight: '500',
          fontSize: '13px',
        }}
      >
        Delivery time slots
      </p>
      <div className='time-slot-container'>
        {timeSlots.map((slot) => {
          return <button className='time-slot'>{slot}</button>
        })}
      </div>
    </div>
  )
}

export default DeliveryTimeSlot
