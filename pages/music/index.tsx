import ContentContainer from '../../components/content-container';
import Paragraph from '../../components/typography/paragraph';

const Index = () => (
  <ContentContainer title="Music">
    <Paragraph>Check out my latest single on Spotify, Lost Time.</Paragraph>
    <iframe
      src="https://open.spotify.com/embed/track/4zU4jwvZubsC8KSpCIhhgR"
      width="300"
      height="380"
      frameBorder="0"
      allowTransparency={true}
      allow="encrypted-media"
    ></iframe>
  </ContentContainer>
);

export default Index;
