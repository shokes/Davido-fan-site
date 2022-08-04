import goodTime from './public/a good time cover.jpg';
import betterTime from './public/a better time cover.jpeg';
import OBO from './public/OBO.jpg';

const albums = [
  {
    id: 1,
    title: 'a better time',

    cover: betterTime,
    year: 2020,
    songs: [
      'FEM',
      'Jowo',
      'Something Fishy',
      'Holy Ground',
      'Heaven',
      'Very Special',
      'The Best',
      'Shopping Spree',
      'Sunlight',
      'Tanana',
      'Mebe',
      'La La',
      'So Crazy',
      'Birthday Cake',
      'I Got a Friend',
      'Fade',
      'On My Way',
    ],
  },
  {
    id: 2,
    title: 'a good time',
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
    title: 'omo baba olowo',

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
