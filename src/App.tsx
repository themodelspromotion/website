import Stories from 'react-insta-stories';
import { Story as IStory } from 'react-insta-stories/dist/interfaces';
import shuffle from 'knuth-shuffle-seeded';

import { Story } from './components/Story';

import juli from './assets/models/juli.jpg';
import kristina from './assets/models/kristina.jpg';
import alisa from './assets/models/alisa.jpg';
import katty from './assets/models/katty.jpg';
import olga from './assets/models/olga.jpg';
import milla from './assets/models/milla.jpg';

import './App.scss';

const stories: IStory[] = [
  {
    content: ({ action, isPaused }) => (
      <Story
        image={juli}
        link="https://onlyfans.com/your.girlfriend1"
        action={action}
        isPaused={isPaused}
      />
    ),
  },
  {
    content: ({ action, isPaused }) => (
      <Story
        image={kristina}
        link="https://onlyfans.com/ladymarmalade_chris"
        action={action}
        isPaused={isPaused}
      />
    ),
  },
  {
    content: ({ action, isPaused }) => (
      <Story
        image={alisa}
        link="https://onlyfans.com/berryalice"
        action={action}
        isPaused={isPaused}
      />
    ),
  },
  {
    content: ({ action, isPaused }) => (
      <Story
        image={katty}
        link="https://onlyfans.com/urcandy_caramel"
        action={action}
        isPaused={isPaused}
      />
    ),
  },
  {
    content: ({ action, isPaused }) => (
      <Story
        image={olga}
        link="https://instagram.com/olga_feika?igshid=YmMyMTA2M2Y="
        action={action}
        isPaused={isPaused}
      />
    ),
  },
  {
    content: ({ action, isPaused }) => (
      <Story
        image={milla}
        link="https://instagram.com/millarose.1?igshid=YmMyMTA2M2Y="
        action={action}
        isPaused={isPaused}
      />
    ),
  },
];

shuffle(stories);

function App() {
  return (
    <Stories
      loop
      keyboardNavigation
      stories={stories}
      storyContainerStyles={{ backgroundColor: 'rgb(41, 41, 41)' }}
    />
  );
}

export default App;
