import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import StepHeaderInformation from "../Components/StepHeaderInformation/StepHeaderInformation";
import StepCoreContent from "../Components/StepCoreContent/stepCoreContent";

const steps = ["a", "b", "c", "d", "e"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedFarmLand, setSelectedFarmLand] = React.useState(0);
  const [droneSelected, setdroneSelected] = React.useState(false);
  const [selectedDroneDetails,setSelectedDroneDetails]=React.useState();
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const [dateRange,setDateRange]=React.useState([])
  const handleDateRange=(range)=>{
    setDateRange(range)
  }
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if(activeStep==2)
    setActiveStep((prevActiveStep) => prevActiveStep + 2);
    else
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      ml={2}
      sx={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep < 5 && (
        <div>
          <StepHeaderInformation step={activeStep} />
          <StepCoreContent
            step={activeStep}
            setSelectedFarmLand={setSelectedFarmLand}
            selectedFarmLand={selectedFarmLand}
            droneSelected={droneSelected}
            setdroneSelected={setdroneSelected}
            handleDateRange={handleDateRange}
            dateRange={dateRange}
            setSelectedDroneDetails={setSelectedDroneDetails}
          />
        </div>
      )}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
