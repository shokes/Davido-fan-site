import goodTime from './public/a good time cover.jpg';
import betterTime from './public/a better time cover.jpeg';
import OBO from './public/OBO.jpg';

const albums = [
  {
    id: 1,
    title: 'A Better Time',

    cover: betterTime,
    year: 2020,
    songs: [
      'FEM',
      'Jowo',
      'Something Fishy',
      'Holy Ground (ft. Nicki Minaj)',
      'Heaven',
      'Very Special',
      'The Best (ft. Mayorkun)',
      'Shopping Spree (ft. Chris Brown & Thug)',
      'Sunlight',
      'Tanana (ft. Tiwa Savage)',
      'Mebe (ft. Mugeez)',
      'La La (ft. CKay)',
      'So Crazy (ft. Lil Baby)',
      'Birthday Cake (ft. Nas & Hit-Boy)',
      'I Got a Friend (ft. Mayorkun & Sho Madjozi)',
      'Fade (ft. Bella Shmurda)',
      'On My Way (ft. Sauti Sol)',
    ],
  },
  {
    id: 2,
    title: 'A Good Time',
    cover: goodTime,
    year: 2019,
    songs: [
      'Intro',
      '1 Milli',
      'Check Am',
      'Disturbance',
      'If',
      'D & G',
      'Get to You',
      'Risky',
      'Sweet in the Middle',
      'Fall',
      'Green Light Riddim',
      'Big Picture',
      'One Thing',
      'Assurance',
      'Blow My Mind',
      'Company',
      'Animashaun',
    ],
  },

  {
    id: 3,
    title: 'Omo Baba Olowo',

    cover: OBO,
    year: 2012,
    songs: [
      'All of You',
      'Back When',
      'New Skul Tinz',
      'Video',
      'Ekuro',
      'Down',
      'No Visa',
      'Enter the Centre',
      'Dollars in the Bank',
      'Sade',
      'Gbon Gbon',
      'Feel Alright',
      'Mary Jane',
      'For You',
      'Overseas',
      'Dami Duro',
      'Bless Me',
    ],
  },
];

export default albums;
