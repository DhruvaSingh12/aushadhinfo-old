"use client";

import { Doctor } from "@/types";
import React, { useReducer, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  address: string;
  comments: string;
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
}

const initialFormState: FormData = {
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
  department: "",
  doctor: "",
  date: "",
  address: "",
  comments: "",
};

type ActionType =
  | { type: "SET_FIELD"; fieldName: keyof FormData; value: string }
  | { type: "RESET_FORM" };

const formReducer = (state: FormData, action: ActionType): FormData => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.fieldName]: action.value };
    case "RESET_FORM":
      return initialFormState;
    default:
      return state;
  }
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", fieldName: name as keyof FormData, value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch({ type: "RESET_FORM" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[70vh] overflow-y-auto relative">
        <button
          type="button"
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              name="secondName"
              placeholder="Last Name"
              value={formData.secondName}
              onChange={handleChange}
              className="border p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2"
            />
          </div>

          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <textarea
            name="comments"
            placeholder="Your Comments"
            value={formData.comments}
            onChange={handleChange}
            className="border p-2 w-full"
          />

          <button
            type="submit"
            className="bg-red-500 text-white font-semibold py-2 px-4 mt-4"
          >
            Request an Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
