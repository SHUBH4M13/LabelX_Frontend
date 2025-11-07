import React from 'react'
import Select from 'react-select'

export default function DiseaseSelection({ value = [], onChange }) {

  const DiseaseOptions = [
    { value: "Heart Problems", label: "Heart Problems" },
    { value: "Kidney Problems", label: "Kidney Problems" },
    { value: "Diabetes", label: "Diabetes" },
    { value: "Liver Issues", label: "Liver Issues" },
  ];

  // Convert array of strings (["Heart Problems"]) into object form for react-select
  const selectedValues = value
    .map(v => DiseaseOptions.find(opt => opt.value === v))
    .filter(Boolean);

  // Handle selection change
  const handleSelect = (selectedOptions) => {
    const selected = selectedOptions ? selectedOptions.map(opt => opt.value) : [];
    onChange(selected); // Pass string array back to parent
  };

  return (
    <Select
      name="disease"
      isMulti
      options={DiseaseOptions}
      value={selectedValues}
      onChange={handleSelect}
      className="text-sm"
      placeholder="Select diseases..."
    />
  );
}
