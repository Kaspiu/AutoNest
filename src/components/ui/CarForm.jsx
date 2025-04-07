import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const CarForm = ({
  formData,
  handleChange,
  handleImageClick,
  imagePreview,
  fileInputRef,
  handleImageSelect,
  handleCloseModal,
  handleSubmit,
  isEditing,
  setImagePreview,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="formGroup">
      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        id="brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        placeholder="Enter brand"
        required
      />
    </div>

    <div className="formGroup">
      <label htmlFor="model">Model:</label>
      <input
        type="text"
        id="model"
        name="model"
        value={formData.model}
        onChange={handleChange}
        placeholder="Enter model"
        required
      />
    </div>

    <div className="formGroup">
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Enter year"
      />
    </div>

    <div className="formGroup">
      <label htmlFor="horsepower">Horsepower:</label>
      <input
        type="number"
        id="horsepower"
        name="horsepower"
        value={formData.horsepower}
        onChange={handleChange}
        placeholder="Enter horsepower"
      />
    </div>

    <div className="formGroup">
      <label htmlFor="torque">Torque (Nm):</label>
      <input
        type="number"
        id="torque"
        name="torque"
        value={formData.torque}
        onChange={handleChange}
        placeholder="Enter torque"
      />
    </div>

    <div className="formGroup">
      <label htmlFor="gearbox">Gearbox:</label>
      <select
        id="gearbox"
        name="gearbox"
        value={formData.gearbox}
        onChange={handleChange}
      >
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>
    </div>

    <div className="formGroup">
      <label htmlFor="driveSystem">Drive System:</label>
      <select
        id="driveSystem"
        name="driveSystem"
        value={formData.driveSystem}
        onChange={handleChange}
      >
        <option value="AWD">AWD</option>
        <option value="RWD">RWD</option>
        <option value="FWD">FWD</option>
      </select>
    </div>

    <div className="formGroup">
      <label htmlFor="topSpeed">Top Speed (km/h):</label>
      <input
        type="number"
        id="topSpeed"
        name="topSpeed"
        value={formData.topSpeed}
        onChange={handleChange}
        placeholder="Enter top speed"
      />
    </div>

    <div className="formGroup">
      <label htmlFor="speedMilestone">0-100 km/h (seconds):</label>
      <input
        type="number"
        id="speedMilestone"
        name="speedMilestone"
        value={formData.speedMilestone}
        onChange={handleChange}
        placeholder="Enter 0-100 time"
      />
    </div>

    <div className="formGroup">
      <label>Select car photo:</label>
      <div className="imageUploadArea" onClick={handleImageClick}>
        {imagePreview ? (
          <img src={imagePreview} alt="Car preview" />
        ) : (
          <>
            <FontAwesomeIcon icon={faImage} />
            <p>Click to select an image</p>
          </>
        )}
      </div>
      <input
        type="file"
        id="carImage"
        name="carImage"
        accept="image/*"
        onChange={handleImageSelect}
        ref={fileInputRef}
        style={{ display: "none" }}
      />

      <div className="formGroup">
        <label htmlFor="url">Or paste photo URL:</label>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url || ""}
          onChange={(e) => {
            handleChange(e);
            setImagePreview(e.target.value);
          }}
          placeholder="Paste photo URL"
        />
      </div>
    </div>

    <div className="modalButtons">
      <button type="button" className="cancelBtn" onClick={handleCloseModal}>
        Cancel
      </button>
      <button type="submit" className="saveBtn">
        {isEditing ? "Update" : "Save"}
      </button>
    </div>
  </form>
);

export default CarForm;
