const addComment = async (payload) => {
    try {
        const images = await fetch(`http://localhost:8000/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        return images.json();
      } catch (error) {
        throw Error(error);
      }
}

export {addComment}