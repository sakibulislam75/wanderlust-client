'use client';

import { authClient } from '@/lib/auth-client';
import { Envelope } from '@gravity-ui/icons';
import {
   Button,
   Input,
   Label,
   Modal,
   Surface,
   TextField,
   FieldError,
   ListBox,
   Select,
   TextArea,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { BiSolidEdit } from 'react-icons/bi';
import { FaRegEdit, FaRegSave } from 'react-icons/fa';
import { toast } from 'react-toastify';

export function EditModal({ destination }) {
   const { _id } = destination;
   const router = useRouter();
   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const { data: tokenData } = await authClient.token();
      try {
         const res = await fetch(`${process.env.SERVER_URL}/destination/${_id}`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${tokenData?.token}`,
            },
            body: JSON.stringify(data),
         });
         const result = await res.json();
         console.log(result);
         if (result.modifiedCount > 0) {
            router.refresh();
            toast.success('Destination updated successfully');
         } else if (result.matchedCount > 0) {
            toast.info('No changes detected, data already up to date');
         } else {
            toast.error('Failed to update destination');
         }
      } catch (error) {
         console.error('Failed to add destination:', error);
      }
   };
   return (
      <Modal>
         <Button
            variant="outline"
            size="sm"
            className="rounded-none border-gray-300  px-4 text-sm text-gray-700"
         >
            <BiSolidEdit /> Edit
         </Button>
         <Modal.Backdrop>
            <Modal.Container placement="auto">
               <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                     <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                        <FaRegEdit className="size-5" />
                     </Modal.Icon>
                     <Modal.Heading>Update Travel Package</Modal.Heading>
                     <p className="mt-1.5 text-sm leading-5 text-muted">
                        Make change to the travel package details below
                     </p>
                  </Modal.Header>
                  <Modal.Body className="p-6">
                     <Surface variant="default">
                        <form onSubmit={onSubmit} className="space-y-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2">
                                 <TextField
                                    defaultValue={destination.destinationName}
                                    name="destinationName"
                                    isRequired
                                 >
                                    <Label>Destination Name</Label>
                                    <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                    <FieldError />
                                 </TextField>
                              </div>

                              {/* Country */}
                              <TextField
                                 defaultValue={destination.country}
                                 name="country"
                                 isRequired
                              >
                                 <Label>Country</Label>
                                 <Input placeholder="Indonesia" className="rounded-2xl" />
                                 <FieldError />
                              </TextField>

                              {/* Category */}
                              <Select
                                 name="category"
                                 isRequired
                                 defaultSelectedKey={destination.category}
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

                              {/* Price */}
                              <TextField
                                 defaultValue={destination.price}
                                 name="price"
                                 type="number"
                                 isRequired
                              >
                                 <Label>Price (USD)</Label>
                                 <Input type="number" placeholder="1299" className="rounded-2xl" />
                                 <FieldError />
                              </TextField>

                              {/* Duration */}
                              <TextField
                                 defaultValue={destination.duration}
                                 name="duration"
                                 isRequired
                              >
                                 <Label>Duration</Label>
                                 <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
                                 <FieldError />
                              </TextField>

                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                 <TextField
                                    defaultValue={destination.departureDate}
                                    name="departureDate"
                                    type="date"
                                    isRequired
                                 >
                                    <Label>Departure Date</Label>
                                    <Input type="date" className="rounded-2xl" />
                                    <FieldError />
                                 </TextField>
                              </div>

                              {/* Image URL */}
                              <div className="md:col-span-2">
                                 <TextField
                                    defaultValue={destination.imageUrl}
                                    name="imageUrl"
                                    isRequired
                                 >
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
                                 <TextField
                                    defaultValue={destination.description}
                                    name="description"
                                    isRequired
                                 >
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
                           <div>
                              <Modal.Footer>
                                 <Button slot="close" variant="secondary">
                                    Cancel
                                 </Button>
                                 <Button type="submit" slot="close">
                                    <FaRegSave />
                                    Save Chnages
                                 </Button>
                              </Modal.Footer>
                           </div>
                        </form>
                     </Surface>
                  </Modal.Body>
               </Modal.Dialog>
            </Modal.Container>
         </Modal.Backdrop>
      </Modal>
   );
}
