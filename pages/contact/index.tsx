import ContentContainer from '../../components/content-container';
import Paragraph from '../../components/typography/paragraph';

const Index = () => (
  <ContentContainer title="Contact">
    <Paragraph>I'm looking to partner on </Paragraph>
    <Paragraph>Get in touch any of the following ways:</Paragraph>
    <ul>
      <li>
        <a href="https://twitter.com/austingray" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://facebook.com/austingrayband" target="_blank">
          Facebook
        </a>
      </li>
      <li>
        <a href="https://github.com/austingray" target="_blank">
          Github
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/williamaustingray/"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
    </ul>
    <Paragraph>
      Email me: waustingray [at] gmail [dot] com
      <br />
      Call or Text: 214-263-3024
    </Paragraph>
  </ContentContainer>
);

export default Index;
