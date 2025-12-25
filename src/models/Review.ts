import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  clientName: string;
  clientEmail: string;
  projectName: string;
  projectUrl?: string;
  rating: number;
  reviewTitle: string;
  reviewText: string;
  wouldRecommend: boolean;
  serviceType: string;
  resourceLink: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    clientName: {
      type: String,
      required: [true, 'Client name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    clientEmail: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    projectName: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
      maxlength: [200, 'Project name cannot exceed 200 characters'],
    },
    projectUrl: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    reviewTitle: {
      type: String,
      required: [true, 'Review title is required'],
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
    },
    reviewText: {
      type: String,
      required: [true, 'Review text is required'],
      trim: true,
      maxlength: [2000, 'Review cannot exceed 2000 characters'],
    },
    wouldRecommend: {
      type: Boolean,
      default: true,
    },
    serviceType: {
      type: String,
      required: [true, 'Service type is required'],
      enum: ['website', 'web-app', 'mobile-app', 'ecommerce', 'custom', 'other'],
    },
    resourceLink: {
      type: String,
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for faster queries
ReviewSchema.index({ clientEmail: 1 });
ReviewSchema.index({ resourceLink: 1 });
ReviewSchema.index({ rating: -1 });
ReviewSchema.index({ createdAt: -1 });

// Prevent model recompilation in development
const Review = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
