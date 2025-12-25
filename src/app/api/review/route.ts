import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Review from '@/models/Review';
import { nanoid } from 'nanoid';

// Generate unique resource link
function generateResourceLink(): string {
  const uniqueId = nanoid(12);
  return `review-${uniqueId}`;
}

// POST - Submit a new review
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      clientName,
      clientEmail,
      projectName,
      projectUrl,
      rating,
      reviewTitle,
      reviewText,
      wouldRecommend,
      serviceType,
      isPublic,
    } = body;

    // Validate required fields
    if (!clientName || !clientEmail || !projectName || !rating || !reviewTitle || !reviewText || !serviceType) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Generate unique resource link
    const resourceLink = generateResourceLink();

    // Create the review
    const review = await Review.create({
      clientName,
      clientEmail,
      projectName,
      projectUrl: projectUrl || '',
      rating,
      reviewTitle,
      reviewText,
      wouldRecommend: wouldRecommend ?? true,
      serviceType,
      resourceLink,
      isPublic: isPublic ?? true,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully!',
        resourceLink: resourceLink,
        reviewId: review._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Review submission error:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: messages.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit review. Please try again.' },
      { status: 500 }
    );
  }
}

// GET - Fetch reviews (public ones or by resource link)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const resourceLink = searchParams.get('resourceLink');
    const publicOnly = searchParams.get('public') === 'true';

    if (resourceLink) {
      // Fetch single review by resource link
      const review = await Review.findOne({ resourceLink }).select('-clientEmail');
      
      if (!review) {
        return NextResponse.json(
          { error: 'Review not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ review }, { status: 200 });
    }

    // Fetch all public reviews
    const query = publicOnly ? { isPublic: true } : {};
    const reviews = await Review.find(query)
      .select('-clientEmail')
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
