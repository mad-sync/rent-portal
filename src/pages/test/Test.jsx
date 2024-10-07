import React from "react";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import TextArea from "../../components/TextArea";
import SelectInput from "../../components/SelectInput";

const Test = () => {
  return (
    <div className="m-40 flex flex-col gap-10">
      <Input label="Username / Email" width={"w-3/12"} />
      <PrimaryButton label={"log In"} width={"w-3/12"} />
      <PrimaryButton variant={"outlined"} label={"Menu"} width={"w-3/12"} />
      <TextArea width={'w-4/12'} label={'text area ...'} />
      <SelectInput
        width='w-3/12'
        name="seats"
        label="No. of seats"
        options={[{ 
          label : 'seat-1' ,
          value: 1 }, {label : 'seat-2' , value: 2 }, { label : 'seat-3' ,value: 3 }]}
      />
    </div>
  );
};

export default Test;
