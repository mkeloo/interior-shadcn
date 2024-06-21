import React from 'react';

const page = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/image/bedroom.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery2.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/image/swiper1.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery11.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/living.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/image/gallery14.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery15.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery12.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/image/gallery7.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery11.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src="/image/gallery3.jpg"
            alt="bedroom image"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};
export default page;
