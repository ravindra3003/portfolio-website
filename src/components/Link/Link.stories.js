import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://res.cloudinary.com/dn2mupqo0/image/upload/v1657101846/letter-r_t9vwaq.png">Primary link</Link>
    <Link secondary href="https://res.cloudinary.com/dn2mupqo0/image/upload/v1657101846/letter-r_t9vwaq.png">
      Secondary link
    </Link>
  </StoryContainer>
);
