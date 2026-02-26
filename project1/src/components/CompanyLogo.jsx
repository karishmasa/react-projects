import React from "react";

const CompanyLogo = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20 xl:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 xl:grid-cols-2">
          
          {/* Left Content */}
          <div className="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
              Customers and brands love using TemplateSee
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis.
            </p>
          </div>

          {/* Right Logos Section */}
          <div className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0">
            
            {/* Gradient Background */}
            <div className="absolute inset-16">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"
                style={{
                  background: `linear-gradient(
                    90deg,
                    #44ff9a -0.55%,
                    #44b0ff 22.86%,
                    #8b44ff 48.36%,
                    #ff6644 73.33%,
                    #ebff70 99.34%
                  )`,
                }}
              />
            </div>

            {/* Logos Grid */}
            <div className="relative space-y-5">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-vertex.svg" />
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-martino.svg" />
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-squarestone.svg" />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-6">
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-waverio.svg" />
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-fireli.svg" />
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-virogan.svg" />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-12">
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-aromix.svg" />
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-natroma.svg" />
                <Logo src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-waverio-2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50" />
    </section>
  );
}

/* Reusable Logo Card (Best Practice) */
const Logo = ({ src }) => {
  return (
    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
      <img className="w-auto h-8" src={src} alt="company logo" />
    </div>
  );
};

export default CompanyLogo;