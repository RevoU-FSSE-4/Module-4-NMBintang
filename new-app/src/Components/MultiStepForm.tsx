import React, {useState} from "react";
import PersonalInfoForm from "./PersonalInformation";
import AddressInfoForm from "./AddressInformation";
import AccountInfoForm from "./AccountInformation";

const MultiStepInfoForm: React.FC = () => {
    const [step, setStep] = useState<number>(1);

    return (
        <div>
            {step === 1 && <PersonalInfoForm nextStep={() => setStep(step +1)} />}
            {step === 2 && <AddressInfoForm nextStep={() => setStep(step +1)}  />}
            {step === 3 && <AccountInfoForm />}
        </div>
    );
};

export default MultiStepInfoForm;
    // const nextStep = () => {
    // setStep(step + 1);
    // };

    // const prevStep = () => {
    // setStep(step - 1);
    // };

    // const renderStep = () => {
    // switch (step) {
    //     case 1:
    //         return <PersonalInfoForm />;
    //     case 2:
    //         return <AddressInfoForm />;
    //     case 3:
    //         return <AccountInfoForm />;
    //     default:
    //         return null;
    //     }
    // };

    // return (
    // <div>
    //     {renderStep()}
    //     <div>
    //         {step > 1 && (
    //             <button type="button" onClick={prevStep}>
    //                 Previous
    //             </button>
    //     )}
    //         {step < 3 && (
    //             <button type="button" onClick={nextStep}>
    //             Next
    //             </button>
    //     )}
    //     </div>
    // </div>
    // );
