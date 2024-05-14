import { useSelector } from 'react-redux';
import { selectSystemMode } from '../../../../store/system/system.selector.js';

import {
    AppPanelContainer,
    InfoContainer,
    Title,
    ReleaseDateContainer,
    ReleaseDate,
    Moon
} from './AppPanel.styles.js';

export default function AppPanel({ children, title, releaseDate, $singleLine=false }) {
  const systemMode = useSelector(selectSystemMode);

  return (
    <AppPanelContainer $singleLine={$singleLine} $mode={systemMode}>
      {!$singleLine ?
        <>
          { children }
          <InfoContainer>     
              <Title>{title}</Title>
              <ReleaseDateContainer>
                  <ReleaseDate>{releaseDate}</ReleaseDate>
                  <Moon />
              </ReleaseDateContainer>
          </InfoContainer>
        </>
        :
        <h3>{title}</h3>
      }
    </AppPanelContainer>
  )
}
