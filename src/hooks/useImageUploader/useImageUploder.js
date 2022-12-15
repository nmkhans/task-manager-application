import { useUploadImageMutation } from "../../redux/api/apiSlice";

const useImageUploder = () => {
    const [uploadImage] = useUploadImageMutation()
    const imageUpload = async (img) => {
        const formData = new FormData();
        formData.append("image", img);
        const imageData = await uploadImage(formData)
        const imageUrl = imageData.data.url;

        return imageUrl
    }

    return { imageUpload }
}

export default useImageUploder;