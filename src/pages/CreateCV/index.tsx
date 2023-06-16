import { FormInput } from "lucide-react";
import { FormHelp, FormLabel } from "../../base-components/Form";

const CreateCV = () => {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Regular Form</h2>
      </div>

      <div>
        <FormLabel htmlFor="regular-form-1">Input Text</FormLabel>
        <FormInput id="regular-form-1" type="text" />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="regular-form-2">Rounded</FormLabel>
        <FormInput id="regular-form-2" type="text" />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="regular-form-3">With Help</FormLabel>
        <FormInput id="regular-form-3" type="text" />
        <FormHelp>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </FormHelp>
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="regular-form-4">Password</FormLabel>
        <FormInput id="regular-form-4" type="password" />
      </div>
      <div className="mt-3">
        <FormLabel htmlFor="regular-form-5">Disabled</FormLabel>
        <FormInput id="regular-form-5" type="text" />
      </div>
    </>
  );
};

export default CreateCV;
