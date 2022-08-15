import Image from 'next/image';
import HorizontalScroll from 'react-scroll-horizontal';
import davido3 from '../../public/davido-3.jpeg';
import davido4 from '../../public/davido-4.jpeg';
import davido6 from '../../public/davido-6.jpeg';
import davido7 from '../../public/davido-7.jpeg';
import davido8 from '../../public/davido-8.jpeg';
import davido9 from '../../public/davido-9.jpeg';
import davido11 from '../../public/davido-11.jpeg';
import davido12 from '../../public/davido-12.jpeg';
import davido13 from '../../public/davido-13.jpeg';
import davido14 from '../../public/davido-14.jpeg';
import davido15 from '../../public/davido-15.jpeg';
import davido16 from '../../public/davido-16.jpeg';

const archivePics = [
  {
    id: 13,
    picture: davido13,
  },
  {
    id: 11,
    picture: davido11,
  },
  {
    id: 8,
    picture: davido8,
  },
  {
    id: 7,
    picture: davido7,
  },

  {
    id: 3,
    picture: davido3,
  },
  {
    id: 4,
    picture: davido4,
  },

  {
    id: 6,
    picture: davido6,
  },
  {
    id: 12,
    picture: davido12,
  },

  {
    id: 9,
    picture: davido9,
  },

  {
    id: 14,
    picture: davido14,
  },
  {
    id: 15,
    picture: davido15,
  },
  {
    id: 16,
    picture: davido16,
  },
];
export const ArchiveScroll = () => {
  const child = { width: `450em`, height: `30em` };
  return (
    <>
      <div className='hidden lg:block app'>
        <HorizontalScroll reverseScroll={true}>
          <div style={child} className='flex gap-x-10  '>
            {archivePics.map((item) => {
              return (
                <Image
                  src={item.picture}
                  width={1300}
                  height={50}
                  className='object-fill'
                />
              );
            })}
          </div>
        </HorizontalScroll>
      </div>

      <div className='container lg:hidden'>
        <div className='flex flex-col gap-10  '>
          {archivePics.map((item) => {
            return (
              <Image
                src={item.picture}
                width={300}
                height={550}
                // className='object-fill'
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
