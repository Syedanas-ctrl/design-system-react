import React from 'react';

import { SkeletonType } from './types';

export interface SkeletonProps {
  type: SkeletonType;
  repeat?: number;
  showHeading?: boolean;
  showAvatar?: boolean;
  lines?: number;
}

const Skeleton = ({ type, repeat = 1, lines = 3, showHeading = true, showAvatar = true }: SkeletonProps) => {
  switch (type) {
    case SkeletonType.CTA:
      return (
        <div>
          {Array.from({ length: repeat }).map((_, index) => (
            <div
              key={index}
              className='w-full md:w-128 shadow-evenly overflow-hidden animate-[pulse_1s_ease-in-out_infinite]'>
              <div className='h-6 bg-fill-DARK_3'></div>
              <div className='flex gap-2 justify-between px-4 py-3 bg-white'>
                <div className='flex flex-col w-1/2 justify-center'>
                  <div className='h-4 bg-fill-DARK_3 mb-2 w-full'></div>
                  <div className='h-4 bg-fill-DARK_3 w-2/3'></div>
                </div>
                <div className='w-1/2'>
                  <div className='h-10 bg-fill-DARK_3 rounded'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    case SkeletonType.CARD:
      return (
        <div className='flex flex-col gap-4'>
          {Array.from({ length: repeat }).map((_, index) => (
            <div key={index} className='animate-[pulse_1s_ease-in-out_infinite]'>
              {showHeading && <div className='h-6 w-32 mb-2 bg-fill-DARK_3 rounded ' />}
              <div className='flex gap-4'>
                {showAvatar && (
                  <div className='pb-4 flex justify-between'>
                    <div className='h-10 w-10 bg-fill-DARK_3 rounded-lg'></div>
                  </div>
                )}
                <div className='flex flex-col gap-6 w-full'>
                  <div>
                    <div className='h-4 mb-2 bg-fill-DARK_3 rounded w-1/2'></div>
                    <div className='flex flex-col gap-2'>
                      {Array.from({ length: lines }).map((_, index) => (
                        <div
                          key={index}
                          className={`h-4 bg-fill-DARK_3 rounded ${index % 2 === 0 ? 'w-1/2' : 'w-full'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case SkeletonType.BILL:
      return (
        <div>
          {Array.from({ length: repeat }).map((_, index) => (
            <div key={index} className='py-5 animate-[pulse_1s_ease-in-out_infinite]'>
              <button className='pb-4 flex justify-between w-full'>
                <div className='h-4 bg-fill-DARK_3 rounded w-1/3'></div>
                <div className='h-4 bg-fill-DARK_3 rounded w-4'></div>
              </button>
              <div className='flex flex-col gap-6'>
                <div>
                  <div className='flex gap-3'>
                    <div className='h-6 w-6 bg-fill-DARK_3 rounded'></div>
                    <div className='flex flex-col gap-1'>
                      <div className='h-4 bg-fill-DARK_3 rounded w-1/2'></div>
                      <div className='h-4 bg-fill-DARK_3 rounded w-1/2'></div>
                      <div className='h-4 bg-fill-DARK_3 rounded w-1/2'></div>
                      <div className='h-4 bg-fill-DARK_3 rounded w-1/2'></div>
                      <div className='h-4 bg-fill-DARK_3 rounded w-1/2'></div>
                      <div className='h-4 bg-fill-DARK_3 rounded w-1/2'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case SkeletonType.Box:
      return (
        <>
          {Array.from({ length: repeat }).map((_, index) => (
            <div
              key={index}
              className='rounded-lg w-32 h-32 bg-fill-DARK_3 animate-[pulse_1s_ease-in-out_infinite]'></div>
          ))}
        </>
      );
  }
};

export default Skeleton;
