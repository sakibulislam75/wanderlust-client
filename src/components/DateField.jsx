'use client';
import { DateField, Label } from '@heroui/react';
import React, { useState } from 'react';

const Datefield = () => {
   const [departureDate, setDepartureDate] = useState(null);
   console.log(new Date(departureDate));
   return (
      <div>
         <DateField onChange={setDepartureDate} className="" name="date">
            <Label>Departure Date</Label>
            <DateField.Group>
               <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
               </DateField.Input>
            </DateField.Group>
         </DateField>
      </div>
   );
};

export default Datefield;
