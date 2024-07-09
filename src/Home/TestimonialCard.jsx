/* eslint-disable react/prop-types */
const TestimonialCard = ({ test }) => {
  const { user_feedback, user_image, user_name, status } = test || {};

  return (
    <div className=" bg-secondary-bg hover:shadow-2xl text-neutral-content p-5 rounded-lg border-none auth-icons">
      <div className="rating rating-sm mb-3 rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          className=" bg-primary-bg mask mask-star-2 mask-half-2"
        />
      </div>
      <p className="text-sm text-secondary-text">{user_feedback}</p>
      <div className="flex items-center gap-5 mt-5">
        <div>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={user_image} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-slate-900">{user_name}</h3>
          <h4 className="text-sm text-green-800">{status}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
