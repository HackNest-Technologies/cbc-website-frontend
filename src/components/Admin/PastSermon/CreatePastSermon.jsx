// import { useState } from "react";
// import uploadICon from "../../../assets/images/upload.png";
// import SubmitBtn from "../../shared/SubmitBtn";
// import { useUploadPastSermonMutation } from "../../../redux/apiSlice";
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import publish from "../../../assets/images/publish.png";

// const CreatePastSermon = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [fileName, setFileName] = useState("");
//   const [sendTestimony] = useUploadPastSermonMutation();
//   const initialState = {
//     testifier_first_name: "",
//     testifier_last_name: "",
//     testifier_email_address: "",
//     body: "",
//     file: "",
//   };

//   const [testimonyVal, setTestimony] = useState(initialState);
//   const handleTestimonyValue = (e) => {
//     const { name, value } = e.target;
//     setTestimony((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       setFileName(file.name);
//       setTestimony((prev) => ({ ...prev, file }));
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFileName(file.name);
//       setTestimony((prev) => ({ ...prev, file }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append(
//       "testimony[testifier_first_name]",
//       testimonyVal.testifier_first_name
//     );
//     formData.append(
//       "testimony[testifier_last_name]",
//       testimonyVal.testifier_last_name
//     );
//     formData.append("testimony[body]", testimonyVal.body);
//     formData.append("testimony[featured]", false);
//     if (testimonyVal.file) {
//       formData.append("testimony[file]", testimonyVal.file);
//     }

//     try {
//       const res = await sendTestimony(formData).unwrap();
//       setTestimony(initialState);
//       setFileName("");
//       alert("Testimony submitted successfully!");
//     } catch (error) {
//       alert("Something went wrong while sending your testimony.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <section>
//         <div className="pb-7 w-[40px]">
//           <Link to="/admin-pastsermon">
//             <FaArrowLeft className="text-xl" />
//           </Link>
//         </div>
//         <div className="flex justify-between border-b border-[#C3C3C3] pb-4">
//           <div>
//             <h2 className="text-2xl font-inter font-semibold pb-1">
//               Enter your Past sermon
//             </h2>
//             <small className="text-sm font-inter text-[#B0B0B0] ">
//               Fill in the details of the Past Sermon you want to create
//             </small>
//           </div>
//           <div className="buttons flex gap-[20px] items-center">
//             <button
//               type="submit"
//               className="flex font-inter font-semibold text-sm text-white rounded-[8px] py-[10px] px-[18px] gap-[8px] bg-[#FD9F2B] items-center w-[108px] h-[44px]"
//             >
//               <img src={publish} className="w-[14px] h-[14px]" />
//               Submit
//             </button>
//           </div>
//         </div>
//       </section>
//       <div className="py-4 w-full">
//         <label
//           htmlFor="name"
//           className="text-base  uppercase leading-[19px] text-[#000] font-inter"
//         >
//           First Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
//           required
//           value={testimonyVal.testifier_first_name}
//           onChange={handleTestimonyValue}
//           name="testifier_first_name"
//         />
//       </div>
//       <div className="py-4 w-full">
//         <label
//           htmlFor="last_name"
//           className="text-base  uppercase leading-[19px] text-[#000] font-inter"
//         >
//           Last Name
//         </label>
//         <input
//           id="last_naame"
//           type="text"
//           className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
//           required
//           value={testimonyVal.testifier_last_name}
//           onChange={handleTestimonyValue}
//           name="testifier_last_name"
//         />
//       </div>

//       <div className="py-4 w-full">
//         <label
//           htmlFor="mail"
//           className="text-base  uppercase leading-[19px] text-[#000] font-inter"
//         >
//           Email
//         </label>
//         <input
//           id="mail"
//           type="email"
//           className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
//           required
//           value={testimonyVal.testifier_email_address}
//           onChange={handleTestimonyValue}
//           name="testifier_email_address"
//         />
//       </div>

//       <div className="bg-transparent py-4 w-full">
//         <label
//           htmlFor="body"
//           className="text-base uppercase leading-[19px] text-[#000] font-inter"
//         >
//           Testimony
//         </label>
//         <textarea
//           id="body"
//           className="w-full h-[192px]  border border-black my-4 text-black outline-none py-[16px] px-[32px] rounded-[20px] font-inter text-base resize-none md:rounded-[30px] md:h-[268px]"
//           required
//           value={testimonyVal.body}
//           onChange={handleTestimonyValue}
//           name="body"
//         />
//       </div>

//       <div className="">
//         <h2 className="text-base uppercase mb-4 text-[#000] font-inter">
//           Upload your picture
//         </h2>

