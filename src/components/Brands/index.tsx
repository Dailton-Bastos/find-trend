import Airtable from '~/assets/images/airtable.png';
import Algolia from '~/assets/images/algolia.png';
import Allianz from '~/assets/images/allianz.png';
import Bonanza from '~/assets/images/bonanza.png';
import Carrera from '~/assets/images/carrera.png';
import Coinbase from '~/assets/images/coinbase.png';
import Expedia from '~/assets/images/expedia.png';
import Grab from '~/assets/images/grab.png';
import Heineken from '~/assets/images/heineken.png';
import Magento from '~/assets/images/magento.png';
import Microsoft from '~/assets/images/microsoft.png';
import Suzuki from '~/assets/images/suzuki.png';
import Upwork from '~/assets/images/upwork.png';
import Verizon from '~/assets/images/verizon.png';
import Volvo from '~/assets/images/volvo.png';
import WeTransfer from '~/assets/images/weTransfer.png';
import { Container } from '~/components/Container';

import { Brand } from './Brand';
import * as Styled from './styles';

export const Brands = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <p>
            Findtrend helps you to increase your productivity and reduce your
            computer&apos;s memory load,{' '}
            <span>
              an application that can fulfill your daily browsing needs.
            </span>
          </p>

          <h2>Findtrend make +1000 Startup grow</h2>

          <div className="grid">
            <Brand logo={Microsoft} name="Microsoft" />
            <Brand logo={Allianz} name="Allianz" />
            <Brand logo={Upwork} name="Upwork" />
            <Brand logo={Volvo} name="Volvo" />
            <Brand logo={Grab} name="Grab" />
            <Brand logo={Verizon} name="Verizon" />
            <Brand logo={Coinbase} name="Coinbase" />
            <Brand logo={Expedia} name="Expedia" />
            <Brand logo={Airtable} name="Airtable" />
            <Brand logo={Magento} name="Aagento" />
            <Brand logo={Carrera} name="Aarrera" />
            <Brand logo={Bonanza} name="Bonanza" />
            <Brand logo={WeTransfer} name="WeTransfer" />
            <Brand logo={Suzuki} name="Suzuki" />
            <Brand logo={Algolia} name="Algolia" />
            <Brand logo={Heineken} name="Heineken" />
          </div>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
