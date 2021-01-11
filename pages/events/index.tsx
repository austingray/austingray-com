import Link from 'next/link';
import ContentContainer from '../../components/content-container';
import Paragraph from '../../components/typography/paragraph';

const Index = () => (
  <ContentContainer title="Events">
    <Paragraph>
      Either myself or my band will be delighting audiences all over Southern
      Utah. Dates will be updated as they are added. The Austin Gray Band is
      available for booking as well as solo acoustic performances.{' '}
      <Link href="/contact">Contact me</Link> to get on the calendar!
    </Paragraph>
    <ul>
      <li>
        Saturday, February 20th - Last Chair Saloon, Brian Head, UT - Solo
        Acoustic
      </li>
      <li>
        Friday, February 25th - Private Party, Saint George, UT - Austin Gray
        Band
      </li>
    </ul>
  </ContentContainer>
);

export default Index;