//         <div
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//           className={`border-3 border-dashed rounded-lg p-[24px] w-full h-[186px] flex flex-col items-center justify-center transition-all
//           ${isDragging ? "border-[#FC8E33]" : "border-[#FC9032]"}`}
//         >
//           <img
//             src={uploadICon}
//             alt="Upload icon"
//             className="w-[42px] h-[42px] object-cover"
//           />
//           {fileName ? (
//             <p className="text-[#0B0B0B] text-sm">{fileName}</p>
//           ) : (
//             <>
//               <p className="text-[#0B0B0B] text-sm mb-1">
//                 Drag here to start uploading
//               </p>
//               <div className="flex items-center w-full px-4">
//                 <div className="flex-1 border-t border-gray-400"></div>
//                 <span className="mx-2 text-[#6D6D6D] text-xs">OR</span>
//                 <div className="flex-1 border-t border-gray-400"></div>
//               </div>
//               <label className="mt-2">
//                 <span className="text-xs text-[#FC9032] font-inter font-semibold bg-transparent border-1 border-[#FC9032] rounded-[8px]  px-[12px] py-[6px] cursor-pointer">
//                   Browse files
//                 </span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />
//               </label>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="py-4 md:py-10">
//         <SubmitBtn text="Submit" className="w-[100%] h-[58px]" />
//       </div>
//     </form>
//   );
// };

// export default CreatePastSermon;



import { useState } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import { useUploadPastSermonMutation } from "../../../redux/apiSlice";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const CreatePastSermon = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [uploadPastSermon] = useUploadPastSermonMutation();
  
  // Initial state based on API structure
  const initialState = {
    series_title: "",
    minister: "",
    date: "",
    video_url: "",
  };

  const [pastSermonData, setPastSermonData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPastSermonData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setCoverImage(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setCoverImage(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data according to API structure
    const formData = new FormData();
    
    // Append cover image if exists
    if (coverImage) {
      formData.append("past_sermon[cover_image]", coverImage);
    }
    
    // Append other fields
    formData.append("past_sermon[series_title]", pastSermonData.series_title);
    formData.append("past_sermon[minister]", pastSermonData.minister);
    formData.append("past_sermon[date]", pastSermonData.date);
    formData.append("past_sermon[video_url]", pastSermonData.video_url);

    try {
      await uploadPastSermon(formData).unwrap();
      
      // Reset form
      setPastSermonData(initialState);
      setCoverImage(null);
      
      alert("Past sermon created successfully!");
      
      // Optionally redirect or show success message
    } catch (error) {
      console.error("Error creating past sermon:", error);
      alert("Something went wrong while creating the past sermon.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link 
            to="/admin-pastsermon" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Past Sermons</span>
          </Link>
        </div>
        
        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Create New Past Sermon
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details of the past sermon you want to create
              </p>
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E88F25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto"
            >
              <img src={publish} alt="Publish" className="w-4 h-4" />
              Create Sermon
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Series Title */}
        <div>
          <label 
            htmlFor="series_title" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Sermon Series Title
          </label>
          <input
            id="series_title"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="Enter sermon series title"
            required
            value={pastSermonData.series_title}
            onChange={handleInputChange}
            name="series_title"
          />
        </div>

        {/* Minister Name */}
        <div>
          <label 
            htmlFor="minister" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Minister / Preacher
          </label>
          <input
            id="minister"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="Enter minister's name"
            required
            value={pastSermonData.minister}
            onChange={handleInputChange}
            name="minister"
          />
        </div>

        {/* Date */}
        <div>
          <label 
            htmlFor="date" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Sermon Date
          </label>
          <input
            id="date"
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            required
            value={pastSermonData.date}
            onChange={handleInputChange}
            name="date"
          />
        </div>

        {/* Video URL */}
        <div>
          <label 
            htmlFor="video_url" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Video URL
          </label>
          <input
            id="video_url"
            type="url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
            required
            value={pastSermonData.video_url}
            onChange={handleInputChange}
            name="video_url"
          />
          <p className="text-xs text-gray-500 mt-2">
            Enter the full URL of the video (YouTube, Vimeo, etc.)
          </p>
        </div>

        {/* Cover Image Upload */}
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wider">
            Upload Cover Image
          </h2>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px]
              ${isDragging 
                ? "border-[#FD9F2B] bg-[#FFF5EB]" 
                : coverImage 
                  ? "border-green-500 bg-green-50" 
                  : "border-gray-300 hover:border-[#FD9F2B] hover:bg-gray-50"
              }`}
          >
            <img
              src={uploadIcon}
              alt="Upload icon"
              className="w-12 h-12 mb-4 opacity-80"
            />
            
            {coverImage ? (
              <div className="text-center">
                <p className="text-green-600 font-medium mb-2">
                  ✓ {coverImage.name}
                </p>
                <p className="text-sm text-gray-600">
                  Image ready to upload
                </p>
                <button
                  type="button"
                  onClick={() => setCoverImage(null)}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-700 text-center mb-2">
                  Drag & drop your cover image here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or
                </p>
                <label className="cursor-pointer">
                  <span className="inline-flex items-center px-4 py-2 border border-[#FD9F2B] text-[#FD9F2B] font-medium rounded-lg hover:bg-[#FFF5EB] transition-colors">
                    Browse Files
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-4">
                  Recommended: 16:9 aspect ratio, max 5MB
                </p>
              </>
            )}
          </div>

          {/* Image Preview */}
          {coverImage && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#E88F25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1"
        >
          <img src={publish} alt="Publish" className="w-4 h-4" />
          Create Sermon
        </button>
        
        <Link
          to="/admin-pastsermon"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreatePastSermon;