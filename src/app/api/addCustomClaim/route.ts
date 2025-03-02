// app/api/addCustomClaim/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);
    console.log("Service Account Key:", serviceAccount); // Debugging line

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("Firebase Admin SDK initialized successfully!"); // Debugging line
  } catch (error) {
    console.error("Error initializing Firebase Admin SDK:", error);
  }
}

export async function POST(request: Request) {
  try {
    const { clerkUserId } = await request.json();

    if (!clerkUserId) {
      return NextResponse.json(
        { message: "clerkUserId is required" },
        { status: 400 }
      );
    }

    // Step 1: Create a Firebase user with the same ID as the Clerk user
    let firebaseUser;
    try {
      firebaseUser = await admin.auth().getUser(clerkUserId);
      console.log("Firebase user found:", firebaseUser); // Debugging line
    } catch (error) {
      // If the user doesn't exist, create it
      firebaseUser = await admin.auth().createUser({
        uid: clerkUserId, // Use Clerk user ID as Firebase UID
      });
      console.log("Firebase user created:", firebaseUser); // Debugging line
    }

    // Step 2: Add custom claims
    await admin.auth().setCustomUserClaims(firebaseUser.uid, { clerkUserId });
    console.log("Custom claim added successfully!"); // Debugging line

    return NextResponse.json(
      { message: "Custom claim added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding custom claim:", error);
    return NextResponse.json(
      { message: "Failed to add custom claim" },
      { status: 500 }
    );
  }
}