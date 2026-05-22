"use client";

import { Button, FieldError, TextArea, ListBox,  Select, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiEdit } from "react-icons/bi";

const EditFacility = ({facility}) => {
    console.log(facility);
    const id = facility._id;

    const handleEdit = async(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            const newFacilityInfo = Object.fromEntries(formData.entries());
            // console.log(newFacilityInfo);
    
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-facilities/${id}`, {
              method: 'PATCH',
              headers: {
                'content-type' : 'application/json'
              },
              body: JSON.stringify(newFacilityInfo)
            })
            const data = await res.json();
            console.log(data);
    
            redirect("/manage-my-facilities");
    
          }
    return (
        <div>
             <Modal>
      <Button className="rounded-none flex items-center py-6 gap-2 bg-orange-500 transition hover:bg-orange-700  px-9">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Info</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Edit your details and save the changes.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form onSubmit={handleEdit}
                        
                        className="p-4 sm:p-6 md:p-10 space-y-8 w-full max-w-3xl mx-auto"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          {/* facility Name */}
                          <div className="md:col-span-1">
                            <TextField name="name" defaultValue={facility.name} isRequired>
                              <Label className="text-orange-400">Facility Name</Label>
                
                              <Input placeholder="Green Turf"  className="rounded-2xl" />
                
                              <FieldError />
                            </TextField>
                          </div>
                
                          {/* {email} */}
                          
                
                          {/* location */}
                          <TextField name="location" defaultValue={facility.location} isRequired>
                            <Label className="text-orange-400">Location</Label>
                
                            <Input placeholder="Dhanmondi"  className="rounded-2xl" />
                
                            <FieldError />
                          </TextField>
                
                          {/* Category - Updated Select Component */}
                          <div>
                            <Select
                              name="category"
                              isRequired
                              className="w-full"
                              placeholder="Select category"
                              defaultValue={facility.category}
                            >
                              <Label className="text-orange-400">Category</Label>
                
                              <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                              </Select.Trigger>
                
                              <Select.Popover>
                                <ListBox>
                                  <ListBox.Item id="Football" textValue="Football">
                                    Football
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                
                                  <ListBox.Item id="Cricket" textValue="Cricket">
                                    Cricket
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                
                                  <ListBox.Item id="Badminton" textValue="Badminton">
                                    Badminton
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                
                                  <ListBox.Item id="Tennis" textValue="Tennis">
                                    Tennis
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                
                                  <ListBox.Item id="Basketball" textValue="Basketball">
                                    Basketball
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                
                                  <ListBox.Item id="Swimming" textValue="Swimming">
                                    Swimming
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                                </ListBox>
                              </Select.Popover>
                            </Select>
                          </div>
                
                          {/* Price */}
                          <TextField name="pricePerHour" defaultValue={facility.pricePerHour} type="number" isRequired>
                            <Label className="text-orange-400">Price per Hour</Label>
                
                            <Input
                              type="number"
                              placeholder="1299"
                              className="rounded-2xl"
                              
                            />
                
                            <FieldError />
                          </TextField>
                
                          {/* Duration */}
                          <TextField name="availableSlots" defaultValue={facility.availableSlots} isRequired>
                            <Label className="text-orange-400">Available Slots</Label>
                
                            <Input placeholder="available slots"  className="rounded-2xl" />
                
                            <FieldError />
                          </TextField>
                
                          {/* rating */}
                          <div className="md:col-span-1">
                            <TextField name="rating" defaultValue={facility.rating} type="number" isRequired>
                              <Label className="text-orange-400">Rating</Label>
                
                              <Input type="number"  className="rounded-2xl" />
                
                              <FieldError />
                            </TextField>
                          </div>
                
                          {/* Image URL - Removed preview */}
                          <div className="md:col-span-1">
                            <TextField name="image" defaultValue={facility.image} isRequired>
                              <Label className="text-orange-400">Image URL</Label>
                
                              <Input
                                type="url"
                                placeholder="give link from imagebb.com"
                                className="rounded-2xl"
                                
                              />
                
                              <FieldError />
                            </TextField>
                          </div>
                
                          {/* Description */}
                          <div className="md:col-span-2">
                            <TextField name="description"  defaultValue={facility.description} isRequired>
                              <Label className="text-orange-400">Description</Label>
                
                              <TextArea
                                placeholder="Describe the travel experience..."
                               
                                className="rounded-3xl"
                              />
                
                              <FieldError />
                            </TextField>
                          </div>
                        </div>
                
                        {/* Buttons */}
                
                        <Button
                          type="submit"
                          className="rounded-none w-full bg-orange-400 hover:bg-orange-600 py-6 text-white"
                        >
                          Save Changes
                        </Button>
                      </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  
        </div>
    );
};

export default EditFacility;