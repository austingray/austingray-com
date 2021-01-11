import ContentContainer from '../components/content-container';
import Paragraph from '../components/typography/paragraph';

const Index = () => (
  <ContentContainer title="Home">
    <Paragraph>
      Thank you for coming to my website. This is the testing grounds for my
      code. I will be building out a suite of tools as well as creating an
      online presence to support my musical ambitions. You can view the source
      code to this website{' '}
      <a target="_blank" href="https://github.com/austingray/austingray-com">
        here
      </a>
      .
    </Paragraph>
  </ContentContainer>
);

export default Index;
