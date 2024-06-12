import React from "react";
import blogImg from "../images/blog1.jpg";

function Blog() {
  return (
    <div className="bg-white">
      <div>
        <div className="bg-black text-center text-white  ">
          <h1 className="text-3xl py-2 font-bold">Blog</h1>
        </div>
        <div className="w-[80%] mx-auto ">
          <div className="w-full flex flex-col items-center ">
            <div className="pt-3">
              <img src={blogImg} alt="blog" className="h-[400px] " />
            </div>
            <div className="flex flex-col gap-10 text-xl py-10">
              <p>
                As VAHAN and our various businesses grow, I sometimes get asked
                how they connect with each other. So I want to share our vision
                of the future of mobility, which we call New Mobility, and how
                we’re building it.
              </p>
              <p>
                {" "}
                Through the ages, human progress has been closely tied to
                advancements in mobility. The wheel, the steam engine, internal
                combustion and jet engines, cars, planes are all mobility
                inventions that transformed our lives and made movement safer,
                faster, efficient, convenient and accessible to more and more
                people.
              </p>
              <p>
                The IC engine, automobiles and the related ecosystem is a
                remnant of the past and assumes unsustainably high ownership of
                vehicles manufactured by OEMs and sold through dealers.
                Consumers have been downgraded to being just a cog in this giant
                wheel. This is best indicated by Henry Ford’s – ‘You can have
                whatever colour you want, as long as it’s black’. Try saying
                that to an ecommerce customer today!
              </p>
              <p>
                {" "}
                VAHAN is building this New Mobility ecosystem with the consumer
                at the core. The 3 pillars of this new ecosystem are: New
                Mobility Services, New Energy Vehicles and New Auto Retail.
                These three pillars amplify and enhance the impact of each other
                as part of an integrated VAHAN New Mobility Platform.
              </p>
              <h1 className="font-bold">New Mobility Service</h1>
              <p>
                Today VAHAN provides multi-modal mobility access to people
                through Taxis, auto rickshaws, outstation rides etc. But this is
                just 7% of India’s population.
              </p>
              <p>
                As you use our service more frequently, we will create your
                unique mobility persona in our cloud and will personalise your
                experience across shared and personal vehicles. This will also
                enable new usage models like vehicle subscriptions.
              </p>
              <p>
                We already see strong adoption of our multi-modal platform
                across VAHAN’s Mumbai city. As we expand to 21 towns and bring
                shared mobility to 500mn people, the multi-modal offerings will
                grow substantially and will be central to driving affordability
                and access for these peoples
              </p>
              <h1 className="font-bold">New Energy Vehicles</h1>
              <p>
                {" "}
                40% of air pollution in India is due to vehicles. This is when
                just 15% of India owns a vehicle today! This number will grow
                exponentially as we provide more affordable options for shared
                and personal mobility. So we will do this through EVs to ensure
                us and our planet can breathe free!
              </p>
              <p>
                We have already moved forward here with our Futurefactory, the
                largest 2W factory in the world building the first in our range
                of scooters – the Ola S1, the best scooter ever made. In the
                coming quarters we will expand our EV range with more scooters,
                bikes and cars.
              </p>
              <h1 className="font-bold">New Auto Retail</h1>
              <p>
                {" "}
                Not just the vehicles but the 100+ year old model of dealership
                based sales and service, standard financing and insurance and
                unorganised used vehicle sale/purchase is also out of date and
                needs to change.
              </p>
              <p>
                VAHAN has a unique and significant advantage here being the only
                mobility company in the world that does the hardware (EVs),
                software and service (shared mobility services and auto retail)
                entirely inhouse plus has the deepest understanding of urban
                mobility needs of consumers. We will lead the development of new
                technologies and build this future of new mobility to bring a
                billion people more choice, convenience and affordable mission.
                This is our mission – mobility for a billion, sustainability for
                the future!
              </p>
              <p>Let’s move!</p>
              <p>Abhilash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
