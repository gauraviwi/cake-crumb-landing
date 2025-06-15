
import { Star, Heart } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely amazing! The chocolate cake was perfectly moist and delicious. Will definitely order again!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment:
        "ARA Bakes made the perfect birthday cake for my daughter. Fresh, beautiful, and tasty!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      comment:
        "The butter cake was incredible! So soft and flavorful. Best homemade cake I've ever had.",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Martinez",
      rating: 5,
      comment:
        "Amazing quality and taste! The date cake was exceptional. Highly recommended!",
      date: "2 months ago",
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, idx) => (
      <span key={idx}>
        {idx < rating ? (
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
        ) : (
          <Star className="h-4 w-4 text-gray-300" />
        )}
      </span>
    ));

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-25 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-gilroy text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read what our happy customers have to say about our delicious homemade cakes.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-rose-100 hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                <Heart className="h-6 w-6 text-rose-300" />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{review.comment}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800 font-gilroy">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
