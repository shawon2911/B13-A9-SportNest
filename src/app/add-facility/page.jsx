import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import React from "react";

const AddFacilityPage = () => {
  return (
    <section className=" bg-gray-200 py-20 w-full">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center pb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 ">
            Add Facility
          </h2>
          <p className="text-gray-500 mt-3 ">
            {" "}
            Add your facility information to make it available for booking.
          </p>
        </div>
        <Card className="py-10  space-y-4 max-w-4xl mx-auto shadow border border-gray-200">
          

          <form  className="p-10 space-y-8 w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* facility Name */}
            <div className="md:col-span-2">
              <TextField name="facilityName" isRequired>
                <Label className="text-orange-400">Facility Name</Label>
                <Input placeholder="Green Turf" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* location */}
            <TextField name="location" isRequired>
              <Label className="text-orange-400">Location</Label>
              <Input placeholder="Dhanmondi" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
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
            <TextField name="price" type="number" isRequired>
              <Label className="text-orange-400">Price per Hour</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="availableSlots" isRequired>
              <Label className="text-orange-400">Available Slots</Label>
              <Input placeholder="" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* rating */}
            <div className="md:col-span-1">
              <TextField name="rating" type="number" isRequired>
                <Label className="text-orange-400">Rating</Label>
                <Input type="number" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-1">
              <TextField name="imageUrl" isRequired>
                <Label className="text-orange-400">Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/green-turf.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
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
            
            
            className=" rounded-none w-full bg-orange-400 hover:bg-orange-600 py-6 text-white"
          >
            add destination
          </Button>
        </form>
        </Card>
      </div>
    </section>
  );
};

export default AddFacilityPage;
