import { CldUploadWidget } from "next-cloudinary";
export default function CloudinaryUpload() {
  return (
    <CldUploadWidget uploadPreset="<Upload Preset>">
      {({ open }) => {
        return (
          <button className="button" onClick={() => open()}>
            Upload
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
