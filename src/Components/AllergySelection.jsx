import React from 'react';
import Select from 'react-select';

export default function AllergySelection({ value = [], onChange }) {

  const AllergiesOption = [
    { value: "Peanuts", label: "Peanuts" },
    { value: "Nuts", label: "Nuts" },
    { value: "Soy", label: "Soy" },
    { value: "Lactose", label: "Lactose" },
    { value: "Eggs", label: "Eggs" },
    { value: "Tree Nuts", label: "Tree Nuts" },
  ];

  // Convert array of strings (["Peanuts", "Soy"]) to option objects for react-select
  const selectedValues = value.map(v => AllergiesOption.find(opt => opt.value === v)).filter(Boolean);

  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map(opt => opt.value) : [];
    onChange(selectedValues); // send back array of strings to Signup.jsx
  };

  return (
    <Select
      isMulti
      name="allergies"
      options={AllergiesOption}
      value={selectedValues}
      onChange={handleChange}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Select allergies..."
    />
  );
}
