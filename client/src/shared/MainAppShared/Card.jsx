import React from 'react';
import problem from '../../assets/images/problem.png';
import money from '../../assets/images/money.png';
import project from '../../assets/images/project.png';
import '../../style/main.css';
function Card() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center my-6">
        <div className="text-center">
          <h1 className="uppercase text-lg font-bold text-style">
            About the Application
          </h1>
          <p>(Hover or click on the cards to see more)</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-16">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 mx-9 Card-image">
          <div className="group h-96">
            <div className="relative h-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={money}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-semibold mb-3">
                    Experiences Section
                  </h1>
                  <p className="text-base">
                    Here where users can share their experiences on different
                    websites and how they find it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 mx-9 Card-image">
          <div className="group h-96">
            <div className="relative h-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={problem}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-semibold mb-3">
                    Probleme Section
                  </h1>
                  <p className="text-base">
                    If you find any problem on any websites, inscription
                    problem, withdrawal or anything, you can share it here and
                    other users can help you solve it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 mx-9 Card-image">
          <div className="group h-96">
            <div className="relative h-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={project}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-semibold mb-3">
                    Project Section
                  </h1>
                  <p className="text-base">
                    Users or project owners can share their projects, and other
                    users can contribute to the project so they can make money
                    from the website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
