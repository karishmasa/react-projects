import React from "react";

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Heading */}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600">
              2,157 people have said how good Rareblocks
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
              Our happy clients say about us
            </h2>
          </div>

          {/* Button */}
          <div className="mt-8 text-center md:mt-16">
            <a
              href="#"
              className="pb-2 text-base font-bold text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 hover:text-gray-600"
            >
              Check all 2,157 reviews
            </a>
          </div>

          {/* Gradient Background */}
          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            {/* Cards */}
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              
              {/* Card 1 */}
              <div className="flex flex-col overflow-hidden shadow-xl bg-white p-6 lg:p-8">
                <p className="text-lg text-gray-900">
                  “You made it so simple. My new site is so much faster and easier
                  to work with than my old site.”
                </p>

                <div className="flex items-center mt-8">
                  <img
                    className="object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                    alt="user"
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">
                      Leslie Alexander
                    </p>
                    <p className="text-sm text-gray-600">
                      Freelance React Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col overflow-hidden shadow-xl bg-white p-6 lg:p-8">
                <p className="text-lg text-gray-900">
                  “Simply the best. Better than all the rest. I’d recommend this
                  product to beginners.”
                </p>

                <div className="flex items-center mt-8">
                  <img
                    className="object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                    alt="user"
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">
                      Jacob Jones
                    </p>
                    <p className="text-sm text-gray-600">
                      Digital Marketer
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col overflow-hidden shadow-xl bg-white p-6 lg:p-8">
                <p className="text-lg text-gray-900">
                  “I cannot believe that I have got a brand new landing page.
                  It was super easy to edit and publish.”
                </p>

                <div className="flex items-center mt-8">
                  <img
                    className="object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                    alt="user"
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">
                      Jenny Wilson
                    </p>
                    <p className="text-sm text-gray-600">
                      Graphic Designer
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;