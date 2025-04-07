import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CarCard from "./CarCard.jsx";
import CarForm from "./CarForm.jsx";
import { DEFAULT_CAR_DATA } from "../../data/defaultCarData.js";

const GCard = ({ initialData = null, onSave, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialData || DEFAULT_CAR_DATA);
  const [isCarCard, setIsCarCard] = useState(!!initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialData?.url || "");
  const fileInputRef = useRef(null);

  // Synchronize component state with props when initialData changes
  // This ensures the form displays correct data when a different car is selected
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setIsCarCard(true);
      setImagePreview(initialData.url || "");
    } else {
      setIsCarCard(false);
      setFormData(DEFAULT_CAR_DATA);
      setImagePreview("");
    }
  }, [initialData]);

  // Opens the modal only when in "add new car" mode (not showing a car)
  const handleOpenModal = () => {
    if (!isCarCard) {
      setIsModalOpen(true);
    }
  };

  // Closes the modal and resets form if adding a new car without saving
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (!isCarCard && !isEditing) {
      setFormData(DEFAULT_CAR_DATA);
      setImagePreview("");
    }
  };

  // Updates the form data state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Processes image selection, creates object URL and updates form data
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        imageFile: file,
        url: imageUrl,
      }));
      setImagePreview(imageUrl);
    }
  };

  // Simulates clicking the hidden file input when the image preview area is clicked
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // Processes form submission, validates required fields, and propagates data to parent
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validates that minimum required information is provided
    if (formData.brand && formData.model) {
      setIsCarCard(true);
      setIsEditing(false);

      // Propagate data changes to parent component
      if (onSave) {
        onSave(formData);
      }
    }

    setIsModalOpen(false);
  };

  // Handles car deletion by resetting state and notifying parent component
  const handleDeleteCar = () => {
    setIsCarCard(false);

    // Notify parent component about deletion
    if (onDelete) {
      onDelete();
    }

    // Reset component state to default values
    setFormData(DEFAULT_CAR_DATA);
    setImagePreview("");
  };

  // Activates edit mode and opens the modal with current car data
  const handleEditCar = () => {
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Conditional rendering based on component state:
  // - Shows CarCard when displaying an existing car
  // - Shows add button (+) when in "add new car" mode
  // - Renders modal with CarForm when adding or editing
  return (
    <>
      {isCarCard ? (
        <>
          <CarCard
            {...formData}
            onDelete={handleDeleteCar}
            onEdit={handleEditCar}
          />

          {isModalOpen && (
            <div className="gCardModal">
              <div className="gCardModalContent">
                <div className="modalHeader">
                  <h2>{isEditing ? "Edit Car Details" : "Car Details"}</h2>
                </div>
                <CarForm
                  formData={formData}
                  handleChange={handleChange}
                  handleImageClick={handleImageClick}
                  imagePreview={imagePreview}
                  fileInputRef={fileInputRef}
                  handleImageSelect={handleImageSelect}
                  handleCloseModal={handleCloseModal}
                  handleSubmit={handleSubmit}
                  isEditing={isEditing}
                  setImagePreview={setImagePreview}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="gCard" onClick={handleOpenModal}>
            <FontAwesomeIcon icon={faPlus} />
          </div>

          {isModalOpen && (
            <div className="gCardModal">
              <div className="gCardModalContent">
                <div className="modalHeader">
                  <h2>Car Details</h2>
                </div>
                <CarForm
                  formData={formData}
                  handleChange={handleChange}
                  handleImageClick={handleImageClick}
                  imagePreview={imagePreview}
                  fileInputRef={fileInputRef}
                  handleImageSelect={handleImageSelect}
                  handleCloseModal={handleCloseModal}
                  handleSubmit={handleSubmit}
                  isEditing={isEditing}
                  setImagePreview={setImagePreview}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GCard;
