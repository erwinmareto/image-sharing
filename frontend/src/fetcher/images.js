const getAllImages = async () => {
  try {
    const allImages = await fetch("http://localhost:8000/images", {
      method: "GET",
      next: { revalidate: 10 },
    });
    return allImages.json();
  } catch (error) {
    throw Error(error);
  }
};

const getImagesByCategory = async (category) => {
  try {
    const images = await fetch(
      `http://localhost:8000/images/category/${category}`,
      {
        method: "GET",
        next: { revalidate: 1000 },
      }
    );
    return images.json();
  } catch (error) {
    throw Error(error);
  }
};

const getImagesById = async (id) => {
  try {
    const images = await fetch(`http://localhost:8000/images/${id}`, {
      method: "GET",
    });
    return images.json();
  } catch (error) {
    throw Error(error);
  }
};

const getImagesByIdWithDetails = async (id) => {
  try {
    const images = await fetch(`http://localhost:8000/images/details/${id}`, {
      method: "GET",
    });
    return images.json();
  } catch (error) {
    throw Error(error);
  }
};

const getUserWithImages = async (username) => {
  try {
    const images = await fetch(`http://localhost:8000/users/images/${username}`, {
      method: "GET",
    });
    return images.json();
  } catch (error) {
    throw Error(error);
  }
};

const addImage = async (payload) => {
  try {
    const images = await fetch(`http://localhost:8000/images`, {
      method: "POST",
      body: payload,
    });
    return images.json();
  } catch (error) {
    throw Error(error);
  }
};

const editImage = async (payload, id) => {
  try {
    const images = await fetch(`http://localhost:8000/images/${id}`, {
      method: "PUT",
      body: payload,
    });
    return images.json();
  } catch (error) {
    throw Error(error);
  }
};

const deleteImage = async (id) => {
  try {
    const image = await fetch(`http://localhost:8000/images/${id}`, {
      method: 'DELETE'
    })
    return image.json()
  } catch (error) {
    throw Error(error)
  }
}

export {
  getAllImages,
  getImagesByCategory,
  getImagesByIdWithDetails,
  getUserWithImages,
  getImagesById,
  addImage,
  editImage,
  deleteImage
};
