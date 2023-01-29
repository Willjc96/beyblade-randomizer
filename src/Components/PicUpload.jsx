import { Upload } from 'antd';
import { useState } from 'react';

const PicUpload = ({ handlePartImageChange }) => {
  const [imageUrl, setImageUrl] = useState();
  const handleChange = e => {
    const file = e.file.originFileObj;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
    handlePartImageChange(imageUrl);
  };

  const uploadButton = (
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
export default PicUpload;