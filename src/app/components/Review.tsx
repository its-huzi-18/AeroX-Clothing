"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { firestore } from "@/lib/firebaseConfig";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Define the type for a review
interface Review {
  id: string;
  text: string;
  rating: number;
  image: string | null;
  name: string;
  avatar: string;
}

const Review = () => {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewText, setReviewText] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [reviewImage, setReviewImage] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load reviews from Firestore on mount
  useEffect(() => {
    const reviewsRef = collection(firestore, "reviews");
    const unsubscribe = onSnapshot(reviewsRef, (snapshot) => {
      const reviewsArray: Review[] = [];
      snapshot.forEach((doc) => {
        reviewsArray.push({ id: doc.id, ...doc.data() } as Review);
      });
      setReviews(reviewsArray);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleSubmit = async () => {
    console.log("Submit button clicked"); // Debugging log
  
    if (!isSignedIn) {
      console.log("User not signed in, opening sign-in modal"); // Debugging log
      openSignIn();
      return;
    }
  
    if (reviewText.trim() === "" || rating === 0) {
      console.error("Review text and rating are required."); // Debugging log
      return;
    }
  
    const reviewData: Omit<Review, "id"> = {
      text: reviewText,
      rating,
      image: reviewImage,
      name: user?.fullName || "Anonymous",
      avatar: user?.imageUrl || "/default-avatar.png",
    };
  
    console.log("Review data to be saved:", reviewData); // Debugging log
  
    try {
      if (editingId) {
        console.log("Updating review with ID:", editingId); // Debugging log
        const reviewRef = doc(firestore, "reviews", editingId);
        await updateDoc(reviewRef, reviewData);
        console.log("Review updated successfully!"); // Debugging log
        setEditingId(null);
      } else {
        console.log("Adding new review"); // Debugging log
        await addDoc(collection(firestore, "reviews"), reviewData);
        console.log("Review added successfully!"); // Debugging log
      }
  
      // Clear the form
      setReviewText("");
      setRating(0);
      setReviewImage(null);
    } catch (error) {
      console.error("Error saving review:", error); // Debugging log
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const reviewRef = doc(firestore, "reviews", id);
      await deleteDoc(reviewRef);
      console.log("Review deleted successfully!");
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleEdit = (id: string, text: string, rating: number, image: string | null) => {
    setReviewText(text);
    setRating(rating);
    setReviewImage(image);
    setEditingId(id);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      {/* Review Input & Submit Button */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={isSignedIn ? user?.imageUrl || "/Images/default-avatar.png" : "/Images/default-avatar.png"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Write a review..."
          />
        </div>

        {/* Star Rating */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.span
              key={star}
              whileHover={{ scale: 1.2 }}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* Upload Image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {reviewImage && <Image src={reviewImage} alt="Uploaded Review" width={100} height={100} className="rounded-lg" />}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {editingId ? "Update" : "Submit"}
        </motion.button>
      </div>

      <ul>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map(({ id, text, rating, image, name, avatar }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 p-3 bg-gray-100 rounded-lg mb-2 shadow-sm"
            >
              <Image width={32} height={32} src={avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
              <div className="flex-1">
                <p className="font-semibold">{name}</p>
                <p>{text}</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-lg ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                {image && <Image src={image} alt="Review Image" width={80} height={80} className="rounded-lg mt-2" />}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(id, text, rating, image)}
                  className="text-yellow-500 hover:text-yellow-600 transition"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  🗑️
                </button>
              </div>
            </motion.li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Review;