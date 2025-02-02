import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
      <div classname="space-y-10">
        <p classname='font-semibold'>{address?.firstName} {address?.lastName}</p>
        <p>{address?.state}, {address?.streetAddress}, {address?.zipCode}</p>
        <div classname='space-y-1'>
            <p classname='font-semibold'>Phone Number</p>
            <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
