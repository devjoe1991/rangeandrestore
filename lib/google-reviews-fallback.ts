/**
 * Curated fallback for the Google reviews carousel.
 *
 * The live Google Places call in `app/api/reviews/route.ts` is the source of
 * truth and always wins. This list is only served when that call returns
 * nothing — today that is because billing is disabled on the Google Cloud
 * project, so Google answers every request with REQUEST_DENIED.
 *
 * RULES
 *  - Every entry must be a REAL review copied verbatim from the Google
 *    Business Profile. Never write, paraphrase or embellish one: the section
 *    is headed "Based on verified reviews on Google", so inventing text here
 *    would be a false claim about real customers.
 *  - Copy the reviewer's name and the review body only. Leave out Carlos's
 *    replies.
 *  - `relative_time_description` mirrors Google's own wording ("a week ago",
 *    "3 months ago"). The cards no longer display it, so it will drift
 *    harmlessly; it is kept because the live Google response carries it and
 *    the ordering below relies on it.
 *  - Keep it to roughly 5-8 of the strongest reviews. The carousel scrolls,
 *    but nobody swipes through thirty.
 *
 * Empty array = the carousel renders nothing, exactly as it does today.
 */
export type FallbackReview = {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
}

/* Copied from the Google Business Profile, newest first, to mirror the live
   call's `reviews_sort=newest`. Where Google's UI had collapsed a review
   behind "…More", the text is cut back to the last complete sentence rather
   than left hanging mid-phrase — trimmed, never rewritten.
   Time descriptions are a snapshot taken 10 August 2026. */
export const FALLBACK_REVIEWS: FallbackReview[] = [
  {
    author_name: 'Lenka C',
    rating: 5,
    text: 'Huge congratulations on your well-deserved award for New Sports Massage Clinic of the Year!',
    relative_time_description: '3 weeks ago',
  },
  {
    author_name: 'R R',
    rating: 5,
    text: "Had a great session with Carlos. He was thorough in his assessment and listened to my concerns and explained some follow up exercises to do after my treatment. The sports massage was one of the best I've had. Will definitely be making more visits to sort my aches and pains from the gym.",
    relative_time_description: 'a month ago',
  },
  {
    author_name: 'Roshni Shah',
    rating: 5,
    text: 'I have been seeing Carlos for a few months now and am really happy with the service. He is super nice and friendly, and listens to what your needs are. My body always feels good after a session :)',
    relative_time_description: '2 months ago',
  },
  {
    author_name: 'Lorna Stancer',
    rating: 5,
    text: 'I just had my first Sports & Deep Tissue Massage today with Carlos and it was excellent.',
    relative_time_description: '2 months ago',
  },
  {
    author_name: 'Esther Lang',
    rating: 5,
    text: 'Had my first session with Carlos to relieve some tension in my neck, shoulders and arms. Amazing sports massage - Carlos really listened to my areas of concern, spent time working through them, and provided at home techniques to help improve posture and stretching. Highly recommend and will be going back!',
    relative_time_description: '3 months ago',
  },
  {
    author_name: "Nuala O'Leary",
    rating: 5,
    text: "I've had a couple of sessions with Carlos to date and have been really impressed.",
    relative_time_description: '4 months ago',
  },
  {
    author_name: 'Houmam Kafa',
    rating: 5,
    text: 'Carlos is a very skilled and professional practitioner. I had an excellent experience with this sports massage and restoration professional.',
    relative_time_description: '5 months ago',
  },
  {
    author_name: 'Arturo SM',
    rating: 5,
    text: 'Had a great session here. Carlos is v knowledgeable and took time to understand what I needed before starting. He adjusted pressure and technique throughout, which made a real difference. Relaxed atmosphere and good value for money. Highly recommend.',
    relative_time_description: '6 months ago',
  },
]
