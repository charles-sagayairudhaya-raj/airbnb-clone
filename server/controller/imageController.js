import download from "image-downloader";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url); //Found url
const __dirname = dirname(__filename); //Directory name find

//***************** PHOTO UPLOAD BY LINK **************/
export const imageUploadByLink = async (req, res, next) => {
  try {
    const { link } = req.body;
    const newName = "photo" + Date.now() + ".jpg";
    const destinationPath = join(__dirname, "..", "uploads", newName);

    const options = {
      url: link,
      dest: destinationPath,
    };

    const response = await download.image(options);

    //add file name
    const fileName = response.filename;

    return res.status(200).json({
      message: "Image uploaded successfully",
      newName,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};

//***************** PHOTO UPLOAD FROM DEVICE **************/
export const uploadPhotoFromDevice = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};
