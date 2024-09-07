"use client";

import { useState } from "react";

interface FormData {
  gender: string;
  age: string;
  weight: string;
  height: string;
  bloodGroup: string;
  medications: string;
  dosage: string;
  medicationPurpose: string;
  frequency: string;
  followPrescription: string;
  symptoms: string[];
  symptomFrequency: string;
  symptomIntensity: string;
  happiness: string;
  mood: string;
  stressLevel: string;
  sleepQuality: string;
}

const HealthForm = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    age: "",
    weight: "",
    height: "",
    bloodGroup: "",
    medications: "",
    dosage: "",
    medicationPurpose: "",
    frequency: "",
    followPrescription: "",
    symptoms: [],
    symptomFrequency: "",
    symptomIntensity: "",
    happiness: "",
    mood: "",
    stressLevel: "",
    sleepQuality: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMultiSelect = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      symptoms: prevState.symptoms.includes(value)
        ? prevState.symptoms.filter((item) => item !== value)
        : [...prevState.symptoms, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black">
      <div className="w-full max-w-5xl p-10 rounded-lg shadow-lg bg-gray-100">
        {/* Form Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-500">
          Health Details Form
        </h1>
        <p className="text-center text-blue-500 mb-10">
          Provide your health details to complete your profile.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Gender Selector */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Specify your gender
            </label>
            <div className="flex items-center space-x-4">
              {["Male", "Female", "Other"].map((gender) => (
                <div
                  key={gender}
                  className={`px-4 py-2 rounded-md cursor-pointer ${
                    formData.gender === gender
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-200 text-blue-500"
                  }`}
                  onClick={() => handleChange({ target: { name: "gender", value: gender } })}
                >
                  {gender}
                </div>
              ))}
            </div>
          </div>

          {/* Two-Column Input Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter weight"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter height"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                What is your age?
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter age"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Your blood group
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select blood group</option>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Medication Information */}
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Which medicines are you taking?
              </label>
              <input
                type="text"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Paracetamol, Aspirin, etc."
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                What is the dosage?
              </label>
              <input
                type="text"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ex: 500mg, 1 tablet"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                What is the purpose of this medication?
              </label>
              <textarea
                name="medicationPurpose"
                value={formData.medicationPurpose}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-blue-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="For headache, fever, pain relief"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                How often do you take it?
              </label>
              <div className="grid grid-cols-4 gap-2">
                {["Daily", "Weekly", "Monthly", "Rarely"].map((freq) => (
                  <div
                    key={freq}
                    className={`px-4 py-2 rounded-md cursor-pointer ${
                      formData.frequency === freq
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-200 text-blue-500"
                    }`}
                    onClick={() =>
                      handleChange({ target: { name: "frequency", value: freq } })
                    }
                  >
                    {freq}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                How often do you follow the prescription?
              </label>
              <div className="grid grid-cols-5 gap-2">
                {["Always", "Often", "Sometimes", "Never", "Rarely"].map((follow) => (
                  <div
                    key={follow}
                    className={`px-4 py-2 rounded-md cursor-pointer ${
                      formData.followPrescription === follow
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-200 text-blue-500"
                    }`}
                    onClick={() =>
                      handleChange({ target: { name: "followPrescription", value: follow } })
                    }
                  >
                    {follow}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Symptom Information with Box Selection */}
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Select your symptoms (if any)
              </label>
              <div className="grid grid-cols-3 gap-4">
                {["Headache", "Fever", "Nausea", "Fatigue", "Cough", "Dizziness"].map(
                  (symptom) => (
                    <label
                      key={symptom}
                      className={`block px-4 py-2 rounded-md cursor-pointer ${
                        formData.symptoms.includes(symptom)
                          ? "bg-blue-500 text-white shadow-lg"
                          : "bg-gray-200 text-blue-500"
                      }`}
                      onClick={() => handleMultiSelect(symptom)}
                    >
                      {symptom}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Symptom Frequency */}
            {formData.symptoms.length > 0 && (
              <>
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    How often do you experience these symptoms?
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Daily", "Weekly", "Monthly", "Rarely"].map((freq) => (
                      <div
                        key={freq}
                        className={`px-4 py-2 rounded-md cursor-pointer ${
                          formData.symptomFrequency === freq
                            ? "bg-blue-500 text-white shadow-lg"
                            : "bg-gray-200 text-blue-500"
                        }`}
                        onClick={() =>
                          handleChange({ target: { name: "symptomFrequency", value: freq } })
                        }
                      >
                        {freq}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    How intense are these symptoms?
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Mild", "Moderate", "Severe"].map((intensity) => (
                      <div
                        key={intensity}
                        className={`px-4 py-2 rounded-md cursor-pointer ${
                          formData.symptomIntensity === intensity
                            ? "bg-blue-500 text-white shadow-lg"
                            : "bg-gray-200 text-blue-500"
                        }`}
                        onClick={() =>
                          handleChange({ target: { name: "symptomIntensity", value: intensity } })
                        }
                      >
                        {intensity}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Mood and Well-being */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                How would you rate your happiness?
              </label>
              <div className="grid grid-cols-5 gap-2">
  {["Very Happy", "Happy", "Neutral", "Unhappy", "Very Unhappy"].map(
    (level) => (
      <div
        key={level}
        className={`px-4 py-2 rounded-md cursor-pointer ${
          formData.happiness === level
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-blue-500"
        }`}
        onClick={() =>
          handleChange({ target: { name: "happiness", value: level } })
        }
      >
        {level}
      </div>
    )
  )}
</div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                How would you describe your mood today?
              </label>
              <div className="grid grid-cols-4 gap-2">
  {["Calm", "Stressed", "Irritable", "Excited"].map((mood) => (
    <div
      key={mood}
      className={`px-4 py-2 rounded-md cursor-pointer ${
        formData.mood === mood
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-blue-500"
      }`}
      onClick={() => handleChange({ target: { name: "mood", value: mood } })}
    >
      {mood}
    </div>
  ))}
</div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                How would you rate your stress level?
              </label>
              <div className="grid grid-cols-3 gap-2">
  {["Low", "Moderate", "High"].map((level) => (
    <div
      key={level}
      className={`px-4 py-2 rounded-md cursor-pointer ${
        formData.stressLevel === level
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-blue-500"
      }`}
      onClick={() =>
        handleChange({ target: { name: "stressLevel", value: level } })
      }
    >
      {level}
    </div>
  ))}
</div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                How would you rate your sleep quality?
              </label>
              <div className="grid grid-cols-4 gap-2">
  {["Poor", "Fair", "Good", "Excellent"].map((quality) => (
    <div
      key={quality}
      className={`px-4 py-2 rounded-md cursor-pointer ${
        formData.sleepQuality === quality
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-blue-500"
      }`}
      onClick={() =>
        handleChange({ target: { name: "sleepQuality", value: quality } })
      }
    >
      {quality}
    </div>
  ))}
</div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-700 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;

