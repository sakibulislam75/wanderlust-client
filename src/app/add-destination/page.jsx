'use client';

import { authClient } from '@/lib/auth-client';
import {
   Button,
   FieldError,
   Input,
   Label,
   ListBox,
   Select,
   TextArea,
   TextField,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AddDestination = () => {
   const router = useRouter();
   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const { data: tokenData } = await authClient.token();
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${tokenData?.token}`,
            },
            body: JSON.stringify(data),
         });
         const result = await res.json();
         if (result.insertedId) {
            toast.success('Destination added successfully');
            event.target.reset();
            router.refresh();
         } else {
            toast.error('Failed to add destination');
         }
      } catch (error) {
         console.error('Failed to add destination:', error);
      }
   };

   return (
      <div className="w-full md:w-9/12 mx-auto my-10 px-4 ">
         <h1 className="mb-6 text-2xl font-bold text-center md:text-left">Add New Destinations</h1>

         <div className="w-full md:w-7/12 mx-auto rounded-md border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                     <TextField name="destinationName" isRequired>
                        <Label>Destination Name</Label>
                        <Input placeholder="Bali Paradise" className="rounded-2xl" />
                        <FieldError />
                     </TextField>
                  </div>

                  {/* Country */}
                  <TextField name="country" isRequired>
                     <Label>Country</Label>
                     <Input placeholder="Indonesia" className="rounded-2xl" />
                     <FieldError />
                  </TextField>

                  {/* Category */}
                  <div>
                     <Select
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
                     >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                           <Select.Value />
                           <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                           <ListBox>
                              <ListBox.Item id="Beach" textValue="Beach">
                                 Beach
                                 <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Mountain" textValue="Mountain">
                                 Mountain
                                 <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="City" textValue="City">
                                 City
                                 <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Adventure" textValue="Adventure">
                                 Adventure
                                 <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Cultural" textValue="Cultural">
                                 Cultural
                                 <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Luxury" textValue="Luxury">
                                 Luxury
                                 <ListBox.ItemIndicator />
                              </ListBox.Item>
                           </ListBox>
                        </Select.Popover>
                     </Select>
                  </div>

                  {/* Price */}
                  <TextField name="price" type="number" isRequired>
                     <Label>Price (USD)</Label>
                     <Input type="number" placeholder="1299" className="rounded-2xl" />
                     <FieldError />
                  </TextField>

                  {/* Duration */}
                  <TextField name="duration" isRequired>
                     <Label>Duration</Label>
                     <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
                     <FieldError />
                  </TextField>

                  {/* Departure Date */}
                  <div className="md:col-span-2">
                     <TextField name="departureDate" type="date" isRequired>
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                     </TextField>
                  </div>

                  {/* Image URL */}
                  <div className="md:col-span-2">
                     <TextField name="imageUrl" isRequired>
                        <Label>Image URL</Label>
                        <Input
                           type="url"
                           placeholder="https://example.com/bali-paradise.jpg"
                           className="rounded-2xl"
                        />
                        <FieldError />
                     </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                     <TextField name="description" isRequired>
                        <Label>Description</Label>
                        <TextArea
                           placeholder="Describe the travel experience..."
                           className="rounded-3xl"
                        />
                        <FieldError />
                     </TextField>
                  </div>
               </div>

               {/* Buttons */}
               <div className="flex flex-col md:flex-row justify-between gap-4">
                  <Button
                     type="button"
                     variant="outline"
                     onClick={() => document.querySelector('form').reset()}
                     className="w-full md:w-1/2 bg-red-500 text-white rounded-xl"
                  >
                     Reset
                  </Button>

                  <Button
                     type="submit"
                     variant="solid"
                     className="w-full md:w-1/2 bg-cyan-500 text-white rounded-xl"
                  >
                     Add Destination
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddDestination;
