import React, {useState} from "react";
import PersonalInfoForm from "./PersonalInformation";
import AddressInfoForm from "./AddressInformation";
import AccountInfoForm from "./AccountInformation";

const MultiStepInfoForm: React.FC = () => {
    const [step, setStep] = useState<number>(0);

    const nextStep = () => {
        setStep (step +1);
    };

    const prevStep = () => {
        setStep (step -1);
    };

    // problem on next and previous button
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            {step === 0 && <PersonalInfoForm nextStep={nextStep} />}
            {step === 1 && (<AddressInfoForm nextStep={nextStep} prevStep={prevStep}/>)}
            {step === 2 && <AccountInfoForm prevStep={prevStep}/>}
            
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
